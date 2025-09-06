import {
  Center,
  Link as ChakraLink,
  Grid,
  HStack,
  Icon,
  Image,
  Stack,
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
import { Link } from "react-router-dom";

import { imageStyle, MAX_WIDTH } from "../styles/shared";

export function Footer() {
  return (
    <Center sx={{ backgroundColor: "ctc.purple" }}>
      <HStack
        sx={{
          paddingX: { base: 5, xl: 100 },
          paddingY: 16,
          backgroundColor: "ctc.purple",
          justifyContent: { base: "center", md: "space-between" },
          alignItems: "center",
          width: "100%",
          maxWidth: MAX_WIDTH,
        }}
      >
        <VStack spacing={6}>
          <Image
            src={"./ctc-white.svg"}
            sx={{ ...imageStyle, height: 20 }}
            alt="ctc logo"
          />
          <Text
            sx={{ fontWeight: "semibold", fontSize: "xl", color: "ctc.white" }}
          >
            Tech with Purpose.
          </Text>
          {/* <HStack spacing={5}>
            {ICONS.map((icon) => (
              <ChakraLink
                key={icon.href}
                as={Link}
                to={icon.href}
              >
                <Icon
                  as={icon.icon}
                  sx={{ width: 6, height: 6, color: "white" }}
                />
              </ChakraLink>
            ))}
          </HStack> */}
        </VStack>

        <VStack
          sx={{
            color: "ctc.gray",
            fontWeight: "medium",
            // display: { base: "none", md: "flex" },
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
            color: "ctc.white",
            fontWeight: "medium",
            display: { base: "none", md: "grid" },
          }}
        >
          {LINKS.map((link) => (
            <ChakraLink
              key={link.label}
              as={Link}
              to={link.href}
            >
              {link.label}
            </ChakraLink>
          ))}
        </VStack>

        <VStack>
          {ICONS.map((icon) => (
            <ChakraLink
              key={icon.href}
              as={Link}
              to={icon.href}
            >
              <Icon
                as={icon.icon}
                sx={{ width: 5, height: 5, color: "white" }}
              />
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
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Apply",
    href: "/apply",
  },
  {
    label: "Work with Us",
    href: "/work-with-us",
  },
];
