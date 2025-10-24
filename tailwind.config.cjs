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
        'hero-pattern': 'linear-gradient(135deg, #000000 0%, #1d1d1f 25%, #161617 50%, #1d1d1f 75%, #000000 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      colors: {
        AAprimary: "#000000",          // Pure black background (Apple/Samsung style)
        AAsecondary: "#ffffff",        // Pure white accent
        AAAccent: "#f5f5f7",          // Light gray (Apple's light gray)
        AAError: "#86868b",           // Mid gray for errors
        AAtertiary: "#1d1d1f",        // Dark gray surface (Apple's dark surface)
        AASurface: "#161617",         // Slightly lighter black for cards
        AATextPrimary: "#f5f5f7",     // Off-white text (Apple style)
        AATextSecondary: "#ffffff",   // Pure white text
        AATextMuted: "#86868b",       // Gray muted text (Apple's gray)
        ResumeButtonHover: "#ffffff", // White hover
        MobileNavBarColor: "#000000", // Black navbar
        StartupBackground: "#000000", // Black startup
        DotPattern: "#1d1d1f",        // Dark gray dots
        TextureOverlay: "#161617",    // Subtle dark overlay
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
