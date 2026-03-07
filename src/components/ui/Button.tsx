import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "pill";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest";

        const variants = {
            // White border, white text → White fill with blue text on hover
            primary: "bg-white text-primary hover:bg-primary hover:text-white rounded-none border-2 border-white transition-all duration-300",
            // Transparent with white border → White fill on hover
            secondary: "bg-transparent text-white hover:bg-white hover:text-primary rounded-none border-2 border-white transition-all duration-300",
            // Transparent with border → White fill on hover
            outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary rounded-none transition-all duration-300",
            // Pill-shaped for navigation - white border, fills white on hover
            pill: "bg-transparent text-white hover:bg-white hover:text-primary rounded-full border border-white px-5 py-2.5 transition-all duration-300",
            // Ghost variant
            ghost: "hover:bg-white/10 text-white rounded-none transition-all duration-300",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-7 py-2.5 text-sm",
            lg: "h-14 px-10 text-base",
        };

        return (
            <button
                ref={ref}
                className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
