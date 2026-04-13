import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { locations, business } from "@/lib/data";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = { title: "See Our Shop" };

export default function SeeOurShopPage() {
  return (
    <>
      <PageHero title="See Our Shop" subtitle="Take a look at our two Victoria locations — over 7,000 sq. ft. of tires and wheels." breadcrumbs={[{ label: "See Our Shop" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.id} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-sm font-medium">{loc.name}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900">{loc.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{loc.address}, {loc.city}, {loc.province} {loc.postalCode}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-[var(--primary-red)]">{loc.note}</span>
                    <div className="mt-4 flex gap-3">
                      <a href={business.phoneHref} className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[var(--primary-red)] transition-colors">
                        <Phone className="w-3.5 h-3.5" /> {business.phone}
                      </a>
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[var(--primary-red)] transition-colors">
                        <MapPin className="w-3.5 h-3.5" /> Directions
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="bg-[var(--accent-gray)] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-extrabold mb-3">Visit Us Today</h2>
              <p className="text-gray-500 max-w-lg mx-auto mb-6">Whether you need tires, wheels, or full auto repair service, we have a location for you. Walk-ins welcome!</p>
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
