"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const coupons = [
  {
    id: 1,
    title: "Goodyear - $80 Reward",
    image: "https://c1.nd-cdn.us/1214-2026323164815GY.jpg",
    link: "https://www.goodyearrebates.ca/brands",
  },
  {
    id: 2,
    title: "Hankook $100 Rebate",
    image: "https://c1.nd-cdn.us/2539-202622714150Hankook%20CA.jpg",
    link: "https://hankookcanadapromotions.com/Default.aspx",
  },
  {
    id: 3,
    title: "Bridgestone - $100 Rebate",
    image: "https://c1.nd-cdn.us/1404-202631211458BsSpringPromo26_WebBanner_EN_NetDriven_630x240[27].jpg",
    link: "https://bridgestonerewards.com/",
  },
  {
    id: 4,
    title: "Continental - $110 Rebate",
    image: "https://c1.nd-cdn.us/2539-2026310154244Continental%20CA.jpg",
    link: "https://www.continentaltirerewards.ca/",
  },
  {
    id: 5,
    title: "Michelin - Get $100 Rebate",
    image: "https://c1.nd-cdn.us/1214-202631315528Michelin%20CA.jpg",
    link: "https://www.michelin.ca/en/promotions-and-rebates",
  },
  {
    id: 6,
    title: "$15 Off Synthetic Oil Change",
    image: "https://c1.nd-cdn.us/1120-201910158829oil-change%20copy.jpg",
    link: "/auto-repairs/oil-change",
  },
];

export default function CouponsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % coupons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + coupons.length) % coupons.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % coupons.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-2">
            Current <span className="text-red-600">Promotions</span>
          </h2>
          <p className="text-gray-600">Check out our latest tire rebates and service coupons</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Main Image */}
            <div className="relative aspect-[21/8] md:aspect-[25/10]">
              {coupons.map((coupon, index) => (
                <a
                  key={coupon.id}
                  href={coupon.link}
                  target={coupon.link.startsWith("http") ? "_blank" : undefined}
                  rel={coupon.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={coupon.image}
                    alt={coupon.title}
                    className="w-full h-full object-contain bg-white p-4"
                  />
                </a>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              aria-label="Previous coupon"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              aria-label="Next coupon"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {coupons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-red-600 w-8" : "bg-gray-400"
                  }`}
                  aria-label={`Go to coupon ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link href="/tire-rebates" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Tire Rebates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
