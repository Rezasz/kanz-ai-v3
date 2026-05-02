// One helper that every form on the site calls. Built to the OmniInbox
// external developer guide:
// https://github.com/Rezasz/omniinbox/blob/main/docs/external-developer-guide.md
//
// Configuration via Vite env vars (`VITE_OMNIINBOX_*`); falls back to the
// kanz.ai shared values so the form works without any Vercel changes.
// To rotate the token, set the env vars in Vercel and redeploy.

const ENDPOINT =
  import.meta.env.VITE_OMNIINBOX_ENDPOINT ||
  'https://omniinbox.kanz.ai/public/contact-form';
const TOKEN =
  import.meta.env.VITE_OMNIINBOX_TOKEN ||
  'omni-shared-vxaLteemYkqFMYaAgCwHXgHraNiweFKY';
const SLUG = import.meta.env.VITE_OMNIINBOX_SLUG || 'kanz-ai';

export type ContactPayload = {
  email: string;
  message: string;
  name?: string;
  phone?: string;
  company?: string;
  company_size?: string;
  country?: string;
  subject?: string;
  page_url?: string;
  metadata?: Record<string, unknown>;
};

export type SubmitResult =
  | { ok: true; messageId: number }
  | { ok: false; error: string; status?: number };

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

const collectUtm = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
};

export async function submitToOmniInbox(p: ContactPayload): Promise<SubmitResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        company_slug: SLUG,
        email: p.email,
        message: p.message,
        name: p.name || undefined,
        phone: p.phone || undefined,
        company: p.company || undefined,
        company_size: p.company_size || undefined,
        country: p.country || undefined,
        subject: p.subject || undefined,
        page_url:
          p.page_url ?? (typeof window !== 'undefined' ? window.location.href : undefined),
        metadata: {
          ...(p.metadata || {}),
          ...collectUtm(),
        },
      }),
    });
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}`, status: res.status };
    }
    const data = (await res.json()) as { message_id: number };
    return { ok: true, messageId: data.message_id };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}
