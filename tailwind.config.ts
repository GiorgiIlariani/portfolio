/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: { max: "500px"},
        // => @media (max-width: 390px) { ... }

        sm: { max: "640px"},
        // => @media (max-width: 640px) { ... }

        md: { max: "768px"},
        // => @media (max-width: 768px) { ... }

        md2: { max: "900px"},
        // => @media (max-width: 10000px) { ... }

        lg: { max: "1080px" },
        // => @media (max-width: 1024px) { ... }

        xl: { max: "1200px" } ,
        // => @media (max-width: 1280px) { ... }
     },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}