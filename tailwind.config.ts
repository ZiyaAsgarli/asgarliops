import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#839FBA", // Muted Steel Blue - main background
                accent: "#FFFFFF", // White - text and elements
                background: "#839FBA",
                foreground: "#FFFFFF",
                border: "#FFFFFF",
                muted: "#6B8399", // Darker variant of primary
            },
            fontFamily: {
                sans: ["Inter", "Helvetica Neue", "system-ui", "sans-serif"],
                serif: ["Playfair Display", "Georgia", "serif"],
                display: ["Oswald", "Impact", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-in-out",
                "fade-in-up": "fadeInUp 0.8s ease-out",
                "slide-in": "slideIn 0.5s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideIn: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
