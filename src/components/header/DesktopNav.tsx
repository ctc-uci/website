import { Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { ApplyButton } from "../shared/ApplyButton";
import { NavLink } from "./Header";

interface MobileNavProps {
  links: NavLink[];
}

export function DesktopNav({ links }: MobileNavProps) {
  return (
    <HStack
      spacing={10}
      sx={{ display: { base: "none", md: "flex" } }}
    >
      <HStack spacing={10}>
        {links.map((link) => (
          <ChakraLink
            as={Link}
            key={link.label}
            to={link.href}
            sx={{ fontSize: "xl" }}
          >
            <HStack>
              <Text>{link.label}</Text>
              {link.icon ? <Icon as={link.icon} /> : null}
            </HStack>
          </ChakraLink>
        ))}
      </HStack>

      <ApplyButton />
    </HStack>
  );
}
