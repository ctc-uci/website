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
 /** When "first" or "second", show only that half; "both" shows two carousels (default). */
 whichHalf?: "first" | "second" | "both";
}

const logos: Logo[] = COMPANY_LOGOS;

// Split logos in half: first half for one carousel, second half for the other
const mid = Math.ceil(logos.length / 2);
const firstHalfLogos = logos.slice(0, mid);
const secondHalfLogos = logos.slice(mid);

const CareersMarque: React.FC<CareersMarqueProps> = ({
 orientation = "vertical",
 height = "360px",
 whichHalf = "both",
}) => {
 // Duplicate the logos array for seamless looping (per track)
 const duplicatedFirst = [...firstHalfLogos, ...firstHalfLogos];
 const duplicatedSecond = [...secondHalfLogos, ...secondHalfLogos];

 // Calculate animation duration based on number of logos per track
 const durationFirst = firstHalfLogos.length * 2.5;
 const durationSecond = secondHalfLogos.length * 2.5;

 // Horizontal: two rows, first half scrolls left, second half scrolls right
 if (orientation === "horizontal") {
  const logoWidth = 120;
  const gap = 40;
  const totalWidthFirst = firstHalfLogos.length * (logoWidth + gap);
  const totalWidthSecond = secondHalfLogos.length * (logoWidth + gap);

  const renderHorizontalRow = (
   duplicated: Logo[],
   totalWidth: number,
   duration: number,
   scrollDirection: "left" | "right"
  ) => (
   <MotionBox
    animate={{
     x:
      scrollDirection === "left"
       ? [0, -totalWidth]
       : [-totalWidth, 0],
    }}
    transition={{
     x: {
      repeat: Infinity,
      repeatType: "loop",
      duration,
      ease: "linear",
     },
    }}
   >
    <HStack spacing={10} align="center">
     {duplicated.map((logo, index) => (
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
  );

  const rowHeight =
   whichHalf === "both"
    ? `calc(${height} / 2 - 8px)`
    : height;

  return (
   <VStack spacing={4} align="stretch" position="relative" width="100%">
    {(whichHalf === "first" || whichHalf === "both") && (
     <Box
      position="relative"
      width="100%"
      height={rowHeight}
      overflow="hidden"
      p={2}
      display="flex"
      alignItems="center"
     >
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
      {renderHorizontalRow(
       duplicatedFirst,
       totalWidthFirst,
       durationFirst,
       "left"
      )}
     </Box>
    )}
    {(whichHalf === "second" || whichHalf === "both") && (
     <Box
      position="relative"
      width="100%"
      height={rowHeight}
      overflow="hidden"
      p={2}
      display="flex"
      alignItems="center"
     >
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
      {renderHorizontalRow(
       duplicatedSecond,
       totalWidthSecond,
       durationSecond,
       "right"
      )}
     </Box>
    )}
   </VStack>
  );
 }

 // Vertical: two columns, first half scrolls up, second half scrolls down
 const logoHeight = 120; // logo height + gap
 const totalHeightFirst = firstHalfLogos.length * logoHeight;
 const totalHeightSecond = secondHalfLogos.length * logoHeight;

 const renderVerticalColumn = (
  duplicated: Logo[],
  totalHeight: number,
  duration: number,
  scrollDirection: "up" | "down"
 ) => (
  <MotionBox
   animate={{
    y:
     scrollDirection === "up"
      ? [0, -totalHeight]
      : [-totalHeight, 0],
   }}
   transition={{
    y: {
     repeat: Infinity,
     repeatType: "loop",
     duration,
     ease: "linear",
    },
   }}
  >
   <VStack spacing={8}>
    {duplicated.map((logo, index) => (
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
 );

 return (
  <HStack
   position="relative"
   height={height}
   width="100%"
   overflow="hidden"
   borderRadius="lg"
   p={4}
   spacing={4}
   align="stretch"
  >
   {(whichHalf === "first" || whichHalf === "both") && (
    <Box
     position="relative"
     flex={1}
     overflow="hidden"
     sx={{ "& .chakra-stack": { alignItems: "center" } }}
    >
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
     {renderVerticalColumn(
      duplicatedFirst,
      totalHeightFirst,
      durationFirst,
      "up"
     )}
    </Box>
   )}
   {(whichHalf === "second" || whichHalf === "both") && (
    <Box
     position="relative"
     flex={1}
     overflow="hidden"
     sx={{ "& .chakra-stack": { alignItems: "center" } }}
    >
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
     {renderVerticalColumn(
      duplicatedSecond,
      totalHeightSecond,
      durationSecond,
      "down"
     )}
    </Box>
   )}
  </HStack>
 );
};

export default CareersMarque;
