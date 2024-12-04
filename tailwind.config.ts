import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
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
        backgroundCardBlue: "var(--backgroundCard)",
        blueLight: "var(--blueLight)",
        blueMiddle: "var(--blueMiddle)",
        fontButton: "var(--fontButton)",
        card: "var(--card)",

        backgroundDark: "var(--backgroundDark)",
        fontGreyDark: "var(--fontGreyDark)",
        fontTextDark: "var(--fontTextDark)",
        fontTitleDark: "var(--fontTitleDark)",
        buttonActivatedDark: "var(--buttonActivatedDark)",
        buttonActivatedHoverDark: "var(--buttonActivatedHoverDark)",
        buttonDesabledDark: "var(--buttonDesabledDark)",
        backgroundCardBlueDark: "var(--backgroundCardDark)",
        blueLightDark: "var(--blueLightDark)",
        blueMiddleDark: "var(--blueMiddleDark)",
        fontButtonDark: "var(--fontButtonDark)",
        cardDark: "var(--cardDark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
