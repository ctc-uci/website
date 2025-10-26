"use client";
import { VStack, Text } from "@chakra-ui/react";

import { CareersMarque } from "@/utils/components/AnimationUtils";
import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";

export default function CareerPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text fontSize="7xl" fontWeight="semibold" fontFamily="Inter, sans-serif">
      Why CTC?
     </Text>
    </VStack>
   </Hero>
   <CareersMarque orientation="horizontal" height="120px" /> <Footer />
  </VStack>
 );
}
