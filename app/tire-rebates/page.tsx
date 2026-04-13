import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { tireRebates } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Tire Rebates" };

export default function TireRebatesPage() {
  return (
    <>
      <PageHero title="Tire Rebates" subtitle="Save big with manufacturer rebates from top tire brands." breadcrumbs={[{ label: "Tire Rebates" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Current rebates and promotions from the brands we carry. Click any rebate to visit the manufacturer&apos;s rebate page.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tireRebates.map((r, i) => (
              <AnimatedSection key={r.brand} delay={i * 0.03}>
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg hover:border-[var(--primary-red)]/20 transition-all duration-300 block"
                >
                  <div className="w-14 h-14 rounded-full bg-[var(--accent-gray)] flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-extrabold text-[var(--primary-red)]">{r.brand.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{r.brand}</h3>
                  <p className="text-[var(--primary-red)] font-extrabold text-2xl mt-1">{r.amount}</p>
                  <p className="text-xs text-gray-400 mt-1">Rebate</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-400 group-hover:text-[var(--primary-red)] transition-colors">
                    Get Rebate <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
