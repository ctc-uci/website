import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Meet the Team",
 description:
  "Meet the talented team members of Commit the Change at UC Irvine. Our board members, developers, and designers work together to create technology for social good.",
 keywords: [
  "Commit the Change team",
  "CTC team",
  "UC Irvine students",
  "software developers",
  "web designers",
  "nonprofit tech team",
 ],
 openGraph: {
  title: "Meet the Team | Commit the Change",
  description:
   "Meet the talented team members of Commit the Change at UC Irvine. Our board members, developers, and designers work together to create technology for social good.",
  url: "/Team",
 },
 twitter: {
  title: "Meet the Team | Commit the Change",
  description:
   "Meet the talented team members of Commit the Change at UC Irvine.",
 },
};

export default function TeamLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return <>{children}</>;
}

