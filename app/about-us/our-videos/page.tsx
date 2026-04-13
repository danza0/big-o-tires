import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = { title: "Our Videos" };

const videos = [
  { title: "TREAD Membership Perks", id: "I6gGpk8uyoU" },
];

export default function VideosPage() {
  return (
    <>
      <PageHero title="Our Videos" subtitle="Watch our latest videos, tips, and behind-the-scenes content." breadcrumbs={[{ label: "About Us", href: "/about-us" }, { label: "Our Videos" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-8">
            {videos.map((v, i) => (
              <AnimatedSection key={v.id} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                  <div className="aspect-video">
                    <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900">{v.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
