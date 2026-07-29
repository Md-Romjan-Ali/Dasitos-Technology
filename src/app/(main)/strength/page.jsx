"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const strengthsList = [
    "Managing an area of more than 20 million Sq.ft across different portfolios",
    "All services are Inhouse",
    "Availability of back up staff to take care of emergencies.",
    "Yearly training calendar will be shared and conducted by Training Officer.",
    "Risk Assessment of Equipment and its Operations and Recommend measures from time to time.",
    "Internal team will audit the site on a regular basis and propose the site improvement plans. The plan would include Power Saving Methods, Manpower Optimization will help in reducing the cost.",
    "Site specific SOP’s / Checklists for all the services.",
    "Coordination and Supervision towards Annual Shutdown Maintenance and mobilizing.",
    "Liaison with Government agencies.",
    "EHS, Security, Technical, Fire & Safety, Inventory, Process, Soft Services, Compliance, Customer Satisfaction audits. AMC Tracking and Negotiations",
    "STAFF WELFARE:- 1. Diwali Sweets, 2. Gifts on RD/ID, Rewards on RD/ID, 2lakhs Insurance, 10k funeral expenses, 1 lakh compensation, Ranker students & staff 1 lakh, 50 thousand, 25 thousand from the company.",
];

const StrengthsSection = () => {
    return (
        <section className="relative mt-10 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
            {/* Background Ambient Accents */}
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* HEADER */}
                <div className="space-y-2 mb-10 text-center sm:text-left">
                    <span className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block">
                        Strength
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Our Strength
                    </h2>
                </div>

                {/* 2-COLUMN GRID ON MEDIUM & LARGER DEVICES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strengthsList.map((item, idx) => {
                        // Make the last item (STAFF WELFARE) span full width if the list length is odd
                        const isLastOddItem =
                            idx === strengthsList.length - 1 && strengthsList.length % 2 !== 0;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2, delay: idx * 0.03 }}
                                whileHover={{ scale: 1.01, x: 2 }}
                                className={`group flex items-start gap-4 p-4.5 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:bg-slate-100/60 dark:hover:bg-slate-900/70 shadow-sm dark:shadow-none transition-all cursor-default ${isLastOddItem ? "md:col-span-2" : ""
                                    }`}
                            >
                                <FiCheckCircle className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 group-hover:scale-110 transition-transform shrink-0 size-5 mt-0.5" />
                                <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-sm sm:text-base leading-relaxed font-normal transition-colors">
                                    {item}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;