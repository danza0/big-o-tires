"use client";

import Link from "next/link";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FleetSection() {
  return (
    <section className="py-16 bg-[var(--accent-gray)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[var(--secondary-black)] to-gray-800 rounded-2xl p-10 text-white aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <Users className="w-20 h-20 mx-auto mb-4 text-[var(--primary-red)]" />
                <p className="text-2xl font-bold">Fleet Services</p>
                <p className="text-gray-400 mt-2">For businesses of all sizes</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-black)] mb-4">
              Fleet Services
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Get your vehicles in the best shape with our comprehensive fleet services. We offer priority scheduling,
              volume pricing, and detailed maintenance tracking for businesses of all sizes.
            </p>
            <ul className="space-y-3 mb-8">
              {["Priority scheduling", "Volume pricing", "Maintenance tracking", "Customized service plans"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-red)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/auto-repairs/fleet-services"
              className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-7 rounded-lg transition-colors"
            >
              Fleet Services <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
