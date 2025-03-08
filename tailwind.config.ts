
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // FAEI Color Palette
        "rich-black": "#000000",
        "charcoal-gray": "#323132",
        "stone-gray": "#737273",
        "ash-gray": "#A9A9A9",
        white: "#FFFFFF",
        "off-white": "#F7F7F7",
        "light-gray": "#f0f0f0",
        greige: "#E4DFD7",
        oat: "#DDD2BC",
        "light-greige": "#EFEDEB",
        champagne: "#D0BB9B",
        "cream-beige": "#D6C4B2",
        
        // Neumorphic specific colors
        "neuro-base": "#e6e7ee",
        "neuro-shadow-dark": "#c8cad3",
        "neuro-shadow-light": "#ffffff",
        "neuro-text": "#44476A",
        "neuro-text-muted": "#858796",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'neumorph': '6px 6px 12px var(--neuro-shadow-dark, #d9d9d9), -6px -6px 12px var(--neuro-shadow-light, #ffffff)',
        'neumorph-inset': 'inset 5px 5px 10px var(--neuro-shadow-dark, #d9d9d9), inset -5px -5px 10px var(--neuro-shadow-light, #ffffff)',
        'neumorph-sm': '3px 3px 6px var(--neuro-shadow-dark, #d9d9d9), -3px -3px 6px var(--neuro-shadow-light, #ffffff)',
        'neumorph-md': '5px 5px 10px var(--neuro-shadow-dark, #d9d9d9), -5px -5px 10px var(--neuro-shadow-light, #ffffff)',
        'neumorph-lg': '8px 8px 16px var(--neuro-shadow-dark, #d9d9d9), -8px -8px 16px var(--neuro-shadow-light, #ffffff)',
        'neumorph-xl': '12px 12px 24px var(--neuro-shadow-dark, #d9d9d9), -12px -12px 24px var(--neuro-shadow-light, #ffffff)',
        'neumorph-pressed': 'inset 2px 2px 5px var(--neuro-shadow-dark, #d9d9d9), inset -2px -2px 5px var(--neuro-shadow-light, #ffffff)',
        'dark-neumorph': '8px 8px 16px rgba(0, 0, 0, 0.25), -8px -8px 16px rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(20px)", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "parallax-slow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-5%)" },
        },
        "parallax-medium": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10%)" },
        },
        "parallax-fast": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-15%)" },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "wave-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "press-in": {
          "0%": { boxShadow: "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff" },
          "100%": { boxShadow: "inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff" },
        },
        "press-out": {
          "0%": { boxShadow: "inset 5px 5px 10px #d1d1d1, inset -5px -5px 10px #ffffff" },
          "100%": { boxShadow: "5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-out": "slide-out 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 6s ease-in-out infinite",
        "scale-pulse": "scale-pulse 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "wave-pulse": "wave-pulse 4s ease-in-out infinite",
        "press-in": "press-in 0.2s ease-out forwards",
        "press-out": "press-out 0.2s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
