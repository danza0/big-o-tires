// ========== BUSINESS INFO ==========
export const business = {
  name: "Big O Tires Victoria",
  phone: "250-384-7477",
  phoneHref: "tel:2503847477",
  email: "info@bigotiresvictoria.com",
  founded: 1994,
  yearsInBusiness: "30+",
  tagline: "Victoria's Best Tire & Auto Store!",
  alert: "We are Victoria's 5-Star, #1 Rated Tire and Mechanical Store! (Black Press and Times Colonist)",
  financing: "0% customer financing both in-store (EZ Fixed, no credit check) and online (Affirm)",
  socialMedia: {
    facebook: "https://www.facebook.com/BigOTiresVictoria",
    youtube: "https://www.youtube.com/@BIGOTIRES-Victoria",
    instagram: "https://www.instagram.com/bigotiresvictoria",
    google: "https://www.google.com/search?q=big+o+tires+victoria#lrd=0x548f748f6715665b:0xedaba0cb2193be96,1,,,",
  },
  treadVideo: "https://www.youtube.com/embed/I6gGpk8uyoU",
  tireConnectApiKey: "2b4bae2633439f504e8fd628466926c9",
};

export const locations = [
  {
    id: "quadra",
    name: "Big O Tires Victoria",
    address: "1319 Quadra Street",
    city: "Victoria",
    province: "BC",
    postalCode: "V8W 2K9",
    note: "Tires and Wheels Only",
    lat: 48.42616,
    lng: -123.359,
    mapUrl: "https://www.google.com/maps?q=1319+Quadra+Street+Victoria+BC",
  },
  {
    id: "pandora",
    name: "The Downtown Garage by Big O Tires",
    address: "880 Pandora Avenue",
    city: "Victoria",
    province: "BC",
    postalCode: "V8W 1P4",
    note: "Mechanical Facility",
    lat: 48.42781,
    lng: -123.3594,
    mapUrl: "https://www.google.com/maps?q=880+Pandora+Avenue+Victoria+BC",
  },
];

// ========== NAVIGATION ==========
export const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Tires",
    href: "/tires",
    children: [
      { name: "Passenger & Light Truck Tires", href: "/tires" },
      { name: "Used Tires", href: "/tires/used-tires" },
      { name: "Tire Storage", href: "/tires/tire-storage" },
      { name: "Tire Repairs", href: "/tires/tire-repairs" },
    ],
  },
  {
    name: "Auto Repairs",
    href: "/auto-repairs",
    children: [
      { name: "Our Services", href: "/auto-repairs" },
      { name: "Brake Service", href: "/auto-repairs/brake-service" },
      { name: "Oil Change", href: "/auto-repairs/oil-change" },
      { name: "Wheel Alignments", href: "/auto-repairs/wheel-alignments" },
      { name: "Two-Wheel Alignment", href: "/auto-repairs/two-wheel-alignment" },
      { name: "Vehicle Inspections", href: "/auto-repairs/vehicle-inspections" },
      { name: "Exhaust Repair Services", href: "/auto-repairs/exhaust-repair-services" },
      { name: "Cooling System Repair", href: "/auto-repairs/cooling-system-repair" },
      { name: "Preventive Maintenance", href: "/auto-repairs/preventive-maintenance" },
      { name: "Lift & Leveling Kits", href: "/auto-repairs/lift-leveling-kits" },
      { name: "Aftermarket Truck Accessories", href: "/auto-repairs/aftermarket-truck-accessories" },
      { name: "Fleet Services", href: "/auto-repairs/fleet-services" },
    ],
  },
  { name: "Wheels", href: "/wheels" },
  { name: "Tire Rebates", href: "/tire-rebates" },
  { name: "Coupons", href: "/coupons" },
  { name: "See Our Shop", href: "/see-our-shop" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "About Us",
    href: "/about-us",
    children: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Videos", href: "/about-us/our-videos" },
      { name: "Blog", href: "/about-us/blog" },
      { name: "TREAD Membership", href: "/about-us/tread-membership" },
      { name: "Customer Reviews", href: "/reviews" },
    ],
  },
  { name: "Contact Us", href: "/contact-us" },
];

// ========== SERVICES ==========
export const services = [
  {
    slug: "brake-service",
    title: "Brake Service",
    icon: "disc" as const,
    shortDesc: "Complete brake inspection, repair, and replacement services.",
    description: "Don't compromise on safety. Our certified technicians provide thorough brake inspections, pad and rotor replacements, brake fluid flushes, and complete brake system repairs. We use quality parts and back our work with a satisfaction guarantee.",
    features: ["Brake pad & rotor replacement", "Brake fluid flush", "Brake line inspection", "ABS diagnostics", "Emergency brake repair", "Brake noise diagnosis"],
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    icon: "droplet" as const,
    shortDesc: "Full synthetic, conventional, and high-mileage oil changes.",
    description: "Regular oil changes are essential for engine health. We offer conventional, synthetic blend, and full synthetic oil changes with top-quality filters. Every oil change includes a complimentary multi-point inspection.",
    features: ["Conventional oil change", "Full synthetic oil change", "High-mileage oil change", "Oil filter replacement", "Fluid top-off", "Multi-point inspection"],
  },
  {
    slug: "wheel-alignments",
    title: "Wheel Alignments",
    icon: "crosshair" as const,
    shortDesc: "Precision digital 4-wheel alignment services.",
    description: "Proper wheel alignment extends tire life, improves fuel economy, and ensures safe handling. Our state-of-the-art digital alignment equipment provides precise adjustments to manufacturer specifications.",
    features: ["4-wheel digital alignment", "Thrust angle alignment", "Steering center adjustment", "Tire wear analysis", "Suspension inspection", "Test drive verification"],
  },
  {
    slug: "two-wheel-alignment",
    title: "Two-Wheel Alignment",
    icon: "move-horizontal" as const,
    shortDesc: "Front-end alignment for optimal steering and tire wear.",
    description: "A two-wheel alignment focuses on the front axle, adjusting camber, caster, and toe to ensure your vehicle tracks straight and your front tires wear evenly.",
    features: ["Front axle alignment", "Camber adjustment", "Caster adjustment", "Toe alignment", "Steering wheel centering", "Road test"],
  },
  {
    slug: "vehicle-inspections",
    title: "Vehicle Inspections",
    icon: "clipboard-check" as const,
    shortDesc: "Comprehensive vehicle inspections for safety and peace of mind.",
    description: "Whether you're buying a used vehicle or need a safety inspection, our thorough multi-point inspections cover all critical systems. We provide detailed reports so you know exactly what condition your vehicle is in.",
    features: ["Pre-purchase inspections", "Safety inspections", "Multi-point inspections", "Brake inspection", "Suspension check", "Fluid level check"],
  },
  {
    slug: "exhaust-repair-services",
    title: "Exhaust Repair Services",
    icon: "wind" as const,
    shortDesc: "Complete exhaust system diagnosis and repair.",
    description: "From minor exhaust leaks to full system replacements, our technicians handle all exhaust repairs. We diagnose issues quickly and provide reliable fixes to keep your vehicle running cleanly and quietly.",
    features: ["Muffler repair & replacement", "Catalytic converter service", "Exhaust pipe repair", "Exhaust leak detection", "O2 sensor replacement", "Exhaust manifold repair"],
  },
  {
    slug: "cooling-system-repair",
    title: "Cooling System Repair",
    icon: "thermometer" as const,
    shortDesc: "Keep your engine running cool with expert cooling system service.",
    description: "Overheating can cause catastrophic engine damage. We service all cooling system components including radiators, water pumps, thermostats, and hoses to keep your engine at optimal temperature.",
    features: ["Radiator repair & replacement", "Water pump service", "Thermostat replacement", "Coolant flush", "Hose replacement", "Heater core service"],
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    icon: "shield-check" as const,
    shortDesc: "Factory-scheduled maintenance to keep your vehicle reliable.",
    description: "Stay ahead of costly repairs with regular preventive maintenance. We follow manufacturer recommendations and use quality parts to maintain your vehicle's performance, safety, and resale value.",
    features: ["Factory scheduled service", "Transmission service", "Timing belt replacement", "Spark plug replacement", "Air filter replacement", "Belt & hose inspection"],
  },
  {
    slug: "lift-leveling-kits",
    title: "Lift & Leveling Kits",
    icon: "arrow-up-from-line" as const,
    shortDesc: "Custom lift and leveling kit installation for trucks and SUVs.",
    description: "Upgrade your truck or SUV with a professional lift or leveling kit installation. We carry top brands and ensure proper installation for optimal performance and safety.",
    features: ["Body lift kits", "Suspension lift kits", "Leveling kits", "Coilover installation", "Shock & strut upgrades", "Post-install alignment"],
  },
  {
    slug: "aftermarket-truck-accessories",
    title: "Aftermarket Truck Accessories",
    icon: "truck" as const,
    shortDesc: "Premium truck accessories and professional installation.",
    description: "Customize your truck with our wide selection of aftermarket accessories. From bumpers and grille guards to tonneau covers and running boards, we carry quality products and provide expert installation.",
    features: ["Bumpers & grille guards", "Tonneau covers", "Running boards & nerf bars", "Fender flares", "LED lighting", "Mud flaps & splash guards"],
  },
  {
    slug: "fleet-services",
    title: "Fleet Services",
    icon: "users" as const,
    shortDesc: "Comprehensive fleet maintenance and repair programs.",
    description: "Keep your business vehicles on the road with our fleet service program. We offer priority scheduling, volume pricing, detailed maintenance records, and customized service plans for businesses of all sizes.",
    features: ["Priority scheduling", "Volume pricing", "Maintenance tracking", "Tire programs", "Preventive maintenance plans", "Detailed reporting"],
  },
];

// ========== TIRE REBATES ==========
export const tireRebates = [
  { brand: "Goodyear", amount: "$80", link: "https://www.goodyearrebates.ca/brands" },
  { brand: "Hankook", amount: "$100", link: "https://hankookcanadapromotions.com/Default.aspx" },
  { brand: "Kumho", amount: "$60", link: "https://www.kumhotirerebates.com/" },
  { brand: "Bridgestone", amount: "$100", link: "https://bridgestonerewards.com/" },
  { brand: "Continental", amount: "$110", link: "https://www.continentaltirerewards.ca/" },
  { brand: "Cooper", amount: "$70", link: "https://rewardsca.coopertire.ca/" },
  { brand: "Dunlop", amount: "$200", link: "https://srnarebate.com/home" },
  { brand: "Falken", amount: "$80", link: "https://srnarebate.com/home" },
  { brand: "Firestone", amount: "$80", link: "https://www.firestonerewards.com" },
  { brand: "General Tire", amount: "$100", link: "https://www.generaltirerewards.ca/" },
  { brand: "Toyo", amount: "$100", link: "https://toyorebate.ca/" },
  { brand: "Yokohama", amount: "$125", link: "https://www.yokohama.ca/en/new-vehicle-purchase-winter-rebate-program" },
  { brand: "BFGoodrich", amount: "$100", link: "https://www.bfgoodrich.ca/en/promotions-and-rebates" },
  { brand: "Michelin", amount: "$100", link: "https://www.michelin.ca/en/promotions-and-rebates" },
  { brand: "Uniroyal", amount: "$50", link: "https://www.uniroyal.ca/promotion" },
  { brand: "Pirelli", amount: "$100", link: "https://pirellipromo.net/en" },
];

// ========== COUPONS ==========
export const coupons = [
  { title: "$10 Off Oil Change", description: "Save $10 on any conventional oil change service.", href: "/auto-repairs/oil-change", code: "OIL10" },
  { title: "$15 Off Synthetic Oil Change", description: "Save $15 on any full synthetic oil change.", href: "/auto-repairs/oil-change", code: "SYNTH15" },
  { title: "Brake Special", description: "Get a free brake inspection with any brake service.", href: "/auto-repairs/brake-service", code: "BRAKE" },
  { title: "$10 Off Wheel Alignment", description: "Save $10 on a digital 4-wheel alignment.", href: "/auto-repairs/wheel-alignments", code: "ALIGN10" },
  { title: "Factory Scheduled Maintenance", description: "10% off any factory scheduled maintenance service.", href: "/auto-repairs/preventive-maintenance", code: "MAINT10" },
  { title: "Wild Card Offer", description: "Call us to learn about our current wild card special!", href: "/contact-us", code: "WILDCARD" },
];

// ========== QUICK ACTION ITEMS (HOME PAGE) ==========
export const quickActions = [
  { title: "Shop Tires", icon: "circle-dot" as const, href: "/tires", color: "bg-primary" },
  { title: "Book Auto Repair", icon: "wrench" as const, href: "/auto-repairs", color: "bg-secondary" },
  { title: "Browse Wheels", icon: "settings" as const, href: "/wheels", color: "bg-primary" },
  { title: "Tire & Wheel Packages", icon: "package" as const, href: "/wheels", color: "bg-secondary" },
  { title: "Lift & Leveling Kits", icon: "arrow-up-from-line" as const, href: "/auto-repairs/lift-leveling-kits", color: "bg-primary" },
  { title: "Truck Accessories", icon: "truck" as const, href: "/auto-repairs/aftermarket-truck-accessories", color: "bg-secondary" },
  { title: "Fleet Services", icon: "users" as const, href: "/auto-repairs/fleet-services", color: "bg-primary" },
  { title: "Coupons", icon: "tag" as const, href: "/coupons", color: "bg-secondary" },
];

// ========== AWARDS ==========
export const awards = [
  { title: "Victoria's Best", subtitle: "Tire Store", detail: "Black Press & Times Colonist" },
  { title: "A+", subtitle: "BBB Rating", detail: "Better Business Bureau" },
  { title: "5-Star", subtitle: "Google Rating", detail: "Customer Reviews" },
  { title: "30+", subtitle: "Years", detail: "Serving Victoria" },
];
