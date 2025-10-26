import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import "./globals.css";
import EmotionRegistry from "@/app/registry";

const inter = Inter({
 variable: "--font-inter",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Commit the Change",
 description:
  "Commit the Change is a community of software engineers and designers who are passionate about building software that helps people live better lives.",
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
