"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiBriefcase } from "react-icons/fi";
import Image from "next/image";

const openings = [
    "Facility Manager",
    "Assistant Facility Manager",
    "Operations Manager",
    "Security Officer",
    "Electrician",
    "Field Officer - Technical",
    "Field Officer - Security",
    "Plumber",
    "Carpenter",
    "Gardener",
    "House Keeping Supervisor",
    "House Keeper",
    "Fire & Safety Technicians",
    "Help Desk Executive",
];

const CareersSection = () => {
    return (
        <section className="relative bg-[#030712] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
                {/* HEADER SECTION (CENTER ALIGNED) */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block">
                        Careers
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                        Work With Us
                    </h2>
                    <p className="text-lg sm:text-xl text-blue-200/90 font-medium">
                        Take the next step in your career with Amaze
                    </p>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        We are hiring passionate professionals working in the field of property management services. Apply with your Curriculum Vitae to{" "}
                        <a
                            href="mailto:careers@amazepms.com"
                            className="text-blue-400 underline hover:text-blue-300 font-semibold transition-colors"
                        >
                            careers@amazepms.com
                        </a>
                    </p>
                </div>

                {/* MAIN SECTION: LEFT TEXT/CARDS & RIGHT IMAGE (CENTER ALIGNED VERTICALLY) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE: CURRENT OPENINGS CARDS */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-2 border-l-2 border-blue-500 pl-3">
                            <FiBriefcase className="text-blue-400 size-5" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Current Openings
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {openings.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -2 }}
                                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 flex items-center justify-between gap-3 transition-all group"
                                >
                                    <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                                        {job}
                                    </span>
                                    <a
                                        href="mailto:careers@amazepms.com"
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-colors shrink-0"
                                    >
                                        Apply <FiArrowUpRight className="size-3.5" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: HIRING IMAGE */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
                            <Image
                                height={500}
                                width={500}
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
                                alt="We Are Hiring - Join Amaze Team"
                                className="w-full h-[450px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                                <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                                    Join Our Team
                                </span>
                                <h4 className="text-xl font-bold text-white mt-1">
                                    Build Your Future with Amaze
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CareersSection;