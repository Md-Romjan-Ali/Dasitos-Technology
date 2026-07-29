"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const AboutUs = () => {
    const highlights = [
        "Strong 15000+ Work Force",
        "200+ Clients",
        "Presence PAN INDIA",
    ];

    return (
        <div className="relative w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 px-6 sm:px-12 lg:px-20 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            {/* Background Decorative Glow Effect */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

                {/* Left Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-6"
                >
                    {/* Section Badge */}
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase">
                        About Us
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        Amaze PMS Pvt Ltd <span className="text-blue-600 dark:text-blue-400">(AMAZE)</span>
                    </h2>

                    {/* Body Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                        Amaze PMS Pvt Ltd (AMAZE) is a Property Management division of ACTION GROUP of Companies founded in the year 2001 by Mr. Subhani Abdul, a veteran from the Indian Navy, a Certified Security Practitioner, and a renowned name in the Service Industry. Amaze has its Head Quarters in Cyberabad, Telangana – INDIA, providing Property Management Solutions PAN INDIA, partnering with leading clientele with 15,000+ strong strength of professionals. We specialize in offering comprehensive integrated Property Management Services such as Housekeeping, MEP (Mechanical, Electrical, Plumbing), Security, Pest Control, Gardening, STP & WTP, Parking, Swimming Pool Maintenance, office support services, deep cleaning services, etc. — all managed in-house.
                    </p>

                    {/* Feature Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-3 bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-3.5 rounded-xl backdrop-blur-md shadow-sm hover:shadow-md dark:shadow-none transition-shadow"
                            >
                                <FiCheckCircle className="text-blue-600 dark:text-blue-400 text-xl shrink-0" />
                                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Primary CTA Button */}
                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 dark:shadow-blue-900/30 flex items-center gap-3 group"
                        >
                            <span>GET STARTED WITH US</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <FiArrowRight size={16} />
                            </div>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Composite Images Column */}
                <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[380px] h-[450px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl dark:shadow-blue-950/20 group"
                    >
                        <Image
                            height={700}
                            width={700}
                            src="https://i.ibb.co.com/d44Y5j26/img11.png"
                            alt="Action Group Logo"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 dark:from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Floating Overlapping Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="absolute -bottom-6 -left-2 sm:-left-8 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-2xl p-2 backdrop-blur-xl"
                    >
                        <div className="rounded-xl overflow-hidden h-[180px]">
                            <Image
                                height={500}
                                width={500}
                                src="https://i.ibb.co.com/sJMQdxJ3/about1.png"
                                alt="AMAZE Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;