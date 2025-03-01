interface Window {
  hbspt?: {
    forms: {
      create: (options: {
        portalId: string;
        formId: string;
        region?: string;
        target: string;
        cssClass?: string;
        onFormSubmit?: () => void;
        onFormReady?: (form: any) => void;
        [key: string]: any;
      }) => void;
    };
  };
}