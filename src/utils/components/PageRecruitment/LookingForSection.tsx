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
     backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    />
    <FlippableCard
     frontImage="/assets/desktop.png"
     label="Developers"
     backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    />
   </HStack>
  </VStack>
 );
}
