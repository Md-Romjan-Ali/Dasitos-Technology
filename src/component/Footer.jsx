"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiChevronRight,
    FiGlobe,
    FiArrowUpRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
    menu: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/aboutCompany" },
        { label: "Services", href: "/service" },
        { label: "Our Strength", href: "/strength" },
        { label: "Gallery", href: "/gallery" },
    ],
    quickLinks: [
        { label: "Our Clients", href: "/clients" },
        { label: "Recruitments", href: "/recruitement" },
        { label: "Careers", href: "/career" },
        { label: "Contact Us", href: "/contact-us" },
    ],
    presence: [
        "Telangana",
        "Andhra Pradesh",
        "Karnataka",
        "Tamilnadu",
        "Odisha",
    ],
};

const Footer = () => {
    return (
        <footer className="relative bg-slate-50 dark:bg-[#030712] text-slate-600 dark:text-slate-300 pt-16 pb-8 overflow-hidden border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* TOP CTA CALLOUT CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/30 transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                            <FiPhone className="size-8 animate-pulse" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                Call Us For Our Services
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                                Need immediate assistance or operational info?
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:9908538137"
                            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm sm:text-base"
                        >
                            <FiPhone /> Call 9908538137
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:9100694137"
                            className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold rounded-xl transition-all text-sm sm:text-base"
                        >
                            <FiPhone /> Call 9100694137
                        </motion.a>
                    </div>
                </motion.div>

                {/* MAIN FOOTER GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

                    {/* COLUMN 1: BRAND INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-4 space-y-5"
                    >
                        <div className="flex items-center gap-3">
                            <Link href="/" className="flex items-center">
                                <Image
                                    height={500}
                                    width={500}
                                    src="https://i.ibb.co.com/4nPLKbPJ/Gemini-Generated-Image-aszvqhaszvqhaszv.png"
                                    alt="AMAZE Logo"
                                    className="h-15 w-20 rounded-2xl object-contain"
                                />
                            </Link>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                            Amaze Property Management Solutions Pvt Ltd
                        </h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-4">
                            Delivering integrated, high-caliber property management, facility operations, compliance, and soft services across South India.
                        </p>

                        <div className="pt-2">
                            <a
                                href="mailto:Info@amazepms.com"
                                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-medium transition-colors"
                            >
                                <FiMail /> Info@amazepms.com <FiArrowUpRight />
                            </a>
                        </div>
                    </motion.div>

                    {/* COLUMN 2: NAVIGATION MENU */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-l-2 border-blue-500 pl-2.5">
                            Menu
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {footerLinks.menu.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all"
                                    >
                                        <FiChevronRight className="text-blue-500 size-3.5" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMN 3: QUICK LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-l-2 border-blue-500 pl-2.5">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {footerLinks.quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all"
                                    >
                                        <FiChevronRight className="text-blue-500 size-3.5" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMN 4: OUR PRESENCE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-l-2 border-blue-500 pl-2.5 flex items-center gap-1.5">
                            <FiGlobe className="text-blue-500 dark:text-blue-400" /> Presence
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            {footerLinks.presence.map((state, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                                    {state}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUMN 5: HEAD OFFICE CONTACT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-l-2 border-blue-500 pl-2.5">
                            Contact
                        </h4>
                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-start gap-2.5">
                                <FiMapPin className="text-blue-500 dark:text-blue-400 size-5 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    4th floor, High Mark Chambers, Khajaguda X road, Cyberabad, Hyderabad-500008
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5 pt-1">
                                <FiPhone className="text-blue-500 dark:text-blue-400 size-4 shrink-0" />
                                <a href="tel:9100694137" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                                    9100694137
                                </a>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FiMail className="text-blue-500 dark:text-blue-400 size-4 shrink-0" />
                                <a href="mailto:Info@amazepms.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                                    Info@amazepms.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* BOTTOM COPYRIGHT BAR */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <p>© {new Date().getFullYear()} Amaze Property Management Solutions Pvt Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-slate-800 dark:hover:text-slate-300 transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;