import {
 Center,
 Hide,
 Link as ChakraLink,
 HStack,
 Icon,
 Image,
 Link,
 Text,
 VStack,
} from "@chakra-ui/react";
import {
 BsEnvelopeFill,
 BsFacebook,
 BsInstagram,
 BsLinkedin,
 BsMedium,
} from "react-icons/bs";

export function Footer() {
 return (
  <Center w="100%" bgColor="ctc.purple">
   <HStack
    sx={{
     paddingX: { base: 5, xl: 100 },
     paddingY: 16,
     backgroundColor: "ctc.purple",
     justifyContent: "space-between",
     alignItems: "center",
     width: "100%",
     color: "white",
    }}
   >
    <Hide below="md">
     <VStack spacing={6}>
      <Image src={"/assets/ctc-white.svg"} sx={{ height: 20 }} alt="ctc logo" />
      <Text sx={{ fontWeight: "semibold", fontSize: "xl", color: "white" }}>
       Tech with Purpose.
      </Text>
     </VStack>
    </Hide>

    <VStack
     sx={{
      fontWeight: "medium",
      alignItems: "start",
      justifyContent: "start",
      height: "100%",
     }}
    >
     <Text fontWeight={700}>CONTACT US</Text>
     <Text
      as="a"
      href="mailto:ctc@uci.edu"
      color="white"
      _hover={{ textDecoration: "underline" }}
     >
      ctc@uci.edu
     </Text>
    </VStack>

    <VStack
     columnGap={5}
     sx={{
      color: "white",
      fontWeight: "medium",
      display: { base: "none", md: "grid" },
     }}
    >
     {LINKS.map((link) => (
      <ChakraLink key={link.label} as={Link} href={link.href} color="white">
       {link.label}
      </ChakraLink>
     ))}
    </VStack>

    <VStack>
     {ICONS.map((icon) => (
      <ChakraLink key={icon.href} as={Link} href={icon.href}>
       <Icon as={icon.icon} sx={{ width: 5, height: 5, color: "white" }} />
      </ChakraLink>
     ))}
    </VStack>
   </HStack>
  </Center>
 );
}

const ICONS = [
 {
  icon: BsEnvelopeFill,
  href: "mailto:ctc@uci.edu",
 },
 {
  icon: BsLinkedin,
  href: "https://www.linkedin.com/company/commit-the-change-uci/",
 },
 {
  icon: BsFacebook,
  href: "https://www.facebook.com/ctc.uci/",
 },
 {
  icon: BsInstagram,
  href: "https://www.instagram.com/ctc.uci/",
 },
 {
  icon: BsMedium,
  href: "https://medium.com/@committhechange.uci",
 },
];

const LINKS = [
 {
  label: "Home",
  href: "/",
 },
 {
  label: "About",
  href: "/About",
 },
 {
  label: "Team",
  href: "/Team",
 },
 {
  label: "Projects",
  href: "/Projects",
 },
 {
  label: "Career",
  href: "/Career",
 },
];
