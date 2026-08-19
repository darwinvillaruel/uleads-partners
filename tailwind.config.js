/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f3fbe7",
          100: "#e2f6cc",
          200: "#c5ed99",
          300: "#a3e066",
          400: "#87d63d",
          500: "#68d622",
          600: "#4faf18",
          700: "#3d8a17",
          800: "#316c19",
          900: "#2a5a1a",
          950: "#133208",
        },
        ink: {
          50: "#f7f7f8",
          100: "#eeeef1",
          200: "#d8d8de",
          300: "#b4b4bd",
          400: "#82828d",
          500: "#5a5a64",
          600: "#3e3e46",
          700: "#2a2a30",
          800: "#1a1a1e",
          900: "#0e0e11",
          950: "#06060a",
        },
      },
      borderRadius: {
        card: "1.25rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(14,14,17,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,17,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.3s ease forwards",
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
