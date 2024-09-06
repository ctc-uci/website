import { Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { ApplyButton } from "./ApplyButton";
import type { NavLink } from "./Header";

interface MobileNavProps {
  links: NavLink[];
}

export function MobileNav({ links }: MobileNavProps) {
  return (
    <HStack
      sx={{
        display: { base: "flex", md: "none" },
        flexDirection: "column",
        width: "100%",
        paddingX: 5,
        paddingY: 4,
      }}
      spacing={4}
    >
      {links.map((link) => (
        <ChakraLink
          as={Link}
          id={link.label}
          to={link.href}
          sx={{ fontSize: "xl" }}
        >
          <HStack>
            <Text>{link.label}</Text>
            {link.icon ? <Icon as={link.icon} /> : null}
          </HStack>
        </ChakraLink>
      ))}

      <ApplyButton />
    </HStack>
  );
}
