import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Phone } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "Used Tires" };

export default function UsedTiresPage() {
  return (
    <>
      <PageHero title="Used Tires" subtitle="Quality inspected used tires at affordable prices." breadcrumbs={[{ label: "Tires", href: "/tires" }, { label: "Used Tires" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold mb-4">Quality Used Tires in Victoria</h2>
            <p className="text-gray-600 mb-6">Need affordable tires without compromising on safety? Our used tires are carefully inspected for tread depth, sidewall integrity, and overall condition before they go on the shelf.</p>
            <div className="bg-[var(--accent-gray)] rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-3">Why Buy Used Tires From Us?</h3>
              <ul className="space-y-2">
                {["Every tire inspected for safety", "Minimum tread depth guaranteed", "Affordable pricing", "Professional installation available", "Wide selection of sizes and brands", "Environmentally responsible choice"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm"><CheckCircle className="w-4 h-4 text-[var(--primary-red)] shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> Call for Availability: {business.phone}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
