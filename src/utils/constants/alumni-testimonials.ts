export enum EasterEggType {
 HIGHLIGHT_NAME = "highlight_name",
}

export interface Testimonial {
 name: string;
 role: string[];
 company: string;
 testimonial: string;
 image: string;
 linkedin?: string;
 year?: string[];
 easterEgg?: EasterEggType;
 easterEggText?: string;
 graduationYear?: string;
}

export const ALUMNI_TESTIMONIALS: Testimonial[] = [
 {
  name: "Gayathri Yedavalli",
  role: ["IVP '25", "Developer '24", "Designer '23, '24"],
  company: "",
  linkedin: "https://www.linkedin.com/in/gayathri-yedavalli/",
  year: ["2023", "2024", "2025"],
  graduationYear: "2026",
  easterEgg: undefined,
  easterEggText: "Gayathri Yedavalli",
  testimonial:
   "Being part of CTC every year since my first year at UCI has been one of the most rewarding parts of my college experience. Each year, I’ve learned something new, whether it’s technical skills, soft skills, or leadership. I’ve also had the opportunity to work with amazing and passionate people who truly care about making an impact and make lifelong friends!",
  image: "/alumni/gayathri-yedavilli.jpeg",
 },
 {
  name: "Zion Mateo",
  role: ["Developer '24, '25", "DJ '25"],
  company: "",
  linkedin: "https://www.linkedin.com/in/zionmateo/",
  year: ["2024", "2025"],
  graduationYear: "2025",
  easterEgg: EasterEggType.HIGHLIGHT_NAME,
  easterEggText: "DJ Noiz",
  testimonial:
   "As a developer for two years at Commit the Change, I think this club encapsulates the spirit of empowering communities through technology. The fun people I’ve met through the projects has made this club such an irreplaceable college experience for me.",
  image: "/alumni/zion-mateo.jpg",
 },
];
