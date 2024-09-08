export type Profile = {
  name: string;
  role: string;
  linkedin?: string;
  image: string;
  team: "board" | "cch" | "ww" | "lp";
};

export const TeamData: Profile[] = [
  {
    name: "Kaylee Doliente",
    role: "President",
    linkedin: "https://www.linkedin.com/in/kayleedoliente/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Gayathri Yedavilli",
    role: "Internal Vice President",
    linkedin: "https://www.linkedin.com/in/gayathri-yedavilli/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Emmy Chen",
    role: "External Vice President",
    linkedin: "https://www.linkedin.com/in/emmy-y-chen/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Ostend Suryajaya",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/ostend-suryajaya/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Kevin Wu",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/kevinwu098/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Elise Alinsug",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/elise-alinsug/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
  {
    name: "Kaitlyn Tran",
    role: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/kaitlyn-tran-888832272/",
    image: "../../../../public/people/kaylee-doliente.png",
    team: "board",
  },
];
