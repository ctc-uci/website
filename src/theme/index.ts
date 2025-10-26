"use client";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
 fonts: {
  heading: "var(--font-inter), sans-serif",
  body: "var(--font-inter), sans-serif",
 },
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
  purple: {
   50: "#faf5ff",
   100: "#f3ebff",
   200: "#e9d5ff",
   300: "#d8b4fe",
   400: "#c084fc",
   500: "#a855f7",
   600: "#9333ea",
   700: "#641ba3",
   800: "#4a1772",
   900: "#210553",
   950: "#1a032e",
  },
  ctc: {
   purple: "#6331D8",
  },
 },
 components: {
  Button: {
   variants: {
    purple: {
     bg: "purple.500",
     color: "white",
     _hover: {
      bg: "purple.600",
     },
     _active: {
      bg: "purple.700",
     },
    },
    "purple.outline": {
     borderColor: "purple.500",
     color: "purple.500",
     _hover: {
      bg: "purple.50",
     },
     _active: {
      bg: "purple.100",
     },
    },
   },
  },
 },
 styles: {
  global: {
   body: {
    textColor: "gray.800",
    backgroundColor: "white",
   },
   // Custom scrollbar styling
   "::-webkit-scrollbar": {
    width: "8px",
   },
   "::-webkit-scrollbar-track": {
    background: "#faf5ff", // purple.50
    borderRadius: "4px",
   },
   "::-webkit-scrollbar-thumb": {
    background: "linear-gradient(to bottom,rgb(212, 175, 249), #9333ea)", // purple.400 to purple.600
    borderRadius: "4px",
    border: "1px solid #f3ebff", // purple.100
   },
   "::-webkit-scrollbar-thumb:hover": {
    background: "linear-gradient(to bottom, #a855f7, #7c3aed)", // purple.500 to purple.700
   },
   // Firefox scrollbar styling
   html: {
    scrollbarWidth: "thin",
    scrollbarColor: "#c084fc #faf5ff", // purple.400 purple.50
   },
  },
 },
});
