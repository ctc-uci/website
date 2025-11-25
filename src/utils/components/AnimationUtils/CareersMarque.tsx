import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import { COMPANY_LOGOS } from "@/utils/constants/company-logos";

const MotionBox = motion(Box);

interface Logo {
 id: string;
 src: string;
 alt: string;
}

interface CareersMarqueProps {
 orientation?: "vertical" | "horizontal";
 height?: string;
 direction?: "left" | "right";
}

// Sample logos - replace with your actual logo data
const logos: Logo[] = COMPANY_LOGOS;

const CareersMarque: React.FC<CareersMarqueProps> = ({
 orientation = "vertical",
 height = "360px",
 direction = "left",
}) => {
 // Duplicate the logos array for seamless looping
 const duplicatedLogos = [...logos, ...logos];

 // Calculate animation duration based on number of logos
 const duration = logos.length * 2.5; // 3 seconds per logo

 // Horizontal marquee
 if (orientation === "horizontal") {
  // Calculate total width needed (logo width + gap) * number of logos
  const logoWidth = 120; // Base logo width
  const gap = 40;
  const totalWidth = logos.length * (logoWidth + gap);

  return (
   <Box
    position="relative"
    width="100%"
    height={height}
    overflow="hidden"
    p={4}
   >
    {/* Left fade overlay */}
    <Box
     position="absolute"
     top="0"
     left="0"
     bottom="0"
     width="100px"
     bgGradient="linear(to right, white, transparent)"
     zIndex={2}
     pointerEvents="none"
    />

    {/* Right fade overlay */}
    <Box
     position="absolute"
     top="0"
     right="0"
     bottom="0"
     width="100px"
     bgGradient="linear(to left, white, transparent)"
     zIndex={2}
     pointerEvents="none"
    />

    <MotionBox
     animate={{
      x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0],
     }}
     transition={{
      x: {
       repeat: Infinity,
       repeatType: "loop",
       duration: duration,
       ease: "linear",
      },
     }}
    >
     <HStack spacing={10} align="center">
      {duplicatedLogos.map((logo, index) => (
       <Box
        key={`${logo.id}-${index}`}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minW={`${logoWidth}px`}
        h="full"
       >
        <Image
         src={logo.src}
         alt={logo.alt}
         maxH={{ base: "40px", md: "60px" }}
         maxW={`${logoWidth}px`}
         objectFit="fill"
         _hover={{
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out",
         }}
        />
       </Box>
      ))}
     </HStack>
    </MotionBox>
   </Box>
  );
 }

 // Vertical marquee (original)
 return (
  <Box
   position="relative"
   height={height}
   width="100%"
   overflow="hidden"
   borderRadius="lg"
   p={4}
  >
   {/* Top fade overlay */}
   <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    height="60px"
    bgGradient="linear(to bottom, white, transparent)"
    zIndex={2}
    pointerEvents="none"
   />

   {/* Bottom fade overlay */}
   <Box
    position="absolute"
    bottom="0"
    left="0"
    right="0"
    height="60px"
    bgGradient="linear(to top, white, transparent)"
    zIndex={2}
    pointerEvents="none"
   />

   <MotionBox
    animate={{
     y: [0, -logos.length * 120], // 120px = logo height + gap
    }}
    transition={{
     y: {
      repeat: Infinity,
      repeatType: "loop",
      duration: duration,
      ease: "linear",
     },
    }}
   >
    <VStack spacing={8}>
     {duplicatedLogos.map((logo, index) => (
      <Box
       key={`${logo.id}-${index}`}
       display="flex"
       alignItems="center"
       justifyContent="center"
       minH={{ base: "40px", md: "60px" }}
       w="full"
      >
       <Image
        src={logo.src}
        alt={logo.alt}
        maxH={{ base: "40px", md: "60px" }}
        maxW="200px"
        objectFit="contain"
        _hover={{
         transform: "scale(1.05)",
         transition: "transform 0.3s ease-in-out",
        }}
       />
      </Box>
     ))}
    </VStack>
   </MotionBox>
  </Box>
 );
};

export default CareersMarque;
