import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { coupons, business } from "@/lib/data";
import { Tag, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Coupons" };

export default function CouponsPage() {
  return (
    <>
      <PageHero title="Coupons" subtitle="Save on auto repairs and services with our current coupons." breadcrumbs={[{ label: "Coupons" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-5">
            {coupons.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.05}>
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 hover:border-[var(--primary-red)]/40 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary-red)]/10 flex items-center justify-center shrink-0">
                      <Tag className="w-5 h-5 text-[var(--primary-red)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{c.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{c.description}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <Link href={c.href} className="text-[var(--primary-red)] font-semibold text-sm hover:underline">
                          Learn More &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Mention these coupons when you call or visit.</p>
              <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                <Phone className="w-4 h-4" /> Call: {business.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
