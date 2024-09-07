import { useEffect } from "react";

import { Box, Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ApplyButton } from "../shared/ApplyButton";
import type { NavLink } from "./Header";

interface MobileNavProps {
  links: NavLink[];
  isOpen: boolean;
  onToggle: VoidFunction;
}

export function MobileNav({ links, isOpen, onToggle }: MobileNavProps) {
  // prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <HStack
        as={motion.div}
        initial={false}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: "-20px", opacity: 0.25 }}
        transition={{ duration: isOpen ? 0.5 : 0.75 }} // ! FIX ME
        sx={{
          position: "fixed",
          display: { base: "flex", md: "none" },
          flexDirection: "column",
          width: "100%",
          paddingX: 5,
          paddingY: 4,
          backgroundColor: "ctc.gray",
          boxShadow: "md",
        }}
        spacing={4}
      >
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
        <ApplyButton width={{ base: "75%", md: "unset" }} />
      </HStack>

      {/* This is bad code! */}
      <Box
        sx={{
          position: "absolute",
          top: 326,
          width: "100dvw",
          height: "calc(100dvh - 326px)",
          bg: "blackAlpha.400",
          display: { base: "flex", md: "none" },
        }}
        onClick={onToggle}
      />
    </>
  );
}
