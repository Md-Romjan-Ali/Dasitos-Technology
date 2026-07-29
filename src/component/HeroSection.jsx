"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiChevronLeft,
    FiChevronRight,
    FiArrowRight,
    FiShield,
    FiTrendingUp,
    FiHome,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Amaze Property Management Solutions Pvt Ltd",
        subtitle: "A one stop solution for all your property management needs.",
        image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop", // Modern luxury skyline
        tag: "Premium Solutions",
    },
    {
        id: 2,
        title: "Elevating Real Estate Standards Nationwide",
        subtitle: "Comprehensive facility management, leasing, and asset growth.",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop", // Commercial high-rise
        tag: "Commercial & Residential",
    },
    {
        id: 3,
        title: "Smart Care for Your Valuable Investments",
        subtitle: "Transparent maintenance, verified tenant placement, and 24/7 support.",
        image:
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop", // Architectural modern villa
        tag: "End-to-End Care",
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <section className="relative w-full h-screen min-h-[680px] overflow-hidden bg-slate-900 text-white flex items-center">
            {/* Background Image Carousel with Framer Motion Fade */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[currentIndex].id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        height={1000}
                        width={1000}
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover object-center"
                        priority
                    />
                    {/* Balanced Overlays for Both Light and Dark Mode */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/20 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
                </motion.div>
            </AnimatePresence>

            {/* Floating Left Social Bar */}
            <div className="hidden md:flex fixed left-6 z-30 flex-col gap-4 items-center">
                <div className="w-[1px] h-12 bg-white/30" />
                <a
                    href="#"
                    className="p-2.5 rounded-full bg-slate-900/40 dark:bg-white/10 backdrop-blur-md hover:bg-blue-600 dark:hover:bg-blue-600 transition-all text-white border border-white/20 hover:scale-110 shadow-sm"
                >
                    <FaFacebookF size={14} />
                </a>
                <a
                    href="#"
                    className="p-2.5 rounded-full bg-slate-900/40 dark:bg-white/10 backdrop-blur-md hover:bg-pink-600 dark:hover:bg-pink-600 transition-all text-white border border-white/20 hover:scale-110 shadow-sm"
                >
                    <FaInstagram size={14} />
                </a>
                <a
                    href="#"
                    className="p-2.5 rounded-full bg-slate-900/40 dark:bg-white/10 backdrop-blur-md hover:bg-blue-500 dark:hover:bg-blue-500 transition-all text-white border border-white/20 hover:scale-110 shadow-sm"
                >
                    <FaLinkedinIn size={14} />
                </a>
                <div className="w-[1px] h-12 bg-white/30" />
            </div>

            {/* Hero Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Main Hero Text Column */}
                    <div className="lg:col-span-8 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slides[currentIndex].id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4"
                            >
                                {/* Category Badge */}
                                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
                                    {slides[currentIndex].tag}
                                </span>

                                {/* Main Heading */}
                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                                    {slides[currentIndex].title}
                                </h1>

                                {/* Subtitle */}
                                <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-light leading-relaxed">
                                    {slides[currentIndex].subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* CTA Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <button className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group">
                                Explore Our Services
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium text-sm transition-all">
                                Get a Free Quote
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Floating Glass Stat Widget */}
                    <div className="hidden lg:block lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="p-6 rounded-2xl bg-slate-950/40 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-5"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-400">
                                    <FiHome size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">500+</h4>
                                    <p className="text-xs text-slate-300">Properties Managed</p>
                                </div>
                            </div>

                            <div className="h-[1px] bg-white/10 w-full" />

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-emerald-600/30 border border-emerald-400/30 text-emerald-400">
                                    <FiShield size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">100%</h4>
                                    <p className="text-xs text-slate-300">Verified Tenants</p>
                                </div>
                            </div>

                            <div className="h-[1px] bg-white/10 w-full" />

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-purple-600/30 border border-purple-400/30 text-purple-400">
                                    <FiTrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">15+ Yrs</h4>
                                    <p className="text-xs text-slate-300">Industry Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Left/Right Navigation Arrow Controls */}
            <div className="absolute inset-x-0 bottom-12 z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
                {/* Slide Counter Dots */}
                <div className="flex items-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "w-8 bg-blue-500"
                                : "w-2.5 bg-white/40 hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>

                {/* Carousel Prev/Next Buttons */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="p-3 rounded-full bg-slate-900/40 dark:bg-white/10 hover:bg-slate-900/60 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="p-3 rounded-full bg-slate-900/40 dark:bg-white/10 hover:bg-slate-900/60 dark:hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;