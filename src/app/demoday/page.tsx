"use client";
import { VStack, Text } from "@chakra-ui/react";

import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import { HERO_TEXT_SIZE } from "@/utils/components/styles/style-constants";

export default function DemoDayPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text
      as="h1"
      fontSize={HERO_TEXT_SIZE}
      fontWeight="semibold"
      fontFamily="Inter, sans-serif"
     >
      Demo Day
     </Text>
    </VStack>
   </Hero>
   <Footer />
  </VStack>
 );
}
