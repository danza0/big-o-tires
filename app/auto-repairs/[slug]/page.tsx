import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, business } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return { title: service.title };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[{ label: "Auto Repairs", href: "/auto-repairs" }, { label: service.title }]}
      />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-extrabold mb-4">{service.title} in Victoria, BC</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <div className="bg-[var(--accent-gray)] rounded-xl p-6 mb-8">
                  <h3 className="font-bold mb-4">What&apos;s Included</h3>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-[var(--primary-red)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={business.phoneHref} className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    <Phone className="w-4 h-4" /> Call: {business.phone}
                  </a>
                  <Link href="/contact-us" className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[var(--primary-red)] text-gray-700 hover:text-[var(--primary-red)] font-semibold py-3 px-6 rounded-lg transition-colors">
                    Contact Us
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.15}>
                <div className="bg-[var(--accent-gray)] rounded-xl p-5">
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Other Services</h3>
                  <div className="space-y-3">
                    {otherServices.map((s) => (
                      <Link key={s.slug} href={`/auto-repairs/${s.slug}`} className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-[var(--primary-red)] transition-colors group">
                        {s.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                    <Link href="/auto-repairs" className="block text-[var(--primary-red)] font-semibold text-sm mt-4 hover:underline">
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
