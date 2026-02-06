"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import FlippableCard from "./FlippableCard";

export default function LookingForSection() {
 return (
  <VStack spacing={12} py={20} px={4} maxW="7xl" mx="auto" width="100%">
   {/* Header */}
   <Box textAlign="center">
    <Text
     fontFamily="body"
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
    spacing="20px"
    justifyContent="center"
    flexWrap="wrap"
    gap="20px"
   >
    <FlippableCard
     frontImage="/assets/pencil.png"
     label="Designers"
     backTitle="Designers"
     backBullets={[
      "Will work in a cross functional team",
      "Use Figma and the design process (research, wireframing, prototyping, usability testing) to create innovative designs for non-profit organizations",
      "All levels are welcome",
     ]}
    />
    <FlippableCard
     frontImage="/assets/desktop.png"
     label="Developers"
     backTitle="Developers"
     backBullets={[
      "Will utilize frontend technologies (React, Javascript/Typescript, HTML, and CSS/SASS)",
      "Work with backend technologies (APIs, databases, & middleware)",
      "Implement real-life applications",
     ]}
    />
   </HStack>
  </VStack>
 );
}
