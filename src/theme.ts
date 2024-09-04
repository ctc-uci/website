import { extendTheme, ThemeOverride } from "@chakra-ui/react";

export const theme = extendTheme({
  // https://tailwindcss.com/docs/screens
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  colors: {
    ctc: {
      purple: "#5457AF",
      lilac: "#E2DBF2",
      gray: "#F4F4F4",
      grey: "#F4F4F4",
      text: "#1B1B1B",
      subtitle: "#4D4D4D",
    },
  },
  styles: {
    global: {
      body: {
        textColor: "#1B1B1B",
        backgroundColor: "#F4F4F4",
      },
    },
  },
}) satisfies ThemeOverride;
