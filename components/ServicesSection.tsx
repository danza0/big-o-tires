"use client";

import Link from "next/link";
import { Droplet, Disc3, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-[var(--accent-gray)]">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-black)]">
              Oil Changes <span className="text-[var(--primary-red)]">&</span> Brake Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Professional auto repair services you can trust. From routine maintenance to major repairs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Link
              href="/auto-repairs/oil-change"
              className="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary-red)] flex items-center justify-center mb-5">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oil Changes</h3>
              <p className="text-gray-500 text-sm mb-4">Full synthetic, conventional, and high-mileage oil changes with complimentary multi-point inspection.</p>
              <span className="text-[var(--primary-red)] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Link
              href="/auto-repairs/brake-service"
              className="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--secondary-black)] flex items-center justify-center mb-5">
                <Disc3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brake Services</h3>
              <p className="text-gray-500 text-sm mb-4">Complete brake inspection, repair, and replacement. Quality parts with satisfaction guarantee.</p>
              <span className="text-[var(--primary-red)] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
