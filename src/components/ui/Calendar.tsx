"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

interface CalendarProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}

export function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isSameDay = (d1: Date, d2: Date) => {
        return (
            d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear()
        );
    };

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-12 w-12" />);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const isToday = isSameDay(date, new Date());

            days.push(
                <button
                    key={i}
                    onClick={() => onSelectDate(date)}
                    className={clsx(
                        "h-12 w-12 flex items-center justify-center text-sm font-medium transition-all duration-200 border border-transparent",
                        isSelected
                            ? "bg-white text-primary border-white"
                            : "hover:border-white hover:bg-white/10 text-white",
                        isToday && !isSelected && "border-white/40 font-bold"
                    )}
                >
                    {i}
                </button>
            );
        }
        return days;
    };

    return (
        <div className="p-6 bg-primary/10 border border-white/20 max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
                <button
                    onClick={handlePrevMonth}
                    className="p-2 hover:bg-accent/10 transition-colors duration-200"
                    aria-label="Previous month"
                >
                    <ChevronLeft size={20} className="text-white" />
                </button>
                <span className="font-display font-bold text-lg uppercase tracking-wider text-white">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button
                    onClick={handleNextMonth}
                    className="p-2 hover:bg-accent/10 transition-colors duration-200"
                    aria-label="Next month"
                >
                    <ChevronRight size={20} className="text-white" />
                </button>
            </div>

            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-3 text-center">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <div key={d} className="h-10 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-white/60">
                        {d}
                    </div>
                ))}
            </div>

            {/* Calendar grid with thin lines */}
            <div className="grid grid-cols-7 gap-1 place-items-center">
                {renderDays()}
            </div>
        </div>
    );
}
