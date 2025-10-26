import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import EmotionRegistry from "@/app/registry";

import { theme } from "../theme";

import "./globals.css";

const inter = Inter({
 variable: "--font-inter",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Commit the Change",
 description:
  "Commit the Change is a community of software engineers and designers who are passionate about building software that helps people live better lives.",
 icons: {
  icon: "/assets/ctc.svg",
  shortcut: "/assets/ctc.svg",
  apple: "/assets/ctc.svg",
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={inter.variable}>
    <EmotionRegistry>
     <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </EmotionRegistry>
   </body>
  </html>
 );
}
