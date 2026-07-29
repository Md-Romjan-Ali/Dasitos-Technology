"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShield, FiCheckCircle } from "react-icons/fi";

// Status messages that cycle during loading
const loadingSteps = [
    "Initializing Facilities Framework...",
    "Securing Operations & Compliance...",
    "Loading PAN-India Asset Data...",
    "Finalizing AMAZE Platform..."
];

export default function LoadingScreen({ onComplete, duration = 2500 }) {
    const [progress, setProgress] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const intervalTime = 30;
        const totalTicks = duration / intervalTime;
        const increment = 100 / totalTicks;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsFinished(true);
                        if (onComplete) onComplete();
                    }, 300);
                    return 100;
                }

                // Update text step based on progress percentages
                if (next > 75) setStepIndex(3);
                else if (next > 50) setStepIndex(2);
                else if (next > 25) setStepIndex(1);

                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden select-none"
                >
                    {/* Background Decorative Ambient Glows */}
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

                    {/* Central Brand Badge */}
                    <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">

                        {/* Animated Logo Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-blue-950/40"
                        >
                            <FiShield className="size-10 text-blue-600 dark:text-blue-400" />

                            {/* Orbiting Spinner Ring */}
                            <div className="absolute -inset-1 rounded-2xl border-2 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-spin pointer-events-none opacity-70" />
                        </motion.div>

                        {/* Title & Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="space-y-1 mb-8"
                        >
                            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                                AMAZE <span className="text-blue-600 dark:text-blue-400">PMS</span>
                            </h1>
                            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                                Property Management Solutions
                            </p>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-full bg-slate-200 dark:bg-slate-800/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-300/50 dark:border-slate-700/50 shadow-inner mb-4">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-full shadow-lg shadow-blue-500/50"
                                style={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>

                        {/* Status Label & Percentage Readout */}
                        <div className="w-full flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-400">
                            <div className="h-5 flex items-center gap-1.5 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={stepIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="inline-flex items-center gap-1.5 truncate text-left"
                                    >
                                        <FiCheckCircle className="size-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                                        <span>{loadingSteps[stepIndex]}</span>
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <span className="font-mono text-slate-900 dark:text-white font-bold ml-2">
                                {Math.round(progress)}%
                            </span>
                        </div>

                    </div>

                    {/* Bottom Footer Note */}
                    <div className="absolute bottom-8 text-[11px] font-medium tracking-wide uppercase text-slate-400 dark:text-slate-600">
                        Action Group of Companies
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}