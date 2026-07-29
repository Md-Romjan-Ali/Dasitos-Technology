"use client";

import React from "react";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const services = [
    "PMS Services",
    "MEP Services",
    "House Keeping Services",
    "Security Services",
    "Gardening Services",
    "Deep Cleaning Services",
    "Maid Cleaning Services",
    "Facade Services",
    "Project Cleaning Services",
    "Pest Control Services",
    "Office Support Services",
];

const ContactSection = () => {
    return (
        <section className="relative mt-10 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
                {/* HEADER SECTION WITH COMPANY LOGO */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Link href="/" className="flex items-center justify-center">
                        <Image
                            height={1000}
                            width={1000}
                            src="https://i.ibb.co.com/wF8qRDCh/Chat-GPT-Image-Jul-27-2026-10-23-48-PM.png"
                            alt="AMAZE Logo"
                            className="h-16 w-auto rounded-2xl mx-auto object-contain"
                        />
                    </Link>

                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block">
                        Stay Connected
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-500">
                        Contact For Our Services
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        Reach out to us for comprehensive facility and property management
                        solutions across your commercial and residential projects.
                    </p>
                </div>

                {/* SERVICES OFFERED PILLS */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-300 text-center sm:text-left">
                        Services Available:
                    </h3>
                    <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                        {services.map((service, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-white shadow-sm dark:shadow-none transition-all"
                            >
                                <FiCheckCircle className="text-blue-600 dark:text-blue-400 size-4" />
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                {/* MAIN CONTENT: DETAILS + MAP */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* LEFT: OFFICE ADDRESS & INFO CARDS */}
                    <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm dark:shadow-none">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white border-l-2 border-blue-600 dark:border-blue-500 pl-3">
                                Our Office Address
                            </h3>

                            <div className="space-y-5">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                                        <FiMapPin className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">
                                            Location
                                        </h4>
                                        <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                                            4th floor, High Mark Chambers, Khajaguda X road,
                                            Cyberabad, Hyderabad-500008
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                                        <FiPhone className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">
                                            Call Us
                                        </h4>
                                        <a
                                            href="tel:9100694137"
                                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                                        >
                                            +91 9100694137
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                                        <FiMail className="size-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">
                                            Email Us
                                        </h4>
                                        <a
                                            href="mailto:Info@amazepms.com"
                                            className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                                        >
                                            Info@amazepms.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Support Badge */}
                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/20 flex items-center gap-3">
                            <FiClock className="text-blue-600 dark:text-blue-400 size-5 shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                Operating 24/7 across facility sites and corporate hubs.
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: EMBEDDED GOOGLE MAP */}
                    <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
                        <iframe
                            title="Amaze PMS Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4292375993423!2d78.3751566!3d17.439157899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e7400a98af%3A0xb86a441596737d73!2sAMAZE%20Property%20Management%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1785209715125!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;