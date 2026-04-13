import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TireFinder from "@/components/TireFinder";
import CouponsSlider from "@/components/CouponsSlider";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <TireFinder />
        <CouponsSlider />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
