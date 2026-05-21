/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // ── Backgrounds ───────────────────────────────
        primary:          "#050816",
        surface:          "#0D1117",
        "surface-raised": "#131A2B",
        border:           "#1E2D3D",

        // ── Text ─────────────────────────────────────
        "text-primary":   "#F1F5F9",
        "text-secondary": "#CBD5E1",
        "text-muted":     "#94A3B8",

        // ── Accent — Electric Violet ──────────────────
        accent:       "#818CF8",
        "accent-dim": "#4F46E5",

        // ── Data / Status ─────────────────────────────
        positive: "#22C55E",
        negative: "#F87171",

        // ── Legacy aliases (kept so any remaining refs don't break) ──
        secondary:  "#CBD5E1",
        tertiary:   "#818CF8",
        "black-100": "#0D1117",
        "black-200": "#050816",
        "white-100": "#F1F5F9",
      },

      fontFamily: {
        display: ["Satoshi", "Space Grotesk", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        sans:    ["Montserrat", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        display:    ["clamp(2.5rem, 5vw, 4.5rem)",  { lineHeight: "1.1",  fontWeight: "700" }],
        h1:         ["clamp(2rem,   4vw, 3.5rem)",   { lineHeight: "1.15", fontWeight: "700" }],
        h2:         ["clamp(1.5rem, 2.5vw, 2rem)",   { lineHeight: "1.2",  fontWeight: "600" }],
        "body-lg":  ["1.125rem",                     { lineHeight: "1.75" }],
        label:      ["0.875rem",                     { lineHeight: "1.5"  }],
        metric:     ["clamp(1.5rem, 3vw, 2.5rem)",   { lineHeight: "1",    fontWeight: "700" }],
      },

      spacing: {
        section:    "7rem",    // 112px — gap between page sections
        subsection: "3.5rem",  // 56px  — gap within a section
        "card-gap": "1.5rem",  // 24px  — gap between cards
        "card-pad": "2rem",    // 32px  — padding inside a card
      },

      boxShadow: {
        card:          "0px 4px 32px -4px rgba(129, 140, 248, 0.08)",
        "card-hover":  "0px 8px 40px -4px rgba(129, 140, 248, 0.20)",
        "accent-glow": "0 0 24px rgba(129, 140, 248, 0.30)",
      },

      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
