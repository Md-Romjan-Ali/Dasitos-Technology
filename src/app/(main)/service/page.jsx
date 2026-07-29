"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiShield,
    FiHome,
    FiTool,
    FiSmile,
    FiHeadphones,
    FiSun,
    FiDroplet,
    FiLayers,
    FiBriefcase,
    FiDollarSign,
    FiUsers,
    FiCheckCircle,
    FiArrowUpRight,
} from "react-icons/fi";

const servicesData = [
    {
        title: "Security Services",
        icon: FiShield,
        tag: "Safety & Guarding",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
        description: "Trained security personnel, surveillance management, and access control for complete peace of mind.",
    },
    {
        title: "House Keeping Services",
        icon: FiHome,
        tag: "Facility Care",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5W_u5BtDj0zud-4TxLhi2zLvsiUDNN-HlZuai1OY3mZlSI7Fv-Io5E&s=10",
        description: "Daily hygiene upkeep, deep cleaning, and systematic maintenance of residential and commercial premises.",
    },
    {
        title: "Technical Services",
        icon: FiTool,
        tag: "Engineering",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
        description: "Professional operations and routine preventative checks for electrical, HVAC, and mechanical systems.",
    },
    {
        title: "Pest Control",
        icon: FiSmile,
        tag: "Hygiene",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop",
        description: "Safe, eco-friendly, and certified pest management solutions tailored for multi-scale environments.",
    },
    {
        title: "Help Desk Management",
        icon: FiHeadphones,
        tag: "24/7 Support",
        image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&auto=format&fit=crop",
        description: "Streamlined ticketing, tenant inquiry resolutions, and centralized operational communication.",
    },
    {
        title: "Gardening",
        icon: FiSun,
        tag: "Landscaping",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
        description: "Lawn care, landscape designing, and routine botanical maintenance for vibrant green spaces.",
    },
    {
        title: "Swimming Pool Maintenance",
        icon: FiDroplet,
        tag: "Water Care",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
        description: "Water treatment, filtration testing, chemical balancing, and structural pool care.",
    },
    {
        title: "Club House Management",
        icon: FiLayers,
        tag: "Community Space",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        description: "Complete administration, activity booking, and upkeep of residential clubhouses and amenities.",
    },
    {
        title: "Facade Cleaning",
        icon: FiHome,
        tag: "Exterior Maintenance",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=800&auto=format&fit=crop",
        description: "High-rise exterior glass and panel cleaning executed by trained rope-access specialists.",
    },
    {
        title: "Tenant Management",
        icon: FiUsers,
        tag: "Relations",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        description: "Smooth onboarding, lease coordination, query handling, and tenant welfare initiatives.",
    },
    {
        title: "Home Repairs",
        icon: FiTool,
        tag: "Maintenance",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
        description: "Quick-response plumbing, electrical fixes, carpentry, and general household repair work.",
    },
    {
        title: "Events & Promotions Management",
        icon: FiBriefcase,
        tag: "Operations",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
        description: "End-to-end logistics, venue setup, crowd control, and coordination for corporate or community events.",
    },
    {
        title: "Office Support Staff",
        icon: FiUsers,
        tag: "Staffing",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        description: "Reliable desk assistants, mailroom handlers, pantry executives, and administrative support personnel.",
    },
    {
        title: "Payroll Management",
        icon: FiDollarSign,
        tag: "Corporate",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        description: "Compliant salary processing, staff benefits oversight, attendance tracking, and administrative reports.",
    },
    {
        title: "Repair and Maintenance",
        icon: FiTool,
        tag: "Asset Care",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        description: "Comprehensive lifecycle repair strategies to extend property value and equipment efficiency.",
    },
    {
        title: "Home Cleaning",
        icon: FiHome,
        tag: "Residential",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
        description: "Deep house sanitation, kitchen degreasing, bathroom scrubbing, and periodic freshness treatments.",
    },
    {
        title: "Maid Services",
        icon: FiUsers,
        tag: "Domestic Care",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=800&auto=format&fit=crop",
        description: "Background-checked, trustworthy domestic staff trained for regular housekeeping demands.",
    },
    {
        title: "Parking Management",
        icon: FiBriefcase,
        tag: "Traffic Flow",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop",
        description: "Valet coordination, automated parking system management, and organized vehicle circulation.",
    },
    {
        title: "New Revenue Opportunities",
        icon: FiDollarSign,
        tag: "Value Addition",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        description: "Unlocking monetization strategies for commercial assets through ad spaces, events, and sub-leasing.",
    },
];

const partners = [
    {
        name: "Amaze Property Management Solutions Pvt Ltd",
        specialty: "MEP Services",
        services: ["PMS Services", "Housekeeping", "MEP", "Gardening", "Pest Control Services"],
    },
    {
        name: "Action & Protection Security Force",
        specialty: "Security Services",
        services: ["Security Services", "Fire Training", "Escort Services", "Event Security", "Help Desk Services"],
    },
    {
        name: "Action Facility Services Pvt Ltd",
        specialty: "Support Staff",
        services: [
            "Home Services",
            "Deep Cleaning Services",
            "Support Staff",
            "Project Cleaning",
            "Sofa & Carpet Cleaning Services",
        ],
    },
];

const ServicesPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white min-h-screen py-20 mt-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">

            {/* Ambient Lights */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">

                {/* HERO SECTION */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-100 dark:bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/20">
                        Property & Asset Management
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-600 leading-tight">
                        End-to-End Operational Solutions
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                        From technical MEP systems and round-the-clock security to complete domestic care and strategic asset monetization.
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div>
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Specialized Services</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Explore our broad spectrum of property solutions</p>
                        </div>
                        <span className="hidden sm:inline-block text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-3 py-1.5 rounded-full">
                            {servicesData.length} Services Available
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 overflow-hidden shadow-xl dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between"
                                >
                                    {/* Card Image Header */}
                                    <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent" />

                                        {/* Top Badge */}
                                        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-950/80 backdrop-blur-md text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                                            {service.tag}
                                        </span>

                                        {/* Floating Service Icon */}
                                        <div className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-blue-600 text-white backdrop-blur-md shadow-lg group-hover:bg-blue-500 transition-colors">
                                            <Icon className="size-5" />
                                        </div>
                                    </div>

                                    {/* Card Content Body */}
                                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                                                <span>{service.title}</span>
                                                <FiArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 dark:text-blue-400" />
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            <span className="size-1.5 rounded-full bg-blue-500" />
                                            <span>Professional Delivery</span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* SERVICE PARTNERS SECTION */}
                <div className="pt-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
                        <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-100 dark:bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/20">
                            Trusted Network
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                            Our Service Partners
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                            Collaborating with certified industry partners to deliver specialized expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                whileHover={{ y: -6 }}
                                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl relative flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-100 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
                                            {partner.specialty}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                                        {partner.name}
                                    </h3>

                                    <div className="space-y-2.5 pt-2">
                                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider block mb-2">
                                            Core Offerings:
                                        </span>
                                        {partner.services.map((srv) => (
                                            <div key={srv} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                                                <FiCheckCircle className="text-blue-600 dark:text-blue-400 shrink-0 size-4" />
                                                <span>{srv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-500 flex items-center justify-between">
                                    <span>Certified Execution</span>
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Verified Partner</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;