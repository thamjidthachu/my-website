/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Inter", "Lato", "sans-serif"],
        Text2: ["Inter", "Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #ffffff 0%, #f5f5f7 25%, #fafafa 50%, #f5f5f7 75%, #ffffff 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
      },
      colors: {
        AAprimary: "#ffffff",          // Pure white background (Samsung/Apple style)
        AAsecondary: "#000000",        // Pure black accent
        AAAccent: "#1d1d1f",          // Dark gray (Apple's dark text)
        AAError: "#86868b",           // Mid gray for errors
        AAtertiary: "#f5f5f7",        // Light gray surface (Apple's light surface)
        AASurface: "#fafafa",         // Off-white for cards
        AATextPrimary: "#1d1d1f",     // Dark text (Apple style)
        AATextSecondary: "#000000",   // Pure black text
        AATextMuted: "#86868b",       // Gray muted text (Apple's gray)
        ResumeButtonHover: "#1d1d1f", // Dark hover
        MobileNavBarColor: "#ffffff", // White navbar
        StartupBackground: "#ffffff", // White startup
        DotPattern: "#f5f5f7",        // Light gray dots
        TextureOverlay: "#fafafa",    // Subtle light overlay
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
