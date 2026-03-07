"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { clsx } from "clsx";

const categories = ["All", "Portrait", "Wedding", "Fashion"];

const photos = [
    { id: 1, src: "/images/portrait.png", category: "Portrait", alt: "Artistic Portrait" },
    { id: 2, src: "/images/wedding.png", category: "Wedding", alt: "Wedding Couple" },
    { id: 3, src: "/images/fashion.png", category: "Fashion", alt: "Fashion Editorial" },
    { id: 4, src: "/images/hero.png", category: "Fashion", alt: "Wide Fashion Shot" },
    { id: 5, src: "/images/profile.png", category: "Portrait", alt: "Studio Portrait" },
    { id: 6, src: "/images/wedding.png", category: "Wedding", alt: "Wedding Details" },
];

export function Gallery() {
    const [filter, setFilter] = React.useState("All");
    const [selectedPhoto, setSelectedPhoto] = React.useState<typeof photos[0] | null>(null);

    const filteredPhotos = photos.filter(
        (photo) => filter === "All" || photo.category === filter
    );

    return (
        <section id="portfolio" className="py-32 md:py-40 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 uppercase tracking-tight text-white">
                        Selected Works
                    </h2>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={clsx(
                                    "px-6 py-2.5 text-sm font-bold uppercase tracking-widest rounded-full border transition-all duration-300",
                                    filter === cat
                                        ? "border-white bg-white text-primary"
                                        : "border-white/50 text-white hover:border-white hover:bg-white/10"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredPhotos.map((photo) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={photo.id}
                                className="relative aspect-[3/4] cursor-pointer group overflow-hidden bg-white/5 border border-white/10"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-white/70 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X size={32} />
                        </button>
                        <div
                            className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedPhoto.src}
                                alt={selectedPhoto.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
