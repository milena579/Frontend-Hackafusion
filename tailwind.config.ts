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
        purpleCard: "var(--purpleCard)",
        pinkCard: "var(--pinkCard)",
        greenCard: "var(--greenCard)",
        greyOpacity: "var(--greyOpacity)",
<<<<<<< HEAD
        bgChatBlue: "var(--bgChatBlue)",
=======
        buttonRed: "var(--buttonRed)",
        buttonRedHover: "var(--buttonRedHover)",

>>>>>>> eb0e292fb12b534e9830c48ea875591b318d98d3
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
        purpleCardDark: "var(--purpleCardDark)",
        pinkCardDark: "var(--pinkCardDark)",
        greenCardDark: "var(--greenCardDark)",
        greyOpacityDark: "var(--greyOpacityDark)",
<<<<<<< HEAD
        bgChatBlueDark: "var(--bgChatBlueDark)",
=======
        buttonRedDark: "var(--buttonRedDark)",

>>>>>>> eb0e292fb12b534e9830c48ea875591b318d98d3

      },
    },
  },
  plugins: [],
} satisfies Config;
