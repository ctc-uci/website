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
  {
    name: "Aditya Vemuri",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/aditya-vemuri-571838214",
    image: "/people/aditya-vemuri.jpg",
  },
  {
    name: "Alex Yin",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/alexander-yin",
    image: "/people/alex-yin.jpg",
  },
  {
    name: "Arnav Kanekar",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/arnav-kanekar-a108b2279/",
    image: "/people/arnav-kanekar.jpg",
  },
  {
    name: "Colin Kwon",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/colin-kwon-22a190324",
    image: "/people/colin-kwon.jpg",
  },
  {
    name: "Dommenick Lacuata",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/dommenick-lacuata/",
    image: "/people/dommenick-lacuata.jpg",
  },
  {
    name: "Isaac Nguyen",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/isaacnguyen33/",
    image: "/people/isaac-nguyen.jpg",
  },
  {
    name: "Jerry Nguyen",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/duyjerry",
    image: "/people/jerry-nguyen.jpg",
  },
  {
    name: "Jolene Chou",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/jolene-chou-225127241/",
    image: "/people/jolene-chou.jpg",
  },
  {
    name: "Leilani Bascos",
    role: "Designer",
    linkedin: "https://www.linkedin.com/in/leilani-bascos-026554305/",
    image: "/people/leilani-bascos.jpg",
  },
  {
    name: "Lindsay Lim",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/lindsay-lim-4b29332a2",
    image: "/people/lindsay-lim.jpg",
  },
  {
    name: "Maithy Le",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/maithy-le",
    image: "/people/maithy-le.jpg",
  },
  {
    name: "Matthew Chang",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/matthew-chang-39754a216",
    image: "/people/matthew-chang.jpg",
  },
  {
    name: "Mehek Bhatnagar",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/mehek-bhatnagar-b81504245/",
    image: "/people/mehek-bhatnagar.jpg",
  },
  {
    name: "Nathan Che",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/nathan-che1/",
    image: "/people/nathan-che.jpg",
  },
  {
    name: "Nathan Nguyen",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/nathnguyen7631/",
    image: "/people/nathan-nguyen.jpg",
  },
  {
    name: "Showmen Talukder",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/showmen-talukder-91b58820b/",
    image: "/people/showmen-talukder.jpg",
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
