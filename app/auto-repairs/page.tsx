import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import type { IconName } from "@/components/ui/ServiceCard";

export const metadata: Metadata = { title: "Auto Repairs" };

export default function AutoRepairsPage() {
  return (
    <>
      <PageHero title="Auto Repairs" subtitle="Professional auto repair services you can trust. Expert technicians, quality parts, guaranteed work." breadcrumbs={[{ label: "Auto Repairs" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold">Our Services</h2>
              <p className="text-gray-500 mt-2">From routine maintenance to major repairs — we do it all.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.05}>
                <ServiceCard title={s.title} description={s.shortDesc} icon={s.icon as IconName} href={`/auto-repairs/${s.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
