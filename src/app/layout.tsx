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
 title: {
  default: "Commit the Change | UC Irvine Tech for Social Good",
  template: "%s | Commit the Change",
 },
 description:
  "Commit the Change (CTC) is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
 keywords: [
  "Commit the Change",
  "CTC",
  "CTC UCI",
  "ctc-uci",
  "UC Irvine",
  "UCI student organization",
  "social good",
  "nonprofit technology",
  "software development",
  "web development",
  "design",
  "UCI",
 ],
 authors: [{ name: "Commit the Change" }],
 creator: "Commit the Change",
 publisher: "Commit the Change",
 metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://ctc-uci.com"
 ),
 openGraph: {
  type: "website",
  locale: "en_US",
  url: "/",
  siteName: "Commit the Change",
  title: "Commit the Change | UC Irvine Tech for Social Good",
  description:
   "Commit the Change (CTC) is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
  images: [
   {
    url: "/favicon.ico",
    width: 1200,
    height: 630,
    alt: "Commit the Change",
   },
  ],
 },
 twitter: {
  card: "summary_large_image",
  title: "Commit the Change | UC Irvine Tech for Social Good",
  description:
   "Commit the Change (CTC) is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
  images: ["/favicon.ico"],
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
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
