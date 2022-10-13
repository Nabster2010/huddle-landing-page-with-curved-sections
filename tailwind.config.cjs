/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        Body: "Open Sans, sans-serif",
        Heading: "Poppins, sans-serif",
      },
      backgroundImage: {
        "footer-top-desktop": "url('/images/bg-footer-top-desktop.svg')",
        "footer-top-mobile": "url('/images/bg-footer-top-mobile.svg')",
        "section-top-desktop-1": "url('/images/bg-section-top-desktop-1.svg')",
        "section-top-mobile-1": "url('/images/bg-section-top-mobile-1.svg')",
        "section-top-desktop-2": "url('/images/bg-section-top-desktop-2.svg')",
        "section-top-mobile-2": "url('/images/bg-section-top-mobile-2.svg')",
        "section-bottom-desktop-1":
          "url('/images/bg-section-bottom-desktop-1.svg')",
        "section-bottom-mobile-1":
          "url('/images/bg-section-bottom-mobile-1.svg')",
        "section-bottom-desktop-2":
          "url('/images/bg-section-bottom-desktop-2.svg')",
        "section-bottom-mobile-2":
          "url('/images/bg-section-bottom-mobile-2.svg')",
      },
    },
  },

  plugins: [],
};
