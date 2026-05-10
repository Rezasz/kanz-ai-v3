/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Kanz ink palette — driven by CSS vars in index.css
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        kmuted: 'var(--muted)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        gold: 'var(--accent)',
        'gold-soft': 'var(--accent-soft)',
        'gold-ink': 'var(--accent-ink)',
        // Legacy PwC names redirected to the new palette so any unconverted
        // utility classes (text-pwc-orange, bg-pwc-gray) still render coherently
        pwc: {
          orange: 'var(--accent)',
          gray: 'var(--paper-2)',
        },
      },
      fontFamily: {
        display: ['var(--display)', 'system-ui', 'sans-serif'],
        sans: ['var(--sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: 'kanz-marquee 60s linear infinite',
        'radar-sweep': 'kanz-radar-sweep 18s linear infinite',
        'fade-up': 'kanz-fade-up 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
