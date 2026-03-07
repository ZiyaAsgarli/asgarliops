"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/Calendar";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function Booking() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        type: "Portrait",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Booking request sent for ${selectedDate?.toDateString()}!\nWe will contact you shortly.`);
        setSelectedDate(null);
        setFormData({ name: "", email: "", phone: "", type: "Portrait", message: "" });
    };

    return (
        <section id="booking" className="py-32 md:py-40 bg-primary/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 uppercase tracking-tight text-white">
                        Book a Session
                    </h2>
                    <p className="text-white/80 text-lg">Select a date and tell me about your vision.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
                    {/* Calendar Side */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-white">
                            1. Choose a Date
                        </h3>
                        <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                        {selectedDate && (
                            <p className="mt-8 text-white font-bold animate-fade-in text-lg">
                                Selected: {selectedDate.toDateString()}
                            </p>
                        )}
                    </div>

                    {/* Form Side */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl font-bold mb-8 text-center lg:text-left uppercase tracking-widest text-white">
                            2. Your Details
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-3">
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-white">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    required
                                    placeholder="Jane Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-white">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="jane@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-white">
                                        Phone
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="type" className="text-sm font-bold uppercase tracking-wider text-white">
                                    Type of Shoot
                                </label>
                                <select
                                    id="type"
                                    className="flex h-11 w-full border-b border-white bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:border-white focus-visible:border-b-2 transition-all duration-200"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="Portrait" className="bg-primary text-white">Portrait / Love Story</option>
                                    <option value="Studio" className="bg-primary text-white">Studio Shooting</option>
                                    <option value="Commercial" className="bg-primary text-white">Commercial</option>
                                    <option value="Fashion" className="bg-primary text-white">Fashion</option>
                                    <option value="Other" className="bg-primary text-white">Other</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="flex w-full border border-white bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:border-white focus-visible:border-2 resize-none transition-all duration-200"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                disabled={!selectedDate}
                            >
                                {selectedDate ? "Confirm Booking" : "Select a Date First"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
