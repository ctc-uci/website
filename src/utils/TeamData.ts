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
  image: "/people/nathan-pietrantonio.png",
 },
 {
  name: "Ryan Su",
  role: "Internal Vice President",
  linkedin: "https://www.linkedin.com/in/ryan-m-su/",
  image: "/people/ryan-su.jpeg",
 },
 {
  name: "Jolene Chou",
  role: "External Vice President",
  linkedin: "https://www.linkedin.com/in/jolene-chou-225127241/",
  image: "/people/jolene-chou.jpg",
 },
 {
  name: "Brendan Lieu",
  role: "Technical Director",
  linkedin: "https://www.linkedin.com/in/blieu/",
  image: "/people/brendan-lieu.jpg",
 },
 {
  name: "Alex Espejo",
  role: "Technical Director",
  linkedin: "https://www.linkedin.com/in/alex-espejo-4a604920a/",
  image: "/people/alex-espejo.jpeg",
 },
 {
  name: "Claire Phan",
  role: "Design Director",
  linkedin: "https://www.linkedin.com/in/claire-phan427/",
  image: "/people/claire-phan.jpg",
 },
 {
  name: "Angelina Wang",
  role: "Marketing Director",
  linkedin: "https://www.linkedin.com/in/angelina-wangg/",
  image: "/people/angelina-wang.jpeg",
 },
 {
  name: "Arnav Kanekar",
  role: "Treasurer",
  linkedin: "https://www.linkedin.com/in/arnav-kanekar-a108b2279/",
  image: "/people/arnav-kanekar.jpg",
 },
 {
  name: "Mehek Bhatnagar",
  role: "Recruitment Director",
  linkedin: "https://www.linkedin.com/in/mehek-bhatnagar-b81504245/",
  image: "/people/mehek-bhatnagar.jpg",
 },
 {
  name: "Margaret Galvez",
  role: "Recruitment Director",
  linkedin: "https://www.linkedin.com/in/margaretgalvez/",
  image: "/people/margaret-galvez.png",
 },
 {
  name: "Noah Tizon",
  role: "Outreach Director",
  linkedin: "https://www.linkedin.com/in/noah-tizon/",
  image: "/people/noah-tizon.jpg",
 },
 {
  name: "Lindsay Lim",
  role: "Outreach Director",
  linkedin: "https://www.linkedin.com/in/lindsay-lim-4b29332a2/",
  image: "/people/lindsay-lim.jpeg",
 },
 {
  name: "Jerry Nguyen",
  role: "Education Director",
  linkedin: "https://www.linkedin.com/in/duyjerry/",
  image: "/people/jerry-nguyen.jpg",
 },
 {
  name: "Colin Kwon",
  role: "Education Director",
  linkedin: "https://www.linkedin.com/in/colin-kwon-22a190324/",
  image: "/people/colin-kwon.jpg",
 },
 {
  name: "Bowen Wang",
  role: "Community Development",
  linkedin: "https://www.linkedin.com/in/bowen-wang-41b623251/",
  image: "/people/bowen-wang.jpg",
 },
];

export const CLCHC_DATA: Profile[] = [
 {
  name: "Tiffany Jiang Yan",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/tiffanyjiangyan/",
  image: "/people/tiffany-jiang-yan.jpeg",
 },
 {
  name: "Elliott Escalante",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/elliott-escalante-97510324a/",
  image: "/people/elliott-escalante.png",
 },
 {
  name: "Nathan Nguyen",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/nathnguyen7631/",
  image: "/people/nathan-nguyen.jpg",
 },
];

export const GCF_DATA: Profile[] = [
 {
  name: "Leilani Bascos",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/lelanibasco/",
  image: "/people/leilani-bascos.jpg",
 },
 {
  name: "Alex Yin",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/alexander-yin",
  image: "/people/alex-yin.png",
 },
 {
  name: "Isaac Nguyen",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/isaacnguyen33/",
  image: "/people/isaac-nguyen.jpeg",
 },
];

export const ELDR_DATA: Profile[] = [
 {
  name: "Vy Vu",
  role: "Design Lead",
  linkedin: "https://www.linkedin.com/in/quynhvyvu/",
  image: "/people/vy-vu.jpg",
 },
 {
  name: "Dommenick Lacuata",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/dommenick-lacuata/",
  image: "/people/dommenick-lacuata.jpeg",
 },
 {
  name: "Joshua Sullivan",
  role: "Tech Lead",
  linkedin: "https://www.linkedin.com/in/joshua-micah-sullivan",
  image: "/people/joshua-sullivan.jpeg",
 },
];
