import { extendTheme, ThemeOverride } from "@chakra-ui/react";

export const theme = extendTheme({
  // https://tailwindcss.com/docs/screens
  breakpoints: {
    xs: "475px",
    xssm: "555px",
    sm: "640px",
    md: "768px",
    mdlg: "896px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    ctc: {
      purple: "#6331D8",
      lilac: "#E2DBF2",
      gray: "#F4F4F4",
      grey: "#F4F4F4",
      white: "#FFFFFF",
      offWhite: "#F9F9F9",
      text: "#1B1B1B",
      subtitle: "#4D4D4D",
      secondary: "#DADADA",
    },
  },
  components: {
    Button: {
      variants: {
        ctc: {
          bg: "ctc.purple",
          color: "ctc.gray",
          _hover: {
            bg: "ctc.purple",
            opacity: 0.9,
          },
          _active: {
            bg: "ctc.purple",
            opacity: 0.8,
          },
        },
        "ctc.secondary": {
          backgroundColor: "ctc.secondary",
          _hover: {
            bg: "ctc.secondary",
            opacity: 0.9,
          },
          _active: {
            bg: "ctc.secondary",
            opacity: 0.8,
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        textColor: "ctc.text",
        backgroundColor: "ctc.gray",
      },
    },
  },
}) satisfies ThemeOverride;
