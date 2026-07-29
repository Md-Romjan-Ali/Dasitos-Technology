"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FiTarget,
    FiEye,
    FiHeart,
    FiBriefcase,
} from "react-icons/fi";
import AboutUs from "@/component/AboutUs";

const missionVisionValues = [
    {
        id: "mission",
        title: "Our Mission",
        icon: FiTarget,
        tag: "Purpose Driven",
        description:
            "To be a leading provider of comprehensive property management solutions across PAN INDIA. We are committed to delivering exceptional services that exceed our clients' expectations, while prioritizing technology, sustainability, and the well-being of our employees.",
        highlight: "Comprehensive PAN INDIA Solutions",
    },
    {
        id: "vision",
        title: "Our Vision",
        icon: FiEye,
        tag: "Future Focused",
        description:
            "To transform the property management industry by setting new standards of excellence and innovation. We strive to be recognized for reliable, cost-effective, and sustainable services through continuous enhancement and a client-centric approach (ATHMA NIRBHAR BHARATH).",
        highlight: "Transforming Industry Standards",
    },
    {
        id: "values",
        title: "Our Values",
        icon: FiHeart,
        tag: "Core Principles",
        description:
            "Respect, integrity, excellence, sustainability, and customer focus. We are committed to conducting business with the highest ethical standards, delivering excellence in all aspects, and prioritizing the needs and satisfaction of our clients.",
        highlight: "Ethical & Customer-Centric",
    },
];

const segments = [
    "Commercial & IT Parks",
    "Corporate Offices",
    "Educational Institutions",
    "Residential Communities",
    "Hotels & Hospitals",
    "Industries",
    "Infrastructure & Construction Sites",
    "Malls, Multiplexes & Retail Stores",
    "Manufacturing Units",
    "Special Events",
    "Warehouses",
    "Pharma",
];

const CompanyProfile = () => {
    return (
        <div className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Glowing Ambient Accents */}
            <div
                className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">

                {/* SECTION 1: MISSION, VISION, VALUES */}
                <div className="space-y-16">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="inline-block text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 dark:bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-500/20 dark:border-blue-500/30">
                            Who We Are
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                            Driven by Purpose, Guided by Excellence
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                            Empowering properties across India with sustainable, tech-driven, and client-centric management solutions.
                        </p>
                    </div>
                    <AboutUs />
                    {/* MVV Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missionVisionValues.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    whileHover={{ y: -6 }}
                                    className="group relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-blue-500/10 flex flex-col justify-between"
                                >
                                    <div className="space-y-6">
                                        {/* Top Icon & Badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <Icon className="size-6" />
                                            </div>
                                            <span className="text-slate-600 dark:text-slate-400 text-xs font-medium bg-slate-100 dark:bg-slate-800/60 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/50">
                                                {item.tag}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Highlight Footer */}
                                    <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                        <span className="size-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                                        <span>{item.highlight}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* SECTION 2: SEGMENTS WE CATER TO */}
                <div>
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <span className="inline-block text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 dark:bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-500/20 dark:border-blue-500/30">
                            Our Reach
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                            Segments We Cater To
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                            Delivering customized, industry-grade operational management across diverse sectors.
                        </p>
                    </div>

                    {/* Segments Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="group flex items-center gap-3.5 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/30 backdrop-blur-md hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:border-blue-500/40 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
                            >
                                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                    <FiBriefcase className="size-4" />
                                </div>
                                <span className="text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white font-medium text-sm sm:text-base transition-colors">
                                    {segment}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompanyProfile;