import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Recruitment",
 description:
  "Join Commit the Change at UC Irvine! Apply to be part of our team of developers and designers creating technology for social good. Check if applications are currently open.",
 keywords: [
  "Commit the Change recruitment",
  "CTC applications",
  "join CTC",
  "UC Irvine student organizations",
  "apply to Commit the Change",
  "software development team",
 ],
 openGraph: {
  title: "Recruitment | Commit the Change",
  description:
   "Join Commit the Change at UC Irvine! Apply to be part of our team of developers and designers creating technology for social good.",
  url: "/Recruitment",
 },
 twitter: {
  title: "Recruitment | Commit the Change",
  description:
   "Join Commit the Change at UC Irvine! Apply to be part of our team.",
 },
};

export default function RecruitmentLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

