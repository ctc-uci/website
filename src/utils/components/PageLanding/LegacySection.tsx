"use client";
import { VStack, Text, Hide, Show } from "@chakra-ui/react";

import { FadeInUp, CareersMarque } from "../AnimationUtils";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

export default function LegacySection() {
 return (
  <SectionGrid>
   {/* Left Side */}
   <Hide below="md">
    <SectionGridItem>
     <CareersMarque whichHalf="first" />
    </SectionGridItem>
   </Hide>

   <SectionGridItem>
    {/* Right Side */}
    <VStack alignItems="start" spacing={2}>
     <SectionText topText="Our" bottomText="Legacy." />

     <FadeInUp delay={0.3}>
      <Text fontSize="lg" lineHeight="1.5" letterSpacing="-0.025rem">
       Proud destinations of our alumni
      </Text>
     </FadeInUp>
    </VStack>
   </SectionGridItem>

   <Show below="md">
    <SectionGridItem>
     <CareersMarque />
    </SectionGridItem>
   </Show>
  </SectionGrid>
 );
}
