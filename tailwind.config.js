/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      // ✅ RESPONSIVE BREAKPOINTS (cleaned + consistent)
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // ✅ FONTS
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },

      // ✅ COLORS (modern dark theme)
      colors: {
        bodyColor: "#020617", // deep dark
        cardColor: "#0f172a", // card background
        textColor: "rgba(255,255,255,0.85)",
        mutedText: "#94a3b8",
        designColor: "#22c55e", // green accent (modern)
        accentBlue: "#3b82f6",
        accentPurple: "#a855f7",
      },

      // ✅ ANIMATIONS
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "reverse-spin": "reverse-spin 25s linear infinite",
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        "reverse-spin": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      // ✅ SHADOWS (glow effects 🔥)
      boxShadow: {
        greenGlow: "0 0 60px rgba(34,197,94,0.6)",
        blueGlow: "0 0 60px rgba(59,130,246,0.5)",
        purpleGlow: "0 0 60px rgba(168,85,247,0.5)",
        cardShadow: "0 10px 30px rgba(0,0,0,0.5)",
      },

      // ✅ BORDER RADIUS (modern UI)
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

    },
  },
  plugins: [require("tailwind-scrollbar")],
};