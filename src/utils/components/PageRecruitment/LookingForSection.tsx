"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import FlippableCard from "./FlippableCard";

export default function LookingForSection() {
 return (
  <VStack spacing={12} py={20} px={4} maxW="7xl" mx="auto" width="100%">
   {/* Header */}
   <Box textAlign="center">
    <Text
     fontFamily="Inter, sans-serif"
     fontWeight="medium"
     fontSize="5xl"
     lineHeight="60px"
     letterSpacing="0%"
     textAlign="center"
    >
     We&apos;re looking for...
    </Text>
   </Box>

   {/* Cards Container */}
   <HStack
    spacing={5}
    justifyContent="center"
    flexWrap="wrap"
   >
    <FlippableCard
     frontImage="/assets/pencil.png"
     label="Designers"
     backTitle="Designers"
     backBullets={[
      "work in a cross functional team",
      "use Figma and the design process (research, wireframing, prototyping, usability testing) to create innovative designs for non-profit organizations",
      "All levels are welcome",
     ]}
    />
    <FlippableCard
     frontImage="/assets/desktop.png"
     label="Developers"
     backTitle="Developers"
     backBullets={[
      "will utilize frontend technologies (React, Javascript/Typescript, HTML, and CSS/SASS)",
      "work with backend technologies (APIs, databases, & middleware)",
      "implement real-life applications",
     ]}
    />
   </HStack>
  </VStack>
 );
}
