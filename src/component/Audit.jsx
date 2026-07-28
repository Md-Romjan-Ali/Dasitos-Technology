"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiCheckCircle,
    FiClock,
    FiTrendingUp,
} from "react-icons/fi";

const reviewCycles = ["MMR", "QBR", "Bi-Annual", "Annual"];

const auditTypes = [
    "Security Audit",
    "Engineering Audit",
    "Soft Services Audit",
    "EHS & Safety Audit",
    "Risk Audit",
    "Inventory Audit",
    "Process Audit",
    "AMC Tracking & Negotiations",
    "Energy & Sustainability Audit",
    "Compliance Audit",
    "Revenue Generation Audit",
    "Custom Ad-Hoc Audits",
];

const AuditsSection = () => {
    return (
        <section className="relative bg-[#030712] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN: Text Content & Interactive List */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                                Governance & Quality Control
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                Comprehensive Audit & Compliance Services
                            </h2>
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                Data-driven internal and external property audits conducted systematically to optimize operational performance, manage risk, and maximize savings.
                            </p>
                        </div>

                        {/* Review Cycles Badges */}
                        <div className="space-y-3">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <FiClock className="text-blue-400" />
                                <span>Review Cycles & Governance</span>
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {reviewCycles.map((cycle, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-blue-400 text-sm font-bold shadow-sm hover:border-blue-500/50 transition-all cursor-default"
                                    >
                                        {cycle}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Audit List with Hover Effect */}
                        <div className="space-y-3 pt-2">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                                Audits Executed
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {auditTypes.map((audit, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="group flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-900/50 transition-all cursor-default"
                                    >
                                        <FiCheckCircle className="text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform shrink-0 size-4" />
                                        <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">
                                            {audit}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Images Moving Smoothly Left and Right (-20px to +20px) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-full h-[480px] sm:h-[540px]">

                            {/* Main Top Image Card (Animated Left-Right) */}
                            <motion.div
                                animate={{ x: [-20, 20] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                                whileHover={{ scale: 1.03 }}
                                className="absolute top-0 right-0 w-[88%] h-[68%] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-xl group cursor-pointer transition-colors hover:border-blue-500/50"
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
                                        alt="Process & Compliance Audit"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-blue-400 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800">
                                        Process & Risk Audits
                                    </span>
                                </div>
                            </motion.div>

                            {/* Secondary Overlapping Bottom Image Card (Counter Animated Right-Left) */}
                            <motion.div
                                animate={{ x: [20, -20] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                                whileHover={{ scale: 1.03 }}
                                className="absolute bottom-0 left-0 w-[82%] h-[55%] rounded-3xl overflow-hidden border-4 border-[#030712] bg-slate-900/40 p-2 shadow-2xl backdrop-blur-xl group cursor-pointer transition-colors hover:border-blue-500/50 z-10"
                            >
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop"
                                        alt="Technical & Safety Inspection"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-blue-400 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800">
                                        Energy & AMC Negotiations
                                    </span>
                                </div>
                            </motion.div>

                            {/* Floating Stat Card */}
                            <motion.div
                                animate={{ y: [-5, 5] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                }}
                                className="absolute top-1/2 left-0 -translate-y-1/2 p-4 rounded-2xl border border-blue-500/30 bg-slate-950/90 shadow-xl backdrop-blur-xl flex items-center gap-3 z-20"
                            >
                                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                                    <FiTrendingUp className="size-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Cost & Risk Audits</div>
                                    <div className="text-[11px] text-slate-400">100% SOP Compliant</div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AuditsSection;