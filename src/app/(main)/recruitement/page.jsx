"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
    FiUsers,
    FiMapPin,
    FiBriefcase,
    FiUserCheck,
    FiShield,
    FiCheckCircle,
} from "react-icons/fi";

// --- LAZY LOADING NESTED SECTIONS ---
const LoadingSkeleton = () => (
    <div className="w-full h-48 rounded-3xl bg-slate-200/60 dark:bg-slate-900/40 animate-pulse my-8 border border-slate-300/40 dark:border-slate-800" />
);

const SkillDevelopmentSection = dynamic(
    () => import("@/component/SkillDevelopment"),
    {
        loading: () => <LoadingSkeleton />,
        ssr: false,
    }
);

const AuditsSection = dynamic(() => import("@/component/Audit"), {
    loading: () => <LoadingSkeleton />,
    ssr: false,
});

const ApproachSection = dynamic(() => import("@/component/Functional"), {
    loading: () => <LoadingSkeleton />,
    ssr: false,
});

const regions = [
    { name: "Andhra Pradesh", tag: "Regional Office" },
    { name: "Telangana", tag: "Regional Office" },
    { name: "Karnataka", tag: "Regional Office" },
    { name: "Tamil Nadu", tag: "Regional Office" },
    { name: "UP, Bihar, Jharkhand", tag: "North Region" },
    { name: "North East & Odisha", tag: "Eastern Belt" },
];

const sourcingChannels = [
    {
        title: "District Employment Offices",
        desc: "Active participation in government Job Melas across key districts.",
        icon: FiBriefcase,
    },
    {
        title: "Employee Referral Program",
        desc: "Direct references sourced from our verified existing workforce.",
        icon: FiUserCheck,
    },
];

const RecruitmentSection = () => {
    return (
        <section className="relative mt-10 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Ambient Background Accents */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-100 dark:bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/20">
                        Talent Acquisition
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-500 leading-tight">
                        Recruitment Strategy & Verification
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                        Robust manpower sourcing network backed by rigorous, supervised background checks.
                    </p>
                </div>

                {/* 1. MANPOWER SOURCING GRID */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                            <FiUsers className="size-5" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                                Manpower Sourcing & Regional Reach
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                                Regional internal recruitment teams strategically located across India
                            </p>
                        </div>
                    </div>

                    {/* Regional Network Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {regions.map((region, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.08 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl shadow-md dark:shadow-none hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <FiMapPin className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
                                    <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm sm:text-base">
                                        {region.name}
                                    </span>
                                </div>
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700/50">
                                    {region.tag}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sourcing Channels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {sourcingChannels.map((channel, idx) => {
                            const Icon = channel.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                                    whileHover={{ y: -4 }}
                                    className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/30 backdrop-blur-md shadow-lg dark:shadow-none hover:border-blue-500/30 transition-all flex items-start gap-4"
                                >
                                    <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 shrink-0">
                                        <Icon className="size-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                            {channel.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            {channel.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. BACKGROUND VERIFICATION BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl border border-blue-200 dark:border-blue-500/30 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/80 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-indigo-950/40 p-8 sm:p-10 backdrop-blur-xl overflow-hidden shadow-xl dark:shadow-2xl shadow-blue-500/5 dark:shadow-blue-950/50"
                >
                    {/* Subtle Glow inside Banner */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        {/* Left Content */}
                        <div className="lg:col-span-8 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                                <FiShield className="size-3.5" />
                                <span>Security Standards</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                                Strict Antecedent & Background Verification
                            </h3>

                            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                Antecedent verification will be carried out by our dedicated in-house background check team under the direct supervision of a retired police officer to ensure total integrity and compliance.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <div className="flex items-center gap-2">
                                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span>In-House Vetting Team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 shrink-0" />
                                    <span>Police-Supervised Audits</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Badge Graphic */}
                        <div className="lg:col-span-4 flex justify-center lg:justify-end">
                            <div className="p-6 rounded-2xl border border-blue-200 dark:border-blue-500/20 bg-white/90 dark:bg-slate-900/80 text-center space-y-2 backdrop-blur-md max-w-xs w-full shadow-lg">
                                <div className="mx-auto size-12 rounded-full bg-blue-100 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <FiShield className="size-6" />
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-sm">Supervised Vetting</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">Ex-Police Officer Oversight</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* LAZY LOADED SECTIONS */}
                <SkillDevelopmentSection />
                <AuditsSection />
                <ApproachSection />
            </div>
        </section>
    );
};

export default RecruitmentSection;