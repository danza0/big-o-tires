"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business } from "@/lib/data";

export default function TreadSection() {
  return (
    <section className="py-16 bg-[var(--secondary-black)] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="inline-block bg-[var(--primary-red)] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Membership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              TREAD Membership
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join our exclusive TREAD Membership program and enjoy special perks, discounts, and priority service.
              It&apos;s our way of thanking loyal customers for choosing Big O Tires Victoria.
            </p>
            <Link
              href="/about-us/tread-membership"
              className="inline-block bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Click Here to Join
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src={business.treadVideo}
                title="TREAD Membership"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
