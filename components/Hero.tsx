"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { business, awards } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] overflow-hidden bg-[var(--secondary-black)]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23222' width='100' height='100'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23333' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23333' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--primary-red)] z-20" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[var(--primary-red)] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            #1 Rated in Victoria &mdash; 30+ Years of Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]"
          >
            Victoria&apos;s{" "}
            <span className="text-[var(--primary-red)]">Best Tire</span>
            <br />
            & <span className="text-[var(--primary-red)]">Auto Store!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 max-w-lg"
          >
            Voted Victoria&apos;s Best Tire Store. Over 30 years of trusted service,
            quality workmanship, and unmatched customer care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/tires"
              className="bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3.5 px-7 rounded-lg transition-colors flex items-center gap-2"
            >
              Shop Tires <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/auto-repairs"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
            >
              Book Auto Repair
            </Link>
            <a
              href={business.phoneHref}
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-3.5 px-7 rounded-lg transition-colors flex items-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Awards bar */}
      <div className="relative z-20 bg-white border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {awards.map((award, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-2xl font-extrabold text-[var(--secondary-black)]">{award.title}</p>
                <p className="text-sm font-semibold text-gray-700">{award.subtitle}</p>
                <p className="text-xs text-gray-400">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
