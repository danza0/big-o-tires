import Link from "next/link";
import { Disc3, Droplet, Crosshair, MoveHorizontal, ClipboardCheck, Wind, Thermometer, ShieldCheck, ArrowUpFromLine, Truck, Users, Wrench, CircleDot, Settings, Package, Tag } from "lucide-react";

const iconMap = {
  disc: Disc3,
  droplet: Droplet,
  crosshair: Crosshair,
  "move-horizontal": MoveHorizontal,
  "clipboard-check": ClipboardCheck,
  wind: Wind,
  thermometer: Thermometer,
  "shield-check": ShieldCheck,
  "arrow-up-from-line": ArrowUpFromLine,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  "circle-dot": CircleDot,
  settings: Settings,
  package: Package,
  tag: Tag,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName) {
  return iconMap[name] || Wrench;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const Icon = getIcon(icon);
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-full bg-[var(--primary-red)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary-red)] transition-colors duration-300">
        <Icon className="w-7 h-7 text-[var(--primary-red)] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--primary-red)] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
