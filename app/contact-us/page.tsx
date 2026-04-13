"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business, locations } from "@/lib/data";

export default function ContactUsPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Visit us, call us, or send us a message." breadcrumbs={[{ label: "Contact Us" }]} />
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <AnimatedSection>
              <h2 className="text-2xl font-extrabold mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input id="name" type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-sm" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input id="phone" type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-sm" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select id="location" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-sm bg-white">
                    <option value="">Select a location</option>
                    {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--primary-red)] text-sm resize-none" />
                </div>
                <button type="submit" className="w-full bg-[var(--primary-red)] hover:bg-[var(--primary-red-dark)] text-white font-semibold py-3 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Locations */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-2xl font-extrabold mb-6">Our Locations</h2>
              <div className="space-y-6">
                {locations.map((loc) => (
                  <div key={loc.id} className="bg-[var(--accent-gray)] rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 text-lg">{loc.name}</h3>
                    <span className="inline-block text-xs font-semibold text-[var(--primary-red)] mb-3">{loc.note}</span>
                    <div className="space-y-2.5">
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-gray-600 hover:text-[var(--primary-red)] transition-colors text-sm">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        {loc.address}, {loc.city}, {loc.province} {loc.postalCode}
                      </a>
                      <a href={business.phoneHref} className="flex items-center gap-2 text-gray-600 hover:text-[var(--primary-red)] transition-colors text-sm">
                        <Phone className="w-4 h-4 shrink-0" />
                        {business.phone}
                      </a>
                    </div>
                    <div className="mt-4 rounded-lg overflow-hidden aspect-[16/9] bg-gray-200">
                      <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(loc.address + ", " + loc.city + ", " + loc.province)}`}
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        title={`Map of ${loc.name}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[var(--primary-red)] text-white rounded-xl p-6 text-center">
                <p className="font-bold text-lg mb-2">Call Us Anytime</p>
                <a href={business.phoneHref} className="text-2xl font-extrabold hover:underline">{business.phone}</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
