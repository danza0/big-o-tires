import { Wrench, Car, Truck, Droplet } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Droplet,
    title: "Oil Changes",
    description: "Full synthetic, conventional, and high-mileage oil changes",
    href: "/auto-repairs/oil-change",
    color: "bg-red-600",
  },
  {
    icon: Wrench,
    title: "Brake Services",
    description: "Complete brake inspection, repair, and replacement",
    href: "/auto-repairs/brake-service",
    color: "bg-secondary-black",
  },
  {
    icon: Car,
    title: "Lift & Leveling Kits",
    description: "Custom lift and leveling kit installation",
    href: "/auto-repairs/lift-leveling-kits",
    color: "bg-red-600",
  },
  {
    icon: Truck,
    title: "Fleet Services",
    description: "Comprehensive fleet maintenance and repair",
    href: "/auto-repairs/fleet-services",
    color: "bg-secondary-black",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-black mb-4">
            Oil Changes <span className="text-red-600">&</span> Brake Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional auto repair services you can trust. From routine maintenance to major repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center hover:-translate-y-1"
            >
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-black mb-2 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
