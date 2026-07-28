"use client";
import React, { useState, useEffect } from "react";
import { Dropdown, Label } from "@heroui/react";
import { FiChevronDown, FiBriefcase, FiUsers, FiCompass, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle Navbar hide/show on window scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar if scrolling up or near the top; hide if scrolling down past 50px
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { label: "Home", href: "/", active: true },
        { label: "About Us", href: "/aboutCompany" },
        {
            label: "Services", href: "/service"

        },
        { label: "Recruitments", href: "/recruitement" },
        { label: "Our Strength", href: "/strength" },
        { label: "Our Clients", href: "/client" },
        { label: "Gallery", href: "/gallary" },
        { label: "Careers", href: "/career" },
        { label: "Contact Us", href: "/contuctus" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* Main Glassmorphism Bar */}
            <nav className="w-full bg-[#030712]/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            {/* Replace src with your image path */}
                            <Image
                                height={500}
                                width={500}
                                src="https://i.ibb.co.com/wF8qRDCh/Chat-GPT-Image-Jul-27-2026-10-23-48-PM.png"
                                alt="AMAZE Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {navLinks.map((item, index) => {
                            if (item.dropdown) {
                                return (
                                    <li key={index} className="relative">
                                        {/* HeroUI v3.2.2 Dropdown Component */}
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <button className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors focus:outline-none cursor-pointer">
                                                    {item.label}
                                                    <FiChevronDown className="text-xs text-slate-400" />
                                                </button>
                                            </Dropdown.Trigger>

                                            <Dropdown.Popover className="mt-2">
                                                <Dropdown.Menu className="bg-slate-900/95 backdrop-blur-md border border-slate-800 shadow-xl rounded-xl p-1.5 min-w-[200px]">
                                                    {item.dropdown.map((dropItem, dropIndex) => (
                                                        <Dropdown.Item
                                                            key={dropIndex}
                                                            id={dropItem.label.toLowerCase().replace(/\s+/g, "-")}
                                                            textValue={dropItem.label}
                                                            className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-blue-600/20 rounded-lg transition-colors cursor-pointer"
                                                        >
                                                            {dropItem.icon}
                                                            <Label className="text-slate-200">{dropItem.label}</Label>
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown.Popover>
                                        </Dropdown>
                                    </li>
                                );
                            }

                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${item.active
                                            ? "text-blue-400 font-semibold"
                                            : "text-slate-200 hover:text-blue-400"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Hamburger Toggle Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="p-2 text-slate-200 hover:text-blue-400 focus:outline-none"
                            aria-label="Toggle Navigation"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-2 pb-6">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    {item.dropdown ? (
                                        <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                                {item.label}
                                            </span>
                                            {item.dropdown.map((dropItem, dropIndex) => (
                                                <a
                                                    key={dropIndex}
                                                    href="#"
                                                    className="flex items-center gap-2.5 pl-3 py-1.5 text-slate-200 hover:text-blue-400 text-sm font-medium"
                                                >
                                                    {dropItem.icon}
                                                    {dropItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href || "#"}
                                            className={`block text-base font-medium transition-colors ${item.active
                                                ? "text-blue-400 font-semibold"
                                                : "text-slate-200 hover:text-blue-400"
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;