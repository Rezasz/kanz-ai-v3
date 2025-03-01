import React, { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  target?: string;
  className?: string;
  onFormSubmit?: () => void;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  portalId = "143927153",
  formId = "bfda05b2-6331-4d2b-aef3-eab85175f733",
  region = "eu1",
  target = "hubspotForm",
  className = "",
  onFormSubmit
}) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector(`script[src="//js-${region}.hsforms.net/forms/embed/v2.js"]`)) {
      scriptLoadedRef.current = true;
    }

    // Function to create the form
    const createForm = () => {
      if (window.hbspt && formContainerRef.current) {
        // Clear any existing form first
        while (formContainerRef.current.firstChild) {
          formContainerRef.current.removeChild(formContainerRef.current.firstChild);
        }

        // Create the form
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: `#${target}`,
          cssClass: className,
          onFormSubmitted: function($form) {
            console.log("Form submitted successfully");
            if (onFormSubmit) {
              onFormSubmit();
            }
          },
          onFormReady: function($form) {
            // Add custom event listener to the form
            const form = document.querySelector(`#${target} form`);
            if (form) {
              form.addEventListener('submit', function(e) {
                console.log("Form submission detected");
                // The actual submission will be handled by HubSpot
              });
            }
          }
        });
      }
    };

    // If script is already loaded, create form immediately
    if (scriptLoadedRef.current && window.hbspt) {
      createForm();
      return;
    }

    // Otherwise, load the script
    const script = document.createElement("script");
    script.src = `//js-${region}.hsforms.net/forms/embed/v2.js`;
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    
    // Create form when script loads
    script.onload = () => {
      scriptLoadedRef.current = true;
      createForm();
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // We don't remove the script as it might be used by other forms
      // Just clean up the form container
      if (formContainerRef.current) {
        while (formContainerRef.current.firstChild) {
          formContainerRef.current.removeChild(formContainerRef.current.firstChild);
        }
      }
    };
  }, [portalId, formId, region, target, className, onFormSubmit]);

  return <div id={target} ref={formContainerRef} className={className}></div>;
};

export default HubSpotForm;