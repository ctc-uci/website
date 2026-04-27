import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Demo Day",
 description:
  "Commit the Change Demo Day — see the products our teams build for nonprofits and social good organizations at UC Irvine.",
 keywords: [
  "Commit the Change Demo Day",
  "CTC demo day",
  "UC Irvine nonprofit tech",
  "student software showcase",
 ],
 openGraph: {
  title: "Demo Day | Commit the Change",
  description:
   "See the products our teams build for nonprofits and social good organizations.",
  url: "/demoday",
 },
 twitter: {
  title: "Demo Day | Commit the Change",
  description:
   "See the products our teams build for nonprofits and social good organizations.",
 },
};

export default function DemoDayLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}
