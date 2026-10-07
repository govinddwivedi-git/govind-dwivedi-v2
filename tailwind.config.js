/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        paper: "#f4f2ec",
        "paper-strong": "#fbfaf7",
        ink: "#171815",
        "ink-soft": "#5f625c",
        night: "#171a17",
        "night-soft": "#232a24",
        "night-ink": "#f4f2ec",
        "ink-950": "#0c0a09",
        "ink-900": "#1c1917",
        "ink-800": "#292524",
        "ink-700": "#44403c",
        linen: "#f6f7f2",
        parchment: "#e2e8df",
        brass: "#c65a2e",
        signal: "#19766b",
        accent: "#c65a2e",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(12, 10, 9, 0.14)",
        line: "inset 0 0 0 1px rgba(12, 10, 9, 0.08)",
      },
    },
  },
  plugins: [],
};
