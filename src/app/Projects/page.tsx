"use client";
import { VStack, Text, Button } from "@chakra-ui/react";

import Hero from "@/utils/components/Hero";
import PastProjects from "@/utils/components/PageProjects/PastProjects";

export default function OurWorkPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="center" spacing={5} zIndex={1}>
     <Text fontSize="7xl" fontWeight="semibold">
      Our Projects
     </Text>
     <Text fontSize="xl" textAlign="center">
      Since 2020, we’ve partnered with nonprofits to create quality
      <br />
      software and positively impact communities.
     </Text>
     <Button
      backgroundColor="ctc.purple"
      variant="purple"
      color="white"
      size="lg"
     >
      Portfolio
     </Button>
    </VStack>
   </Hero>
   <PastProjects />
  </VStack>
 );
}
