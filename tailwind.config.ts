import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     screens: {
        xs: { max: "500px"},
        // => @media (max-width: 390px) { ... }

        sm: { max: "640px"},
        // => @media (max-width: 640px) { ... }

        md: { max: "768px"},
        // => @media (max-width: 768px) { ... }

        lg: { max: "1080px" },
        // => @media (max-width: 1024px) { ... }

        xl: { max: "1200px" } ,
        // => @media (max-width: 1280px) { ... }
     },
      // screens: {
      //   xs: "500px",
      //   // => @media (min-width: 390px) { ... }

      //   sm: "640px",
      //   // => @media (min-width: 640px) { ... }

      //   md: "768px",
      //   // => @media (min-width: 768px) { ... }

      //   lg: "1024px",
      //   // => @media (min-width: 1024px) { ... }

      //   xl: "1200px",
      //   // => @media (min-width: 1280px) { ... }
      // },
    },
  },
  plugins: [],
}
export default config
