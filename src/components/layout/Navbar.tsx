"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            {/* Desktop: Floating Pill Navigation */}
            <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-2 px-3 py-2 bg-primary/95 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                {/* Logo */}
                <div className="font-display text-white text-xl font-bold px-4 tracking-widest">
                    SAMA
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-white/20" />

                {/* Navigation Pills */}
                <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white transition-all duration-300 hover:bg-white hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-6 w-px bg-white/20" />

                {/* CTA Button */}
                <Link
                    href="#booking"
                    className="bg-white text-primary rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white border-2 border-white transition-all duration-300 hover:scale-105"
                >
                    Book Now
                </Link>
            </nav>

            {/* Mobile: Top Bar */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/20">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="font-display text-white text-xl font-bold tracking-widest">
                        SAMA
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile: Full-Screen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-2xl font-bold uppercase tracking-widest hover:text-white/70 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                            >
                                <Link
                                    href="#booking"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white text-primary rounded-full px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white border-2 border-white transition-all duration-300"
                                >
                                    Book Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
