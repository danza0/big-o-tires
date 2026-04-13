"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export default function Hero() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-secondary-black">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: `translateY(${scrollPos * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Victoria's{" "}
            <span className="text-red-500">Best Tire</span>
            <br />
            & <span className="text-red-500">Auto Store!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Voted Victoria's Best Tire Store for 3 years straight. Over 30 years of trusted service.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:2503847477"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now: 250-384-7477
            </a>
            <a
              href="/tires"
              className="bg-white hover:bg-gray-100 text-secondary-black font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Shop Tires
            </a>
          </div>
        </div>
      </div>

      {/* Awards Badge */}
      <div className="absolute bottom-0 right-0 left-0 bg-white/95 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-end gap-6 items-center">
          <div className="text-center">
            <p className="text-xs text-gray-500">Voted</p>
            <p className="font-bold text-secondary-black">Victoria's Best</p>
            <p className="text-xs text-gray-500">Tire Store</p>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="text-center">
            <p className="text-xs text-gray-500">BBB Rating</p>
            <p className="font-bold text-secondary-black">A+</p>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="text-center">
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-bold text-secondary-black">30+ Years</p>
          </div>
        </div>
      </div>
    </section>
  );
}
