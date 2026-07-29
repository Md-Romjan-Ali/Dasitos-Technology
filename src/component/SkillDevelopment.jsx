"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiAward,
    FiCheckCircle,
    FiCpu,
    FiHome,
    FiMapPin,
    FiShield,
    FiUserCheck,
} from "react-icons/fi";

const highlights = [
    {
        icon: FiAward,
        title: "NSDC Affiliated",
        desc: "Affiliated with the National Skill Development Corporation of India.",
    },
    {
        icon: FiUserCheck,
        title: "Expert Trainers",
        desc: "Well-qualified & highly experienced industry certified trainers.",
    },
    {
        icon: FiMapPin,
        title: "Dedicated Centers",
        desc: "Training facilities located across Corporate & Branch offices.",
    },
];

const domainModules = {
    security: {
        id: "security",
        title: "Security Training",
        icon: FiShield,
        tag: "Safety & Vigilance",
        items: [
            "Post & Site Instruction - Know Your Property",
            "Gate House Operations",
            "Patrolling & Incident Management",
            "Visitors & Vendor Management",
            "Material Movement Control",
            "Command Control Centre",
            "Fire & Safety, Emergency Management",
            "Traffic & Parking Management",
            "Peripheral Protection",
            "Key Management & Workplace Safety",
        ],
    },
    mep: {
        id: "mep",
        title: "MEP Training",
        icon: FiCpu,
        tag: "Engineering & Safety",
        items: [
            "Grooming Standards, Do's & Don'ts",
            "Workplace Safety & EHS Policy",
            "POSH Compliance",
            "Shutdown Operations",
            "Process & Operational Audits",
            "Planned Preventive Maintenance (PPM)",
            "Risk Audits & Inventory Control",
            "Work Permit & Lockout-Tagout (LOTO)",
        ],
    },
    housekeeping: {
        id: "housekeeping",
        title: "Housekeeping Training",
        icon: FiHome,
        tag: "Hygiene & Service",
        items: [
            "Grooming Standards & Communication Skills",
            "Behavioral Approach & Service Ethics",
            "Safe Usage of Chemical Cleaning Agents",
            "Operation of Industrial Machinery",
            "POSH Compliance & EHS Policy",
            "Do's & Don'ts & Workplace Safety",
            "Reporting Systems & IPC Section Standards",
        ],
    },
};

const SkillDevelopmentSection = () => {
    const [activeTab, setActiveTab] = useState("security");
    const currentDomain = domainModules[activeTab];

    return (
        <section className="relative bg-[#030712] text-slate-900 dark:text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                        Workforce Readiness
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Skill Development & Training
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg">
                        Manpower is deployed strictly after thorough screening and comprehensive domain-specific training.
                    </p>
                </div>

                {/* TOP HIGHLIGHT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="p-6 rounded-3xl border border-slate-200/20 dark:border-slate-800 bg-white/90 dark:bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex items-start gap-4 shadow-lg dark:shadow-none"
                            >
                                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 shrink-0">
                                    <Icon className="size-6" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* DOMAIN CURRICULUM TABS SECTION */}
                <div className="space-y-8">
                    {/* Tab Selector Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {Object.keys(domainModules).map((key) => {
                            const tab = domainModules[key];
                            const Icon = tab.icon;
                            const isActive = activeTab === key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border ${isActive
                                            ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30 scale-105"
                                            : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 border-slate-200/30 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-white shadow-sm dark:shadow-none"
                                        }`}
                                >
                                    <Icon className="size-4" />
                                    <span>{tab.title}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Domain Curriculum Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl border border-slate-200/20 dark:border-slate-800 bg-white/90 dark:bg-slate-900/30 p-8 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8"
                        >
                            {/* Panel Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                                <div>
                                    <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
                                        {currentDomain.tag}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                                        {currentDomain.title} Curriculum
                                    </h3>
                                </div>
                                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700/50 self-start sm:self-auto">
                                    {currentDomain.items.length} Core Modules Covered
                                </div>
                            </div>

                            {/* Module Grid List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                {currentDomain.items.map((module, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: idx * 0.03 }}
                                        className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-800/40 transition-all group shadow-sm dark:shadow-none"
                                    >
                                        <FiCheckCircle className="text-blue-600 dark:text-blue-400 shrink-0 size-5 group-hover:scale-110 transition-transform" />
                                        <span className="text-slate-700 dark:text-slate-200 text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            {module}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SkillDevelopmentSection;