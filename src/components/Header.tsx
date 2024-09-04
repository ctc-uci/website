import {
  Button,
  Link as ChakraLink,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

type Link = { text: string; href: string };

const LINKS: Link[] = [
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Blog",
    href: "https://www.medium.com", // ! FIXME: should go to CTC medium
  },
  {
    text: "Work with Us",
    href: "/",
  },
];

export const Header = () => {
  return (
    <Flex
      sx={{
        paddingX: 100,
        height: 70,
        maxHeight: 70,
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: 1,
      }}
    >
      <Image
        src="./ctc.svg"
        alt="ctc logo"
        sx={{ height: 7 }}
      />

      <HStack spacing={10}>
        <HStack spacing={10}>
          {LINKS.map((link) => (
            <ChakraLink
              as={Link}
              id={link.text}
              to={link.href}
              sx={{ fontSize: "xl" }}
            >
              <Text>{link.text}</Text>
            </ChakraLink>
          ))}
        </HStack>
        <Button
          sx={{
            backgroundColor: "ctc.purple",
            textColor: "ctc.gray",
            paddingX: 8,
            paddingY: 2.5,
            // ! FIX ME: on hover styling
          }}
        >
          <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Apply</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
