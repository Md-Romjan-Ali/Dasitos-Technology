'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Corporate Client Logos list based on image
const clientLogos = [
    {
        name: "Wipro",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
        name: "DivyaSree",
        logo: "https://www.amazepms.com/assets/client2.png",
    },
    {
        name: "L&T Technology Services",
        logo: "https://www.amazepms.com/assets/client8.png",
    },
    {
        name: "Hill County",
        logo: "https://www.amazepms.com/assets/client4.png",
    },
    {
        name: "LODHA",
        logo: "https://www.amazepms.com/assets/client6.png",
    },
];

// Duplicate items list for infinite seamless running loop
const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

const Sponsore = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="w-full bg-[#030712] py-16 px-4 overflow-hidden border-y border-slate-800/80">
            {/* Header Badge */}
            <div className="max-w-7xl mx-auto mb-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest shadow-lg shadow-blue-500/10"
                >
                    Trusted by Industry Leaders
                </motion.span>
            </div>

            {/* Marquee Wrapper with Edge Gradients & Hover Handlers */}
            <div
                className="relative flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex items-center gap-8 sm:gap-12 min-w-max"
                    animate={{
                        x: isHovered ? undefined : ["0%", "-33.33%"],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 22,
                        repeat: Infinity,
                    }}
                >
                    {marqueeItems.map((client, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.08, y: -6 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="flex items-center justify-center h-24 px-8 bg-slate-900/70 backdrop-blur-md border border-slate-800/80 hover:border-blue-500/60 rounded-2xl shadow-xl shadow-black/50 hover:shadow-blue-500/10 transition-colors duration-300 group cursor-pointer"
                        >
                            <Image
                                height={200}
                                width={200}
                                src={client.logo}
                                alt={client.name}
                                title={client.name}
                                className="h-10 sm:h-12 w-auto object-contain max-w-[180px] filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsore;