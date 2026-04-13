"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navItems, business } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      {/* Alert Banner */}
      <div className="bg-[var(--primary-red)] text-white text-center py-2 px-4 text-sm font-semibold">
        {business.alert}
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
        {/* Top bar */}
        <div className="bg-[var(--secondary-black)] text-white py-2 hidden md:block">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-[var(--primary-red)] transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {business.phone}
              </a>
              <span className="text-gray-500">|</span>
              <Link href="/contact-us" className="flex items-center gap-2 hover:text-[var(--primary-red)] transition-colors">
                <MapPin className="w-3.5 h-3.5" />
                2 Locations in Victoria, BC
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Voted Victoria&apos;s #1 Tire Store &mdash; 30+ Years</span>
              <a href={business.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--primary-red)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href={business.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--primary-red)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-[var(--primary-red)] text-white font-extrabold text-lg md:text-xl px-4 py-2 rounded">
                BIG O TIRES
              </div>
              <span className="hidden sm:block text-xs text-gray-500 leading-tight">
                Victoria, BC
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${openDropdown === item.name ? "text-[var(--primary-red)] bg-red-50" : "text-gray-700 hover:text-[var(--primary-red)] hover:bg-red-50"}`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px] z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[var(--primary-red)] hover:bg-red-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className="hidden md:flex items-center gap-2 bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold text-sm py-2.5 px-5 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-[var(--primary-red)]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 py-3 px-3 text-gray-700 hover:text-[var(--primary-red)] font-medium rounded transition-colors"
                      onClick={() => !item.children && setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className="p-3 text-gray-400"
                        aria-label={`Expand ${item.name}`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.children && mobileExpanded === item.name && (
                    <div className="pl-4 space-y-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-3 text-sm text-gray-500 hover:text-[var(--primary-red)] rounded transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* Mobile bottom actions */}
            <div className="p-4 border-t space-y-3">
              <a href={business.phoneHref} className="flex items-center justify-center gap-2 bg-[var(--primary-red)] text-white font-semibold py-3 rounded-lg w-full">
                <Phone className="w-4 h-4" /> Call: {business.phone}
              </a>
              <Link href="/contact-us" className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold py-3 rounded-lg w-full" onClick={() => setMobileOpen(false)}>
                <MapPin className="w-4 h-4" /> Find Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 md:hidden">
        <div className="grid grid-cols-3 divide-x">
          <button onClick={() => setMobileOpen(true)} className="flex flex-col items-center py-2.5 text-gray-600 hover:text-[var(--primary-red)]">
            <Menu className="w-5 h-5" />
            <span className="text-[10px] mt-0.5 font-medium">Menu</span>
          </button>
          <a href={business.phoneHref} className="flex flex-col items-center py-2.5 text-gray-600 hover:text-[var(--primary-red)]">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] mt-0.5 font-medium">Call Us</span>
          </a>
          <Link href="/contact-us" className="flex flex-col items-center py-2.5 text-gray-600 hover:text-[var(--primary-red)]">
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] mt-0.5 font-medium">Find Us</span>
          </Link>
        </div>
      </div>
    </>
  );
}
