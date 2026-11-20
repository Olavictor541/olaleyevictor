/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Reading text, names and titles
        serif: ['"Source Serif 4"', "ui-serif", "Georgia", "serif"],
        // Labels, navigation, captions
        sans: ['"Figtree"', "ui-sans-serif", "system-ui", "sans-serif"],
        // Subtitles under list items
        sub: ['"Source Sans 3"', "ui-sans-serif", "system-ui", "sans-serif"],
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
      },
      maxWidth: { col: "624px" },
      borderRadius: { squircle: "16px" },
    },
  },
  plugins: [],
};
