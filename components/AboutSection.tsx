"use client";

import Link from "next/link";
import { CheckCircle, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business, locations } from "@/lib/data";

export default function AboutSection() {
  const features = [
    "Top-Rated Tire Shop — #1 in the Times Colonist & Black Press Awards",
    "Largest Selection — Huge 7,000 sq. ft. inventory of new tires & wheels",
    "Affordable Auto Repairs — Expert brake service, alignments & diagnostics",
    "Local Experts — Serving Victoria, BC drivers for over 30 years",
  ];

  return (
    <section className="py-16 bg-[var(--accent-gray)]">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-black)] text-center mb-4">
            Your Trusted Tire & Auto Repair Experts
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Looking for the best tire and auto-repair store in Victoria, BC? Big O Tires Victoria is the city&apos;s
            #1 destination for new tires, wheels, expert auto repairs, and much more.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              We offer <strong>0% customer financing</strong> both in-store and online! Financing offered in-store
              with no credit check required through EZ Fixed, as well as online through Affirm.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {locations.map((loc) => (
                <div key={loc.id} className="bg-[var(--accent-gray)] rounded-xl p-5 border-l-4 border-[var(--primary-red)]">
                  <h3 className="font-bold text-[var(--secondary-black)]">{loc.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {loc.address}, {loc.city}, {loc.province}
                  </p>
                  <p className="text-[var(--primary-red)] text-xs font-semibold mt-1">{loc.note}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-red)] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us Today: {business.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
