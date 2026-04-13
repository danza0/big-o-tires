import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import ServicesSection from "@/components/ServicesSection";
import TreadSection from "@/components/TreadSection";
import TireFinder from "@/components/TireFinder";
import FleetSection from "@/components/FleetSection";
import CouponsSlider from "@/components/CouponsSlider";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServicesSection />
      <TreadSection />
      <TireFinder />
      <FleetSection />
      <CouponsSlider />
      <AboutSection />
    </>
  );
}
