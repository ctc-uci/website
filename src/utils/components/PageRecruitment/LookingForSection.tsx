"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import FlippableCard from "./FlippableCard";

export default function LookingForSection() {
 return (
  <VStack
   spacing={{ base: 8, md: 12 }}
   py={{ base: 12, md: 20 }}
   px={{ base: 4, md: 4 }}
   maxW="7xl"
   mx="auto"
   width="100%"
  >
   {/* Header */}
   <Box textAlign="center">
    <Text
     fontFamily="Inter, sans-serif"
     fontWeight="medium"
     fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
     lineHeight={{ base: "40px", md: "50px", lg: "60px" }}
     letterSpacing="0%"
     textAlign="center"
     px={{ base: 2, md: 0 }}
    >
     We&apos;re looking for...
    </Text>
   </Box>

   {/* Cards Container */}
   <HStack
    spacing={20}
    justifyContent="center"
    flexWrap="wrap"
    width="100%"
   >
    <FlippableCard
     frontImage="/assets/pencil.png"
     label="Designers"
     backTitle="Designers"
     backBullets={[
      "Work in a cross-functional team",
      "Use Figma and the design process (research, wireframing, prototyping, usability testing) to create innovative designs for non-profit organizations",
      "All levels are welcome",
     ]}
    />
    <FlippableCard
     frontImage="/assets/desktop.png"
     label="Developers"
     backTitle="Developers"
     backBullets={[
      "Utilize frontend technologies (React, JavaScript/TypeScript, HTML, and CSS/SASS)",
      "Work with backend technologies (APIs, databases, & middleware)",
      "Implement real-life applications",
     ]}
    />
   </HStack>
  </VStack>
 );
}
