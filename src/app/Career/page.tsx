"use client";
import { VStack, Text } from "@chakra-ui/react";

import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import AlumniFlex from "@/utils/components/PageCareer/AlumniFlex";
import DemoDay from "@/utils/components/PageCareer/DemoDay";
import Testimonials from "@/utils/components/PageCareer/Testimonials";

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
   <AlumniFlex />
   <Testimonials />
   <DemoDay />
   <Footer />
  </VStack>
 );
}
