"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiCompass,
    FiFileText,
    FiLayers,
    FiActivity,
    FiCheckCircle,
    FiArrowRight,
    FiSearch,
    FiUsers,
    FiShield,
    FiMessageSquare,
    FiSliders,
    FiTrendingUp,
} from "react-icons/fi";

const phases = [
    {
        id: "phase-1",
        stepNumber: "01",
        title: "Discovery & Engagement",
        subtitle: "Understanding and defining client objectives",
        icon: FiCompass,
        badge: "Initiation",
        color: "from-blue-500 to-cyan-500",
        accent: "blue",
        points: [
            {
                text: "Getting connected with the client",
                icon: FiUsers,
                detail: "Establishing core communication channels and stakeholder mapping.",
            },
            {
                text: "Understanding the client requirement",
                icon: FiSearch,
                detail: "Deep dive into site-specific operational needs and safety standards.",
            },
            {
                text: "Site survey & studying existing processes",
                icon: FiSliders,
                detail: "On-site assessment of vulnerabilities, workflow bottlenecks, and infrastructure.",
            },
            {
                text: "Submission of service & commercial proposal",
                icon: FiFileText,
                detail: "Transparent cost estimations tailored to required deployment scale.",
            },
        ],
    },
    {
        id: "phase-2",
        stepNumber: "02",
        title: "Contract & Planning",
        subtitle: "Resource alignment and standardizations",
        icon: FiFileText,
        badge: "Preparation",
        color: "from-cyan-500 to-teal-500",
        accent: "cyan",
        points: [
            {
                text: "Contract confirmation by the client",
                icon: FiCheckCircle,
                detail: "Formalizing partnership goals and expected performance metrics.",
            },
            {
                text: "Resource planning, recruitment & training",
                icon: FiUsers,
                detail: "Vetting qualified personnel and initiating domain-specific preparation.",
            },
            {
                text: "Preparation of site-specific SOPs",
                icon: FiLayers,
                detail: "Tailoring Standard Operating Procedures for guards, MEP, or housekeeping.",
            },
            {
                text: "Finalizing the service agreement",
                icon: FiFileText,
                detail: "Legal alignment, SLA commitments, and scope sign-offs.",
            },
        ],
    },
    {
        id: "phase-3",
        stepNumber: "03",
        title: "Deployment & Transition",
        subtitle: "Seamless handover and team positioning",
        icon: FiLayers,
        badge: "Execution",
        color: "from-indigo-500 to-blue-600",
        accent: "indigo",
        points: [
            {
                text: "Deployment of contract startup team",
                icon: FiShield,
                detail: "Senior leaders oversee initial operational setup and orientation.",
            },
            {
                text: "Parallel deployment of security force",
                icon: FiUsers,
                detail: "Shadowing existing personnel for zero-downtime knowledge transfer.",
            },
            {
                text: "Taking over from existing service provider",
                icon: FiCheckCircle,
                detail: "Smooth transition without gap in site security or maintenance.",
            },
            {
                text: "Supervision & coordination by field staff",
                icon: FiActivity,
                detail: "Active ground command maintaining service quality from day one.",
            },
        ],
    },
    {
        id: "phase-4",
        stepNumber: "04",
        title: "Functional Approach",
        subtitle: "Continuous monitoring and optimization",
        icon: FiActivity,
        badge: "Sustained Operations",
        color: "from-blue-600 to-indigo-600",
        accent: "blue",
        points: [
            {
                text: "Close monitoring by the operations team",
                icon: FiActivity,
                detail: "24/7 centralized oversight and regular site audits.",
            },
            {
                text: "Review of security posture & procedures",
                icon: FiShield,
                detail: "Periodic evaluation of threat models, protocols, and efficiency.",
            },
            {
                text: "Site-specific specialized training",
                icon: FiTrendingUp,
                detail: "Ongoing skill upgrades focused on emergent property challenges.",
            },
            {
                text: "Feedback & suggestions from client",
                icon: FiMessageSquare,
                detail: "Structured reviews to align service with evolving needs.",
            },
        ],
    },
];

const ApproachSection = () => {
    const [activePhase, setActivePhase] = useState(phases[0]);

    return (
        <section className="relative bg-[#030712] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                        Operational Excellence
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Our Strategic Approach
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg">
                        A structured 4-stage deployment model built to guarantee seamless handover, total operational continuity, and functional monitoring.
                    </p>
                </div>

                {/* STEPPER PROGRESS BARS / TABS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {phases.map((phase) => {
                        const Icon = phase.icon;
                        const isActive = activePhase.id === phase.id;

                        return (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(phase)}
                                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 group overflow-hidden ${isActive
                                    ? "bg-slate-900/90 border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]"
                                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                                    }`}
                            >
                                {/* Active Indicator Top Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeApproachGlow"
                                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <div className="flex items-center justify-between w-full">
                                    <span className={`text-xs font-black tracking-widest ${isActive ? "text-blue-400" : "text-slate-500"}`}>
                                        PHASE {phase.stepNumber}
                                    </span>
                                    <div className={`p-2 rounded-xl border transition-colors ${isActive ? "bg-blue-500/10 border-blue-500/30 text-blue-400" : "bg-slate-800/50 border-slate-800 text-slate-400 group-hover:text-white"
                                        }`}>
                                        <Icon className="size-4" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`text-base font-bold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                        {phase.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                                        {phase.subtitle}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ACTIVE PHASE DETAILED VIEW */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePhase.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12 backdrop-blur-xl shadow-2xl space-y-8"
                    >
                        {/* Phase Sub-Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                            <div className="space-y-1">
                                <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                    {activePhase.badge}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-white pt-2">
                                    {activePhase.title}
                                </h2>
                                <p className="text-slate-400 text-sm">
                                    {activePhase.subtitle}
                                </p>
                            </div>

                            <div className="text-xs font-semibold text-slate-300 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/50 self-start sm:self-auto flex items-center gap-2">
                                <span>Phase {activePhase.stepNumber} of 04</span>
                                <FiArrowRight className="text-blue-400 size-3.5" />
                            </div>
                        </div>

                        {/* Action Items Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {activePhase.points.map((item, idx) => {
                                const ItemIcon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                                        whileHover={{ scale: 1.01, x: 4 }}
                                        className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all cursor-default group flex items-start gap-4"
                                    >
                                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                                            <ItemIcon className="size-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-white text-base font-bold group-hover:text-blue-400 transition-colors">
                                                {item.text}
                                            </h4>
                                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ApproachSection;