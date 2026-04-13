"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { business, locations } from "@/lib/data";

const quickLinks = [
  { name: "Tires", href: "/tires" },
  { name: "Auto Repairs", href: "/auto-repairs" },
  { name: "Wheels", href: "/wheels" },
  { name: "Tire Rebates", href: "/tire-rebates" },
  { name: "Coupons", href: "/coupons" },
  { name: "See Our Shop", href: "/see-our-shop" },
  { name: "Reviews", href: "/reviews" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

const tireBrands = [
  "Michelin", "Bridgestone", "Goodyear", "Continental", "Pirelli",
  "Toyo", "Yokohama", "Hankook", "BFGoodrich", "Cooper",
  "Firestone", "Falken", "General Tire", "Kumho", "Dunlop", "Uniroyal",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary-black)] text-white mt-auto pb-16 md:pb-0">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Contact Us</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name *" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-white placeholder-gray-500 text-sm" />
              <input type="email" placeholder="Email *" className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-white placeholder-gray-500 text-sm" />
              <textarea placeholder="Message *" rows={3} className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-white placeholder-gray-500 text-sm resize-none" />
              <button type="submit" className="w-full bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm">
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-[var(--primary-red)] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Our Locations</h3>
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.id}>
                  <h4 className="font-semibold text-white text-sm">{loc.name}</h4>
                  <div className="mt-2 space-y-1.5">
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-gray-400 hover:text-[var(--primary-red)] transition-colors text-sm">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      {loc.address}, {loc.city}, {loc.province}
                    </a>
                    <a href={business.phoneHref} className="flex items-center gap-2 text-gray-400 hover:text-[var(--primary-red)] transition-colors text-sm">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      {business.phone}
                    </a>
                  </div>
                  <span className="inline-block mt-1.5 text-xs text-[var(--primary-red)] font-medium">{loc.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tire Brands & Social */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Tire Brands</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {tireBrands.map((brand) => (
                <Link key={brand} href="/tire-rebates" className="text-xs text-gray-400 hover:text-[var(--primary-red)] bg-white/5 px-2.5 py-1 rounded transition-colors">
                  {brand}
                </Link>
              ))}
            </div>

            <h4 className="font-bold text-white text-sm mb-3">Stay Connected</h4>
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: business.socialMedia.facebook, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
                { label: "YouTube", href: business.socialMedia.youtube, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
                { label: "Instagram", href: business.socialMedia.instagram, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
                { label: "Google", href: business.socialMedia.google, icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 bg-white/5 hover:bg-[var(--primary-red)] rounded-full flex items-center justify-center transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>&copy; 2007-{new Date().getFullYear()} Big O Tires Victoria. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="hover:text-[var(--primary-red)] transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-[var(--primary-red)] transition-colors">Privacy</Link>
              <Link href="/accessibility" className="hover:text-[var(--primary-red)] transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
