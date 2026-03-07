import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={twMerge(
                    clsx(
                        "flex h-11 w-full border-b border-white bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:border-white focus-visible:border-b-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
                        className
                    )
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
