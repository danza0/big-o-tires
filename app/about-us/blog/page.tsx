import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  { title: "When Should You Replace Your Tires?", excerpt: "Learn the signs that indicate it's time for new tires, from tread depth to age.", date: "2026-03-15" },
  { title: "5 Tips for Extending Brake Life", excerpt: "Simple driving habits and maintenance tips to get more life out of your brakes.", date: "2026-02-28" },
  { title: "Winter vs All-Season Tires: Which Do You Need?", excerpt: "Understanding the difference and why it matters for Victoria drivers.", date: "2026-01-10" },
  { title: "The Benefits of Regular Wheel Alignments", excerpt: "Save money on tires and fuel with proper wheel alignment maintenance.", date: "2025-12-05" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" subtitle="Car care tips, automotive news, and helpful advice from our experts." breadcrumbs={[{ label: "About Us", href: "/about-us" }, { label: "Blog" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            {posts.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <article className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
                  <time className="text-xs text-gray-400 font-medium">{new Date(p.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
                  <h2 className="text-lg font-bold text-gray-900 mt-1">{p.title}</h2>
                  <p className="text-gray-500 text-sm mt-2">{p.excerpt}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
