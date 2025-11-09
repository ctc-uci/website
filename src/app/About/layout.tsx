import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "About Us",
 description:
  "Learn about Commit the Change, a collaborative development team at UC Irvine designing and developing technology for social good. Discover our mission, values, and history.",
 keywords: [
  "Commit the Change about",
  "CTC mission",
  "UC Irvine nonprofit",
  "social good technology",
  "nonprofit software",
  "technology for good",
 ],
 openGraph: {
  title: "About Us | Commit the Change",
  description:
   "Learn about Commit the Change, a collaborative development team at UC Irvine designing and developing technology for social good.",
  url: "/About",
 },
 twitter: {
  title: "About Us | Commit the Change",
  description:
   "Learn about Commit the Change and our mission to create technology for social good.",
 },
};

export default function AboutLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

