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
        'hero-pattern': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #252547 75%, #0f0f23 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      colors: {
        AAprimary: "#0f0f23",
        AAsecondary: "#ff6b6b",
        AAAccent: "#4ecdc4",
        AAError: "#ff6b6b",
        AAtertiary: "#1a1a2e",
        AASurface: "#16213e",
        AATextPrimary: "#e94560",
        AATextSecondary: "#f5f5f5",
        AATextMuted: "#a0a0a0",
        ResumeButtonHover: "#ff5252",
        MobileNavBarColor: "#1a1a2e",
        StartupBackground: "#0f0f23",
        DotPattern: "#333366",
        TextureOverlay: "#252547",
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
