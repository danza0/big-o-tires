"use client";

import { useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business } from "@/lib/data";

declare global {
  interface Window {
    TCWidget?: {
      initForm: (config: Record<string, string>) => void;
    };
  }
}

export default function TireFinder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.tireconnect.ca/js/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.TCWidget) {
        window.TCWidget.initForm({
          apikey: business.tireConnectApiKey,
          layout: "vertical",
          locationDetect: "auto",
          view: "compact",
          container: "tireconnect",
          redirectUrl: "/tires",
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-black)]">
              Shop for <span className="text-[var(--primary-red)]">Tires</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Select your vehicle information below to find your new tires
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="max-w-4xl mx-auto bg-[var(--accent-gray)] rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <div id="tireconnect" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
