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

import { MAX_WIDTH } from "../styles/shared";

export function Footer() {
  return (
    <Center sx={{ backgroundColor: "ctc.purple" }}>
      <HStack
        sx={{
          paddingX: { base: 5, xl: 100 },
          paddingY: 10,
          backgroundColor: "ctc.purple",
          justifyContent: { base: "center", md: "space-between" },
          alignItems: "center",
          width: "100%",
          maxWidth: MAX_WIDTH,
        }}
      >
        <Stack
          spacing={0}
          sx={{
            color: "ctc.gray",
            fontWeight: "medium",
            display: { base: "none", md: "flex" },
          }}
        >
          <Text>&copy; Commit the Change</Text>
          <Text>Created in Irvine, CA</Text>
          <Text>Est. 2020</Text>
        </Stack>
        <VStack spacing={6}>
          <Image
            src={"./ctc-white.svg"}
            sx={{ height: 50 }}
            alt="ctc logo"
          />
          <Text
            sx={{ fontWeight: "semibold", fontSize: "2xl", color: "ctc.white" }}
          >
            Tech with Purpose.
          </Text>
          <HStack spacing={5}>
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
          </HStack>
        </VStack>
        <Grid
          templateColumns="1fr auto"
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
        </Grid>
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
    label: "Blog",
    href: "https://medium.com",
  },
  {
    label: "Work with Us",
    href: "/contact",
  },
];
