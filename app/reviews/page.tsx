import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Star, ExternalLink } from "lucide-react";
import { business } from "@/lib/data";

export const metadata: Metadata = { title: "Reviews" };

const reviews = [
  { name: "Michael T.", text: "Best tire shop in Victoria. Fair prices, fast service, and the staff really knows their stuff. Highly recommend!", rating: 5 },
  { name: "Sarah L.", text: "Had my brakes done here and the experience was top-notch. They explained everything clearly and the price was very fair.", rating: 5 },
  { name: "James K.", text: "I've been coming to Big O Tires for over 10 years. Consistently great service, honest advice, and competitive pricing.", rating: 5 },
  { name: "Emily R.", text: "Got a set of winter tires and they had the best selection in town. The whole team was super helpful.", rating: 5 },
  { name: "David W.", text: "Quick oil change, no upselling, fair price. This is how auto service should be. Will be back!", rating: 5 },
  { name: "Lisa M.", text: "The fleet service has been amazing for our business. Priority scheduling saves us so much time.", rating: 5 },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero title="Customer Reviews" subtitle="See what our customers say about us. Victoria's #1 rated tire and auto repair store." breadcrumbs={[{ label: "Reviews" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center mb-12">
              <div className="flex justify-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-7 h-7 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-3xl font-extrabold text-[var(--secondary-black)]">5.0 / 5.0</p>
              <p className="text-gray-500 mt-1">Based on hundreds of customer reviews</p>
              <a href={business.socialMedia.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--primary-red)] hover:underline">
                See all Google Reviews <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 0.05}>
                <div className="bg-white border border-gray-100 rounded-xl p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({length: r.rating}).map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center mt-10">
              <a href={business.socialMedia.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Leave a Review <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
