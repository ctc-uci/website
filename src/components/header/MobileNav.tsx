import { useEffect } from "react";

import { Box, Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { HEADER_HEIGHT } from "../../styles/shared";
import { ApplyButton } from "../shared/ApplyButton";
import type { NavLink } from "./Header";

interface MobileNavProps {
  links: NavLink[];
  isOpen: boolean;
  handleClickLink: VoidFunction;
}

export function MobileNav({ links, isOpen, handleClickLink }: MobileNavProps) {
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
        // @ts-expect-error conflict between Chakra and Framer )=
        transition={{ duration: isOpen ? 0.5 : 0.75 }}
        sx={{
          position: "fixed",
          top: HEADER_HEIGHT,
          display: { base: "flex", md: "none" },
          flexDirection: "column",
          width: "100%",
          paddingX: 5,
          paddingY: 4,
          backgroundColor: "ctc.gray",
          boxShadow: "md",
          zIndex: 10,
        }}
        spacing={4}
      >
        {links.map((link) => (
          <ChakraLink
            as={Link}
            key={link.label}
            to={link.href}
            sx={{ fontSize: "xl" }}
            onClick={handleClickLink}
          >
            <HStack>
              <Text>{link.label}</Text>
              {link.icon ? <Icon as={link.icon} /> : null}
            </HStack>
          </ChakraLink>
        ))}

        <ApplyButton
          handleClickLink={handleClickLink}
          linkProps={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          buttonSx={{ width: "100%", maxWidth: 500 }}
        />
      </HStack>

      {/* This is bad code! */}
      <Box
        sx={{
          position: "fixed",
          width: "100dvw",
          top: 326,
          height: "calc(100dvh - 326px)",
          bg: "blackAlpha.400",
          display: { base: "flex", md: "none" },
        }}
        onClick={handleClickLink}
      />
    </>
  );
}
