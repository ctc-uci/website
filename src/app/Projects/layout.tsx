import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Our Projects",
 description:
  "Explore the projects created by Commit the Change. Since 2020, we've partnered with nonprofits to create quality software and positively impact communities.",
 keywords: [
  "Commit the Change projects",
  "CTC portfolio",
  "nonprofit projects",
  "social good software",
  "UC Irvine projects",
  "web development projects",
 ],
 openGraph: {
  title: "Our Projects | Commit the Change",
  description:
   "Explore the projects created by Commit the Change. Since 2020, we've partnered with nonprofits to create quality software.",
  url: "/Projects",
 },
 twitter: {
  title: "Our Projects | Commit the Change",
  description:
   "Explore the projects created by Commit the Change since 2020.",
 },
};

export default function ProjectsLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

