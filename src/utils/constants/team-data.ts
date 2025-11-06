export interface Profile {
 name: string;
 role: "Tech Lead" | "Design Lead" | "Developer" | "Designer" | (string & {}); // https://x.com/mattpocockuk/status/1821926395380986219 <- goat
 linkedin?: string;
 image: string;
}

export const BOARD_DATA: Profile[] = [
 {
  name: "Nathan Pietrantonio",
  role: "President",
  linkedin: "https://www.linkedin.com/in/nathanlp/",
  image: "/team/nathan-pietrantonio.png",
 },
 {
  name: "Ryan Su",
  role: "Internal Vice President",
  linkedin: "https://www.linkedin.com/in/ryan-m-su/",
  image: "/team/ryan-su.jpeg",
 },
 {
  name: "Jolene Chou",
  role: "External Vice President",
  linkedin: "https://www.linkedin.com/in/jolene-chou-225127241/",
  image: "/team/jolene-chou.jpg",
 },
 {
  name: "Brendan Lieu",
  role: "Technical Director",
  linkedin: "https://www.linkedin.com/in/blieu/",
  image: "/team/brendan-lieu.png",
 },
 {
  name: "Alex Espejo",
  role: "Technical Director",
  linkedin: "https://www.linkedin.com/in/alex-espejo-4a604920a/",
  image: "/team/alex-espejo.jpeg",
 },
 {
  name: "Claire Phan",
  role: "Design Director",
  linkedin: "https://www.linkedin.com/in/claire-phan427/",
  image: "/team/claire-phan.jpg",
 },
 {
  name: "Angelina Wang",
  role: "Marketing Director",
  linkedin: "https://www.linkedin.com/in/angelina-wangg/",
  image: "/team/angelina-wang.jpeg",
 },
 {
  name: "Arnav Kanekar",
  role: "Treasurer",
  linkedin: "https://www.linkedin.com/in/arnav-kanekar-a108b2279/",
  image: "/team/arnav-kanekar.jpg",
 },
 {
  name: "Mehek Bhatnagar",
  role: "Recruitment Director",
  linkedin: "https://www.linkedin.com/in/mehek-bhatnagar-b81504245/",
  image: "/team/mehek-bhatnagar.jpg",
 },
 {
  name: "Margaret Galvez",
  role: "Recruitment Director",
  linkedin: "https://www.linkedin.com/in/margaretgalvez/",
  image: "/team/margaret-galvez.png",
 },
 {
  name: "Noah Tizon",
  role: "Outreach Director",
  linkedin: "https://www.linkedin.com/in/noah-tizon/",
  image: "/team/noah-tizon.jpg",
 },
 {
  name: "Lindsay Lim",
  role: "Outreach Director",
  linkedin: "https://www.linkedin.com/in/lindsay-lim-4b29332a2/",
  image: "/team/lindsay-lim.jpeg",
 },
 {
  name: "Jerry Nguyen",
  role: "Education Director",
  linkedin: "https://www.linkedin.com/in/duyjerry/",
  image: "/team/jerry-nguyen.jpg",
 },
 {
  name: "Colin Kwon",
  role: "Education Director",
  linkedin: "https://www.linkedin.com/in/colin-kwon-22a190324/",
  image: "/team/colin-kwon.jpg",
 },
 {
  name: "Bowen Wang",
  role: "Community Development",
  linkedin: "https://www.linkedin.com/in/bowenwang0815/",
  image: "/team/bowen-wang.jpg",
 },
];

export const CLCHC_DATA: Profile[] = [
 {
  name: "Tiffany Jiang Yan",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/tiffanyjiangyan/",
  image: "/team/tiffany-jiang-yan.jpeg",
 },
 {
  name: "Elliott Escalante",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/elliott-escalante-97510324a/",
  image: "/team/elliott-escalante.png",
 },
 {
  name: "Nathan Nguyen",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/nathnguyen7631/",
  image: "/team/nathan-nguyen.jpg",
 },
 {
  name: "Evie Ngo",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Jacobi Glenn",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Jerry Nguyen",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Katrina Wang",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 // Developers (alphabetical)
 {
  name: "Allison Huang",
  role: "Developer",
  linkedin: "",
  image: "/team/allison-huang.jpg",
 },
 {
  name: "Anthony Suh",
  role: "Developer",
  linkedin: "",
  image: "/team/anthony-suh.jpg",
 },
 {
  name: "Bowen Wang",
  role: "Developer",
  linkedin: "",
  image: "/team/bowen-wang.jpg",
 },
 {
  name: "Grace Yan",
  role: "Developer",
  linkedin: "",
  image: "/team/grace-yan.jpg",
 },
 {
  name: "Ira Dharia",
  role: "Developer",
  linkedin: "",
  image: "/team/ira-dharia.jpg",
 },
 {
  name: "Jacob Horne",
  role: "Developer",
  linkedin: "",
  image: "/team/jacob-horne.jpg",
 },
 {
  name: "Jennifer Yan",
  role: "Developer",
  linkedin: "",
  image: "/team/jennifer-yan.png",
 },
 {
  name: "Lindsay Lim",
  role: "Developer",
  linkedin: "",
  image: "/team/lindsay-lim.jpeg",
 },
 {
  name: "Meredith Lo",
  role: "Developer",
  linkedin: "",
  image: "/team/meredith-lo.png",
 },
 {
  name: "Nathan Ong",
  role: "Developer",
  linkedin: "",
  image: "/team/nathan-ong.png",
 },
 {
  name: "Rajat Kaliani",
  role: "Developer",
  linkedin: "",
  image: "/team/rajat-kaliani.jpeg",
 },
 {
  name: "Shyel Singh",
  role: "Developer",
  linkedin: "",
  image: "/team/shyel-singh.jpeg",
 },
];

export const GCF_DATA: Profile[] = [
 {
  name: "Leilani Bascos",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/leilani-bascos-026554305/",
  image: "/team/leilani-bascos.jpg",
 },
 {
  name: "Alex Yin",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/alexander-yin",
  image: "/team/alex-yin.png",
 },
 {
  name: "Isaac Nguyen",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/isaacnguyen33/",
  image: "/team/isaac-nguyen.jpeg",
 },
 // Designers (alphabetical)
 {
  name: "Angela Wang",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Arnav Kanekar",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Dominic Moy",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Kailee Kaocharoen",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Midori Dragics",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 // Developers (alphabetical)
 {
  name: "Aditi Varia",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Ananth Kini",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Angelina Wang",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Daiki Narimoto",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Derrick Thrower",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Gina Do",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Harrison Tran",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Lawrence Zhou",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Pradosh Thirunavukkarasu",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Shayan Halder",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Showmen Talukder",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Sophie Choi",
  role: "Developer",
  linkedin: "",
  image: "",
 },
];

export const ELDR_DATA: Profile[] = [
 {
  name: "Vy Vu",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/quynhvyvu/",
  image: "/team/vy-vu.jpg",
 },
 {
  name: "Dommenick Lacuata",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/dommenick-lacuata/",
  image: "/team/dommenick-lacuata.jpeg",
 },
 {
  name: "Joshua Sullivan",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/joshua-micah-sullivan",
  image: "/team/joshua-sullivan.JPG",
 },
 // Designers (alphabetical)
 {
  name: "Ali Zadi",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Courney Ngo",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Julianna Nacorda",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Kylie Nguyen",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 {
  name: "Sahana Chockali",
  role: "Designer",
  linkedin: "",
  image: "",
 },
 // Developers (alphabetical)
 {
  name: "Adarsh Venkateswaran",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Avinav Shrestha",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Carson Davis",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Darren Zhao",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Jay Chan",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Justin Tran",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Leonardo Siu",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Mehek Bhatnagar",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Nandita Paranjape",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Rafael Firme",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Sindhuja Gorti",
  role: "Developer",
  linkedin: "",
  image: "",
 },
 {
  name: "Yousef Khan",
  role: "Developer",
  linkedin: "",
  image: "",
 },
];
