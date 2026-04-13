"use client";

import { useEffect } from "react";

export default function TireFinder() {
  useEffect(() => {
    // Load TireConnect widget script
    const script = document.createElement("script");
    script.src = "https://app.tireconnect.ca/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-4">
            Shop for Tires
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select your vehicle information below to find your new tires
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6 md:p-8">
          <div id="tireconnect" className="tireconnect-widget" />
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof TCWidget !== 'undefined') {
                TCWidget.initForm({
                  apikey: '2b4bae2633439f504e8fd628466926c9',
                  layout: 'vertical',
                  locationDetect: 'auto',
                  view: 'compact',
                  container: 'tireconnect',
                  redirectUrl: '/tires',
                });
              }
            `,
          }}
        />
      </div>
    </section>
  );
}
