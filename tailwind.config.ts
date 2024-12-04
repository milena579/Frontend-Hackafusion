import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        fontGrey: "var(--fontGrey)",
        fontText: "var(--fontText)",
        fontTitle: "var(--fontTitle)",
        buttonActivated: "var(--buttonActivated)",
        buttonActivatedHover: "var(--buttonActivatedHover)",
        buttonDesabled: "var(--buttonDesabled)",
        backgroundCard: "var(--backgroundCard)",
        blueLight: "var(--blueLight)",
        blueMiddle: "var(--blueMiddle)",
        fontButton: "var(--fontButton)",
        card: "var(--card)",
      },
    },
  },
  plugins: [],
} satisfies Config;
