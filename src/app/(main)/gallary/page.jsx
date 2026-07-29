"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMaximize2, FiX } from "react-icons/fi";
import Image from "next/image";

const galleryCategories = [
    "All",
    "Security Group",
    "Cleaner",
    "Engineer Group",
    "Women Security",
    "Client Group",
];

const galleryItems = [
    {
        id: 1,
        title: "Professional Security Guard Team",
        category: "Security Group",
        image:
            "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "Commercial Facility Cleaning",
        category: "Cleaner",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5W_u5BtDj0zud-4TxLhi2zLvsiUDNN-HlZuai1OY3mZlSI7Fv-Io5E&s=10",
    },
    {
        id: 3,
        title: "On-Site Engineering & Maintenance",
        category: "Engineer Group",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Security Personnel Unit",
        category: "Security Group",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDhqh5nyfg9nB23_V9TUG450gWZMOxGW_Ew2apq1uqkLE6d6mRQOCAJo&s=10",
    },
    {
        id: 5,
        title: "Corporate Client Meet & Handover",
        category: "Client Group",
        image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        title: "24/7 Patrol & Control Room",
        category: "Security Group",
        image:
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 7,
        title: "Deep Cleaning & Sanitization Services",
        category: "Cleaner",
        image:
            "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 8,
        title: "Technical Engineering Specialists",
        category: "Engineer Group",
        image:
            "https://img.magnific.com/free-photo/architect-man-showing-something-project-his-colleague-foreman_496169-959.jpg",
    },
];

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems =
        activeTab === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeTab);

    return (
        <section className="relative mt-10 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-10">
                {/* HEADER */}
                <div className="space-y-3 text-center sm:text-left">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block">
                        Our Work in Action
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Photo Gallery
                    </h2>
                </div>

                {/* CATEGORY FILTER TABS */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200 dark:border-slate-800">
                    {galleryCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${activeTab === category
                                ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20"
                                : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* GALLERY GRID */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => setSelectedImage(item)}
                                className="group relative h-64 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 cursor-pointer shadow-sm dark:shadow-none transition-all"
                            >
                                {/* Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />

                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <h4 className="text-sm font-bold text-white mt-1">
                                        {item.title}
                                    </h4>
                                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md p-2 rounded-xl border border-slate-700 text-white">
                                        <FiMaximize2 className="size-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* LIGHTBOX MODAL */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-slate-950/80 dark:bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.85 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.85 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 bg-slate-900/60 hover:bg-slate-900 text-white p-2.5 rounded-full border border-slate-700 transition-colors"
                                aria-label="Close lightbox"
                            >
                                <FiX className="size-5" />
                            </button>

                            <div className="relative h-96 sm:h-[480px] w-full bg-slate-950">
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 space-y-1">
                                <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;