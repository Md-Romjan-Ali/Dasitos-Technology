"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiSearch } from "react-icons/fi";
import Sponsore from "@/component/Sponsore";

const clientsData = [
    {
        category: "Commercial & IT Parks",
        clients: [
            "Sohini Tech Park",
            "BSR Tech Park",
            "Divyasree NSL (Orion Campus)",
            "Kapil Towers",
            "Astra Towers",
            "Lanco IT",
            "Rajapushpa Summit",
            "Cyperoptics",
            "IVY Infotech",
            "L&T Metro Stations",
            "Purva Summit",
            "Kapil Business Park",
            "I Labs",
            "Sattva Knowledge Park",
            "Tech Mahindra",
            "T Hub",
            "Tech Ridge",
            "Cyber Towers",
            "Aurobindo Galaxy",
            "Kapil Kavuri Hub",
            "Sitel India Pvt Ltd",
            "Jocota",
            "Moschip",
            "Smart Drive",
            "I Sprout",
        ],
    },
    {
        category: "Residential Communities",
        clients: [
            "Golf Edge Residences",
            "Aparna Silver Oak",
            "Mahindra Ashvitha",
            "Golf View",
            "Ramky Towers",
            "Rajapushpa Imperia",
            "Lanco Hills",
            "Rajapushpa Provincia",
            "Krinss Villas",
            "Hill County",
            "Rajapushpa Greendale",
            "Jains Balaji",
            "Kalpatharu Residency",
            "Sri Sai Ram Towers",
            "The Botanika",
            "My Home Mangla",
            "Rainbow Vista",
            "North Star Villas",
            "Rajapushpa Regalia",
            "Rajapushpa Atria",
            "Manjeera Diamond Tower",
            "L&T Serene County",
            "Aparna Hill Park Sarovar",
            "My Home Avatar",
            "Rajapushpa Eterna",
            "Hill Ridge Villas",
            "Aditya Empress",
            "Prajay Megapolis",
        ],
    },
    {
        category: "Mall Multiples & Retail",
        clients: [
            "Nexus Mall",
            "Marina Mall",
            "Phoenix Market City",
            "GMS Mall",
            "Lulu Mall",
            "DSL Mall",
            "L&T Mall – Punjagutta",
            "Rajapushpa Provincia",
            "L&T Mall – Hitech City",
            "L&T Mall – Musarambagh",
            "Max Stores",
            "Time Zone",
            "Life Style",
        ],
    },
    {
        category: "Hospitals & Clinics",
        clients: [
            "Rainbow Hospitals",
            "Oliva Clinics",
            "Star Health",
            "Rainbow Vista",
        ],
    },
    {
        category: "Warehouses",
        clients: [
            "Max",
            "Life Style",
            "RIL",
            "Metro",
            "UB Beer",
            "Emirates Logistics",
            "Nippon",
            "ITC",
        ],
    },
];

const ClientsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Commercial & IT Parks");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = clientsData.map((item) => item.category);

    const selectedCategoryData = clientsData.find(
        (group) => group.category === activeCategory
    );

    const filteredClients = selectedCategoryData
        ? selectedCategoryData.clients.filter((client) =>
            client.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <section className="relative mt-10 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-10">
                {/* HEADER */}
                <div className="space-y-2 text-center sm:text-left">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 dark:bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block">
                        Our Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Our Clients
                    </h2>
                </div>

                {/* CONTROLS: CATEGORY TABS & SEARCH */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                    {/* Category Filter Buttons */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${activeCategory === cat
                                        ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20 dark:shadow-blue-500/20"
                                        : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-900 dark:hover:text-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Box */}
                    <div className="relative min-w-[240px]">
                        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 size-4" />
                        <input
                            type="text"
                            placeholder={`Search in ${activeCategory}...`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 text-sm rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500/60 dark:focus:border-blue-500/60 transition-colors shadow-sm dark:shadow-none"
                        />
                    </div>
                </div>

                {/* SINGLE ACTIVE CATEGORY DISPLAY */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 border-l-2 border-blue-500 pl-3">
                            {activeCategory}
                        </h3>

                        {filteredClients.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                {filteredClients.map((client, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.005, x: 2 }}
                                        className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 shadow-sm dark:shadow-none transition-all cursor-default"
                                    >
                                        <FiCheckCircle className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 group-hover:scale-110 transition-transform shrink-0 size-4" />
                                        <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium transition-colors">
                                            {client}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center text-slate-400 dark:text-slate-500 text-sm">
                                No clients found matching {searchQuery} in {activeCategory}.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <Sponsore />
        </section>
    );
};

export default ClientsSection;