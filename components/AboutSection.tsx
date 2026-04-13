import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Top-Rated Tire Shop – #1 in the Times Colonist & Black Press Awards",
    "Largest Selection – Huge 7,000 sq. ft. inventory of new tires & wheels",
    "Affordable Auto Repairs – Expert brake service, alignments, & diagnostics",
    "Local Experts – Serving Victoria, BC drivers for over 30 years",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-6 text-center">
            Big O Tires Victoria – Your Trusted Tire & Auto Repair Experts
          </h2>

          <div className="prose prose-lg mx-auto text-gray-600 mb-8">
            <p>
              Looking for the best tire and auto-repair store in Victoria, BC? Big O Tires Victoria
              is the city's #1 destination for new tires, wheels, expert auto repairs, and much more.
            </p>
            <p>
              We offer <strong>0% customer financing</strong> both in-store and online! Financing
              offered in-store, with no credit check required through EZ Fixed, as well as online
              through Affirm!
            </p>
            <p>
              With over 30 years of trusted service, we offer affordable prices, top-quality workmanship,
              and unmatched customer care.
            </p>
          </div>

          {/* Locations */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-600">
              <h3 className="font-semibold text-secondary-black text-lg mb-2">Tires & Wheels</h3>
              <p className="text-gray-600 mb-1">1319 Quadra St, Victoria, BC</p>
              <p className="text-red-600 text-sm">The largest selection of new tires in Victoria, BC</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-secondary-black">
              <h3 className="font-semibold text-secondary-black text-lg mb-2">Full Auto Repair & Maintenance</h3>
              <p className="text-gray-600 mb-1">880 Pandora Ave, Victoria, BC</p>
              <p className="text-gray-500 text-sm">Brake repairs, oil changes, alignments & more</p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="font-bold text-xl text-secondary-black mb-4">Why Choose Big O Tires Victoria?</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="tel:2503847477"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Call Us Today: 250-384-7477
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
