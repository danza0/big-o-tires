import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Phone } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "TREAD Membership" };

const perks = [
  "Exclusive member discounts on tires and services",
  "Priority scheduling for appointments",
  "Free tire rotations with membership",
  "Seasonal tire storage discounts",
  "Members-only promotions and events",
  "Dedicated customer support line",
];

export default function TreadMembershipPage() {
  return (
    <>
      <PageHero title="TREAD Membership" subtitle="Join our exclusive membership program and enjoy special perks and savings." breadcrumbs={[{ label: "About Us", href: "/about-us" }, { label: "TREAD Membership" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <AnimatedSection>
              <h2 className="text-2xl font-extrabold mb-4">Why Join TREAD?</h2>
              <p className="text-gray-600 mb-6">The TREAD Membership is our way of thanking loyal customers. As a member, you&apos;ll enjoy exclusive benefits that save you money and make your experience even better.</p>
              <ul className="space-y-3 mb-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-[var(--primary-red)] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                <Phone className="w-4 h-4" /> Call to Join: {business.phone}
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                <iframe src={business.treadVideo} title="TREAD Membership" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
