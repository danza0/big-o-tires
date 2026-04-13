import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, ArrowRight } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "Wheels" };

const wheelTypes = [
  { title: "Alloy Wheels", desc: "Lightweight, stylish alloy wheels from top brands. Improve performance and looks." },
  { title: "Chrome Wheels", desc: "Premium chrome wheels for a mirror-like shine that turns heads." },
  { title: "Off-Road Wheels", desc: "Rugged wheels built for trucks and SUVs that go off the beaten path." },
  { title: "Winter Wheels", desc: "Dedicated winter wheel sets to protect your OEM wheels from road salt and cold." },
  { title: "Wheel & Tire Packages", desc: "Save money by bundling wheels and tires together. Mounted and balanced, ready to go." },
  { title: "Custom Wheels", desc: "Make your vehicle uniquely yours with custom wheel options in every size and style." },
];

export default function WheelsPage() {
  return (
    <>
      <PageHero title="Wheels" subtitle="Custom wheels, alloys, chrome, and wheel & tire packages. Victoria's best selection." breadcrumbs={[{ label: "Wheels" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {wheelTypes.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.05}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-gray-500 text-sm">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="bg-[var(--secondary-black)] text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Upgrade Your Wheels?</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">Visit our 7,000 sq. ft. showroom or give us a call. We&apos;ll help you find the perfect wheels for your vehicle.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> {business.phone}
                </a>
                <Link href="/contact-us" className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
