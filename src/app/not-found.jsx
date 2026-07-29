"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiHome,
    FiArrowLeft,
    FiShield,
    FiHelpCircle,
    FiPhoneCall,
    FiCompass
} from "react-icons/fi";

export default function NotFound() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white px-6 py-12 overflow-hidden transition-colors duration-300">

            {/* Ambient Background Decorative Glows */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-3xl w-full mx-auto text-center relative z-10 space-y-8">

                {/* Visual Header / 404 Display */}
                <div className="relative flex flex-col items-center justify-center">

                    {/* Floating Shield Badge Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl shadow-blue-500/10 mb-2"
                    >
                        <FiShield className="size-10 text-blue-600 dark:text-blue-400" />
                    </motion.div>

                    {/* Massive 404 Text with Gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-8xl sm:text-9xl font-black tracking-tighter bg-gradient-to-b from-slate-900 via-slate-800 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-600 bg-clip-text text-transparent select-none leading-none"
                    >
                        404
                    </motion.h1>

                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase -mt-4"
                    >
                        Page Not Found
                    </motion.span>
                </div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="space-y-3 max-w-xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Looking for Something Specific?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        The property management page or resource you are trying to access might have been moved, renamed, or is temporarily unavailable.
                    </p>
                </motion.div>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                >
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 dark:shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <FiHome size={18} />
                            <span>Return to Home</span>
                        </motion.button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm border border-slate-200 dark:border-slate-800 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <FiArrowLeft size={18} />
                        <span>Go Back</span>
                    </button>
                </motion.div>

                {/* Quick Navigation Helpful Links */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="pt-8 border-t border-slate-200 dark:border-slate-800/80 max-w-lg mx-auto"
                >
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
                        <FiCompass className="size-4 text-blue-600 dark:text-blue-400" />
                        <span>Popular Destinations</span>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        <Link
                            href="/#about"
                            className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 transition-colors flex items-center gap-2.5 group"
                        >
                            <FiShield className="text-blue-600 dark:text-blue-400 size-4 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">About AMAZE</span>
                        </Link>

                        <Link
                            href="/#services"
                            className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 transition-colors flex items-center gap-2.5 group"
                        >
                            <FiHelpCircle className="text-blue-600 dark:text-blue-400 size-4 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Our Services</span>
                        </Link>

                        <Link
                            href="/#contact"
                            className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 transition-colors flex items-center gap-2.5 group"
                        >
                            <FiPhoneCall className="text-blue-600 dark:text-blue-400 size-4 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Contact Us</span>
                        </Link>
                    </div>
                </motion.div>

            </div>

            {/* Sub-footer Branding */}
            <div className="absolute bottom-6 text-[11px] font-medium tracking-wide uppercase text-slate-400 dark:text-slate-600">
                Action Group of Companies — Property Management Solutions
            </div>
        </section>
    );
}