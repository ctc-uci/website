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
  "CTC UCI — Commit the Change is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
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
  "Commit the Change UCI",
  "tech for good UCI",
 ],
 authors: [{ name: "Commit the Change" }],
 creator: "Commit the Change",
 publisher: "Commit the Change",
 metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://ctc-uci.com"
 ),
 alternates: {
  canonical: "https://ctc-uci.com",
 },
 openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://ctc-uci.com",
  siteName: "Commit the Change",
  title: "Commit the Change | UC Irvine Tech for Social Good",
  description:
   "CTC UCI — Commit the Change is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
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
   "CTC UCI — Commit the Change is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
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

const jsonLd = {
 "@context": "https://schema.org",
 "@type": "Organization",
 name: "Commit the Change",
 alternateName: ["CTC", "CTC UCI", "Commit the Change UCI"],
 url: "https://ctc-uci.com",
 logo: "https://ctc-uci.com/favicon.ico",
 description:
  "Commit the Change (CTC) is a UC Irvine student organization of software engineers and designers building technology for nonprofits and social good.",
 email: "ctc@uci.edu",
 foundingLocation: {
  "@type": "Place",
  name: "University of California, Irvine",
  address: {
   "@type": "PostalAddress",
   addressLocality: "Irvine",
   addressRegion: "CA",
   addressCountry: "US",
  },
 },
 sameAs: [
  "https://www.linkedin.com/company/commit-the-change-uci/",
  "https://www.facebook.com/ctc.uci/",
  "https://www.instagram.com/ctc.uci/",
  "https://medium.com/@committhechange.uci",
 ],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <head>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
   </head>
   <body className={inter.variable}>
    <EmotionRegistry>
     <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </EmotionRegistry>
   </body>
  </html>
 );
}
