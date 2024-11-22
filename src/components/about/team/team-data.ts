export interface Profile {
  name: string;
  role: "Tech Lead" | "Design Lead" | "Developer" | "Designer" | (string & {}); // https://x.com/mattpocockuk/status/1821926395380986219 <- goat
  linkedin?: string;
  image: string;
}

export const BOARD_DATA: Profile[] = [
  {
    name: "Kaylee Doliente",
    role: "President",
    linkedin: "https://www.linkedin.com/in/kayleedoliente/",
    image: "/people/kaylee-doliente.jpg",
  },
  {
    name: "Gayathri Yedavilli",
    role: "Internal Vice President",
    linkedin: "https://www.linkedin.com/in/gayathri-yedavilli/",
    image: "/people/gayathri-yedavilli.jpg",
  },
  {
    name: "Emmy Chen",
    role: "External Vice President",
    linkedin: "https://www.linkedin.com/in/emmy-y-chen/",
    image: "/people/emmy-chen.jpg",
  },
  {
    name: "Ostend Suryajaya",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/ostend-suryajaya/",
    image: "/people/ostend-suryajaya.jpg",
  },
  {
    name: "Kevin Wu",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/kevinwu098/",
    image: "/people/kevin-wu.jpg",
  },
  {
    name: "Elise Alinsug",
    role: "Design Director",
    linkedin: "https://www.linkedin.com/in/elise-alinsug/",
    image: "/people/elise-alinsug.jpg",
  },
  {
    name: "Kaitlyn Tran",
    role: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/kaitlyn-tran-888832272/",
    image: "/people/kaitlyn-tran.jpg",
  },
  {
    name: "Priska Kunaidy",
    role: "Treasurer",
    linkedin: "https://www.linkedin.com/in/priskakunaidy/",
    image: "/people/priska-kunaidy.jpg",
  },
  {
    name: "Kaitlin Leung",
    role: "Recruitment Director",
    linkedin: "https://www.linkedin.com/in/kaitlin-leung-467a35209/",
    image: "/people/kaitlin-leung.jpg",
  },
  {
    name: "Alyssia Tan",
    role: "Outreach Director",
    linkedin: "https://www.linkedin.com/in/alyssia-tan/",
    image: "/people/alyssia-tan.jpg",
  },
  {
    name: "Vy Vu",
    role: "Outreach Director",
    linkedin: "https://www.linkedin.com/in/quynhvyvu/",
    image: "/people/vy-vu.jpg",
  },
  {
    name: "Kaila Long",
    role: "Education Director",
    linkedin: "https://www.linkedin.com/in/kaila-long-3952b7210/",
    image: "/people/kaila-long.jpg",
  },
  {
    name: "Kainoa Nishida",
    role: "Education Director",
    linkedin: "https://www.linkedin.com/in/kainoa-nishida/",
    image: "/people/kainoa-nishida.jpg",
  },
];

export const CCH_DATA: Profile[] = [
  {
    name: "Michelle Pak",
    role: "Design Lead",
    linkedin: "https://www.linkedin.com/in/michelle-pak-935106251/",
    image: "/people/michelle-pak.jpg",
  },
  {
    name: "Benson Manzano",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/benson-manzano/",
    image: "/people/benson-manzano.jpg",
  },
  {
    name: "Sean Kelman",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/sean-kelman-633057211/",
    image: "/people/sean-kelman.jpg",
  },
];

export const CSE_DATA: Profile[] = [
  {
    name: "Jasmine Wu",
    role: "Design Lead",
    linkedin: "https://www.linkedin.com/in/jaslavie/",
    image: "/people/jasmine-wu.jpg",
  },
  {
    name: "Ethan Ho",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/h0ethan04/",
    image: "/people/ethan-ho.jpg",
  },
  {
    name: "Steven Zhou",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/stevzhou/",
    image: "/people/steven-zhou.jpg",
  },
  {
    name: "Priyansh Shah",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/priyansh-shah-569b3b224/",
    image: "/people/priyansh-shah.jpg",
  },
];

export const LPA_DATA: Profile[] = [
  {
    name: "Jay Sotelo",
    role: "Design Lead",
    linkedin: "https://www.linkedin.com/in/jessica-sotelo/",
    image: "/people/jay-sotelo.jpg",
  },
  {
    name: "Jessie He",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/hejessie/",
    image: "/people/jessie-he.jpg",
  },
  {
    name: "Nathan Pietrantonio",
    role: "Tech Lead",
    linkedin: "https://www.linkedin.com/in/nathanlp/",
    image: "/people/nathan-pietrantonio.jpg",
  },
];
