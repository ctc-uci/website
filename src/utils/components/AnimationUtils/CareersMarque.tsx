import React from "react";
import { Box, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { COMPANY_LOGOS } from "@/utils/Settings";
const MotionBox = motion(Box);

interface Logo {
 id: string;
 src: string;
 alt: string;
}

// Sample logos - replace with your actual logo data
const logos: Logo[] = COMPANY_LOGOS;
const CareersMarque: React.FC = () => {
 // Duplicate the logos array for seamless looping
 const duplicatedLogos = [...logos, ...logos];

 // Calculate animation duration based on number of logos
 const duration = logos.length * 3; // 3 seconds per logo

 return (
  <Box
   position="relative"
   height="360px"
   width="200px"
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
        minH={{ base: "40px", md: "60px" }}
        maxW="80%"
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
