"use client";

import Link from "next/link";
import { quickActions } from "@/lib/data";
import { getIcon } from "@/components/ui/ServiceCard";
import type { IconName } from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function QuickActions() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, i) => {
            const Icon = getIcon(action.icon as IconName);
            return (
              <AnimatedSection key={action.title} delay={i * 0.05}>
                <Link
                  href={action.href}
                  className="group flex flex-col items-center text-center p-5 rounded-xl border border-gray-100 hover:border-[var(--primary-red)]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-red)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--primary-red)] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--primary-red)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-[var(--primary-red)] transition-colors">
                    {action.title}
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
