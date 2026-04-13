import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TireFinder from "@/components/TireFinder";
import { tireRebates } from "@/lib/data";

export const metadata: Metadata = { title: "Tires" };

const tireCategories = [
  { title: "Passenger & Light Truck Tires", desc: "Huge selection of all-season, winter, performance and all-terrain tires from top brands.", href: "/tires" },
  { title: "Used Tires", desc: "Quality inspected used tires at affordable prices. Great value without compromising safety.", href: "/tires/used-tires" },
  { title: "Tire Storage", desc: "Seasonal tire storage so you don't have to worry about space. We keep them safe and ready.", href: "/tires/tire-storage" },
  { title: "Tire Repairs", desc: "Flat tire? We offer fast, reliable tire repairs including patching, plugging, and TPMS service.", href: "/tires/tire-repairs" },
];

export default function TiresPage() {
  return (
    <>
      <PageHero title="Tires" subtitle="Victoria's largest selection of new tires — over 7,000 sq. ft. of inventory from top brands." breadcrumbs={[{ label: "Tires" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {tireCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 0.1}>
                <Link href={cat.href} className="group block bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[var(--primary-red)]/20 transition-all">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[var(--primary-red)] transition-colors mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <TireFinder />
      <section className="py-14 bg-[var(--accent-gray)]">
        <div className="container mx-auto px-4">
          <AnimatedSection><h2 className="text-2xl font-extrabold text-center mb-8">Tire Brands We Carry</h2></AnimatedSection>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {tireRebates.map((r) => (
              <div key={r.brand} className="bg-white rounded-lg p-3 text-center border border-gray-100">
                <span className="text-xs font-semibold text-gray-700">{r.brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
