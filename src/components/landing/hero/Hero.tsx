import { ReactNode } from "react";

import { Box, Center, Image } from "@chakra-ui/react";

import { HERO_GRADIENT } from "../../../styles/shared";

interface HeroProps {
  children?: ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      background={HERO_GRADIENT}
      position="relative"
    >
      {/* Background Image */}
      <Image
        src="/ctc-white.svg"
        alt="CTC Logo"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxWidth="70%"
        maxHeight="65%"
        objectFit="contain"
        opacity={0.4}
        zIndex={0}
      />

      {/* Content Overlay */}
      <Center
        height="100vh"
        position="relative"
        zIndex={1}
      >
        <Box>{children}</Box>
      </Center>
    </Box>
  );
};
