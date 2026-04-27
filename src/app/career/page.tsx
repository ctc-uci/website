"use client";
import { VStack, Text } from "@chakra-ui/react";

import { CareersMarque } from "@/utils/components/AnimationUtils";
import CtcTimeline from "@/utils/components/CtcTimeline";
import { Footer } from "@/utils/components/Footer";
import Hero from "@/utils/components/Hero";
import AlumniFlex from "@/utils/components/PageCareer/AlumniFlex";
import DemoDay from "@/utils/components/PageCareer/DemoDay";
import Testimonials from "@/utils/components/PageCareer/Testimonials";
import { HERO_TEXT_SIZE } from "@/utils/components/styles/style-constants";

export default function CareerPage() {
 return (
  <VStack spacing={0}>
   <Hero>
    <VStack alignItems="start" spacing={0} zIndex={1}>
     <Text
      fontSize={HERO_TEXT_SIZE}
      fontWeight="semibold"
      fontFamily="Inter, sans-serif"
     >
      Why CTC?
     </Text>
    </VStack>
   </Hero>
   <AlumniFlex />
   <Testimonials />
   <VStack spacing={6} py={10} width="full">
    <CareersMarque
     orientation="horizontal"
     height="80px"
     whichHalf="second"
    />
   </VStack>
   <CtcTimeline />
   <DemoDay />
   <Footer />
  </VStack>
 );
}
