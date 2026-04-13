import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { awards, business, locations } from "@/lib/data";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const subPages = [
  { title: "Our Videos", desc: "Watch our latest videos and tips.", href: "/about-us/our-videos" },
  { title: "Blog", desc: "Read our latest articles and car care tips.", href: "/about-us/blog" },
  { title: "TREAD Membership", desc: "Join our exclusive membership program.", href: "/about-us/tread-membership" },
  { title: "Customer Reviews", desc: "See what our customers say about us.", href: "/reviews" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Victoria's trusted tire and auto repair experts for over 30 years." breadcrumbs={[{ label: "About Us" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Big O Tires Victoria has been serving the Victoria, BC community for over 30 years. What started as a single tire shop has grown into Victoria&apos;s most trusted destination for tires, wheels, and complete auto repair services.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With two convenient locations — our tire and wheel showroom on Quadra Street and our full mechanical facility on Pandora Avenue — we&apos;re equipped to handle everything from a simple tire swap to complex engine diagnostics.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;re proud to have been voted Victoria&apos;s Best Tire Store by the Times Colonist and Black Press, and we maintain an A+ rating with the Better Business Bureau. Our success comes from treating every customer like family.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {awards.map((a) => (
                <div key={a.title} className="bg-[var(--accent-gray)] rounded-xl p-5 text-center">
                  <p className="text-2xl font-extrabold text-[var(--primary-red)]">{a.title}</p>
                  <p className="font-semibold text-sm text-gray-800">{a.subtitle}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.detail}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="text-xl font-extrabold mb-4">Explore More</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {subPages.map((p) => (
                <Link key={p.title} href={p.href} className="group flex items-center justify-between bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[var(--primary-red)]/20 transition-all">
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[var(--primary-red)] transition-colors">{p.title}</h4>
                    <p className="text-gray-500 text-sm mt-0.5">{p.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--primary-red)] transition-colors shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
