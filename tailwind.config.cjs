/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Headings: a soft, slightly playful serif
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        // Reading text
        serif: ['"Newsreader"', "ui-serif", "Georgia", "serif"],
        // Labels, navigation, captions, subtitles
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
        sub: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        page: "var(--bg)",
        title: "var(--title)",
        prose: "var(--text)",
        intro: "var(--intro)",
        item: "var(--item)",
        sub: "var(--sub)",
        faint: "var(--faint)",
        caption: "var(--caption)",
        link: "var(--link)",
        line: "var(--line)",
        well: "var(--well)",
        card: "var(--card)",
        navbg: "var(--nav-bg)",
        navitem: "var(--nav-item)",
        navhover: "var(--nav-item-hover)",
        accent: "var(--accent)",
        accentink: "var(--accent-ink)",
      },
      maxWidth: { col: "624px" },
      borderRadius: { squircle: "16px" },
    },
  },
  plugins: [],
};
