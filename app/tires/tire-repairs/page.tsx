import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Phone } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "Tire Repairs" };

export default function TireRepairsPage() {
  return (
    <>
      <PageHero title="Tire Repairs" subtitle="Fast, reliable tire repairs to get you back on the road safely." breadcrumbs={[{ label: "Tires", href: "/tires" }, { label: "Tire Repairs" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold mb-4">Tire Repair Services</h2>
            <p className="text-gray-600 mb-6">Got a flat or slow leak? Our technicians can quickly assess and repair your tire, saving you the cost of a full replacement when possible.</p>
            <div className="bg-[var(--accent-gray)] rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-3">Our Tire Repair Services</h3>
              <ul className="space-y-2">
                {["Puncture repair (plug & patch)", "Slow leak diagnosis", "TPMS sensor service", "Valve stem replacement", "Tire pressure checks", "Tire rotation"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm"><CheckCircle className="w-4 h-4 text-[var(--primary-red)] shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> Call Us: {business.phone}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
