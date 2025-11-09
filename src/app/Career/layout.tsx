import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Why CTC?",
 description:
  "Discover why students choose Commit the Change at UC Irvine. Learn about career opportunities, alumni success stories, testimonials, and the impact of working on technology for social good.",
 keywords: [
  "Commit the Change career",
  "CTC opportunities",
  "UC Irvine student organizations",
  "software development experience",
  "nonprofit tech experience",
  "career development",
 ],
 openGraph: {
  title: "Why CTC? | Commit the Change",
  description:
   "Discover why students choose Commit the Change at UC Irvine. Learn about career opportunities and alumni success stories.",
  url: "/Career",
 },
 twitter: {
  title: "Why CTC? | Commit the Change",
  description:
   "Discover why students choose Commit the Change and the impact of working on technology for social good.",
 },
};

export default function CareerLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

