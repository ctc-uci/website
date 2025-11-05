"use client";
import { VStack, Text, Button, Link as ChakraLink } from "@chakra-ui/react";

import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import CurrentProjects from "@/utils/components/PageProjects/CurrentProjects";
import PastProjects from "@/utils/components/PageProjects/PastProjects";
import BreakText from "@/utils/components/TextUtils/BreakText";

export default function OurWorkPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="center" spacing={5} zIndex={1}>
     <Text fontSize={{ base: "4xl", sm: "7xl" }} fontWeight="semibold">
      Our Projects
     </Text>
     <Text fontSize={{ base: "xs", sm: "xl" }} textAlign="center">
      Since 2020, we’ve partnered with nonprofits to create quality
      <BreakText />
      software and positively impact communities.
     </Text>
     <Button
      backgroundColor="ctc.purple"
      variant="purple"
      color="white"
      size="lg"
      as={ChakraLink}
      target="_blank"
      href="https://ctc-uci.com/portfolio/CTC%202024-25%20Outreach%20Portfolio.pdf"
     >
      Portfolio
     </Button>
    </VStack>
   </Hero>
   <CurrentProjects />
   <PastProjects />
   <Footer />
  </VStack>
 );
}
