import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Phone } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "Tire Storage" };

export default function TireStoragePage() {
  return (
    <>
      <PageHero title="Tire Storage" subtitle="Convenient seasonal tire storage — we keep them safe and swap-ready." breadcrumbs={[{ label: "Tires", href: "/tires" }, { label: "Tire Storage" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold mb-4">Seasonal Tire Storage</h2>
            <p className="text-gray-600 mb-6">Don&apos;t let your off-season tires take up space in your garage. Our climate-appropriate storage facility keeps your tires in optimal condition until you need them again.</p>
            <div className="bg-[var(--accent-gray)] rounded-xl p-6 mb-8">
              <h3 className="font-bold mb-3">Storage Benefits</h3>
              <ul className="space-y-2">
                {["Safe, organized storage facility", "Tires inspected on intake", "Easy seasonal swap scheduling", "Protects tires from UV and temperature damage", "No heavy lifting for you", "Convenient downtown locations"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm"><CheckCircle className="w-4 h-4 text-[var(--primary-red)] shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> Book Storage: {business.phone}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
