"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
    FiCheckCircle,
    FiPhoneCall,
    FiArrowDown,
} from "react-icons/fi";
import Image from "next/image";

// 3 Text & Image Steps triggered by scrolling
const steps = [
    {
        tag: "Inhouse Operations & Scale",
        title: "Managing Over 20 Million Sq.ft",
        description:
            "All services are completely inhouse with guaranteed availability of emergency backup staff ready for any operational demands.",
        points: [
            "Over 20M Sq.ft under active management",
            "100% Inhouse service execution",
            "Immediate emergency backup staff deployment",
        ],
        images: {
            main: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5W_u5BtDj0zud-4TxLhi2zLvsiUDNN-HlZuai1OY3mZlSI7Fv-Io5E&s=10",
            sub: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop",
            badge: "Inhouse Facilities",
        },
    },
    {
        tag: "Quality & Compliance",
        title: "Risk Assessment & SOP Audits",
        description:
            "A structured yearly training calendar conducted by certified Training Officers along with comprehensive EHS and safety audits.",
        points: [
            "Site-specific SOPs & customized checklists",
            "Risk assessment & equipment operations",
            "Internal audit team for power & cost savings",
        ],
        images: {
            main: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
            sub: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDhqh5nyfg9nB23_V9TUG450gWZMOxGW_Ew2apq1uqkLE6d6mRQOCAJo&s=10",
            badge: "Safety & SOPs",
        },
    },
    {
        tag: "Excellence & People Care",
        title: "Liaison & Unmatched Staff Welfare",
        description:
            "From AMC tracking to government agency liaison, paired with industry-leading welfare benefits for our dedicated team.",
        points: [
            "Government liaison & AMC negotiations",
            "Festive gifts, insurance & funeral coverage",
            "Merit scholarships for staff children (up to ₹1 Lakh)",
        ],
        images: {
            main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
            sub: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
            badge: "Staff Welfare",
        },
    },
];

const WhyChooseUsHero = () => {
    const targetRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    // Track scroll inside the 300vh container
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Calculate active step index cleanly based on scroll percentage
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) {
            if (activeStep !== 0) setActiveStep(0);
        } else if (latest >= 0.33 && latest < 0.66) {
            if (activeStep !== 1) setActiveStep(1);
        } else {
            if (activeStep !== 2) setActiveStep(2);
        }
    });

    const currentData = steps[activeStep];

    return (
        <div ref={targetRef} className="relative h-[300vh] bg-[#030712] text-white">
            {/* Pinned Sticky Hero Screen */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">

                {/* Background Ambient Glows */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                    {/* LEFT COLUMN: Text Content Container */}
                    <div className="lg:col-span-6 relative h-[420px] sm:h-[380px] flex flex-col justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="space-y-4"
                            >
                                <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
                                    {currentData.tag}
                                </span>

                                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                    {currentData.title}
                                </h2>

                                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                    {currentData.description}
                                </p>

                                <ul className="space-y-2 pt-2">
                                    {currentData.points.map((pt, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                                            <FiCheckCircle className="text-blue-400 shrink-0" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN: Image Container */}
                    <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="relative w-full h-full"
                                >
                                    {/* Main Image */}
                                    <div className="absolute inset-x-0 top-0 h-[70%] rounded-2xl overflow-hidden border border-slate-700/50 shadow-md">
                                        <Image
                                            src={currentData.images.main}
                                            alt={currentData.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-blue-400 text-xs px-3 py-1 rounded-full border border-slate-800">
                                            {currentData.images.badge}
                                        </span>
                                    </div>

                                    {/* Secondary/Sub Image */}
                                    <div
                                        className={`absolute bottom-2 w-[55%] h-[50%] rounded-2xl overflow-hidden border-4 border-[#030712] shadow-2xl ${activeStep === 1 ? "left-2" : "right-2"
                                            }`}
                                    >
                                        <Image
                                            src={currentData.images.sub}
                                            alt={currentData.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* Scroll Down Indicator */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs font-medium animate-bounce">
                    <span>Scroll down to explore</span>
                    <FiArrowDown className="text-blue-400 size-4" />
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUsHero;