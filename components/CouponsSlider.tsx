"use client";

import Link from "next/link";
import { tireRebates } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CouponsSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--secondary-black)]">
              Tire <span className="text-[var(--primary-red)]">Rebates</span> & Coupons
            </h2>
            <p className="text-gray-500 mt-3">Check out our latest tire rebates from top brands</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {tireRebates.slice(0, 8).map((rebate, i) => (
            <AnimatedSection key={rebate.brand} delay={i * 0.05}>
              <a
                href={rebate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--accent-gray)] rounded-xl p-5 text-center hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[var(--primary-red)]/20 block"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-lg font-bold text-[var(--primary-red)]">
                    {rebate.brand.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-gray-900">{rebate.brand}</h3>
                <p className="text-[var(--primary-red)] font-bold text-lg mt-1">{rebate.amount}</p>
                <span className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-1 group-hover:text-[var(--primary-red)] transition-colors">
                  Get Rebate <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
          <Link href="/tire-rebates" className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All Rebates <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/coupons" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[var(--primary-red)] text-gray-700 hover:text-[var(--primary-red)] font-semibold py-3 px-8 rounded-lg transition-colors">
            View Coupons
          </Link>
        </div>
      </div>
    </section>
  );
}
