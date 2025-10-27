"use client";
import { VStack, Text } from "@chakra-ui/react";

import { IMPACT_STATS } from "@/utils/Settings";

import AnimatedCounter from "../AnimationUtils/AnimatedCounter";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

export default function ImpactSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <SectionText topText="Our" bottomText="Impact." />
   </SectionGridItem>

   {/* Right Side */}
   <SectionGridItem>
    <VStack
     alignItems="center"
     justifyContent="center"
     textColor="white"
     spacing={4}
     width="100%"
     lineHeight="1"
    >
     <VStack
      bg="ctc.purple"
      borderRadius="md"
      minW="5rem"
      width="75%"
      py={4}
      spacing={2}
     >
      <Text fontSize="7xl" fontWeight="bold">
       <AnimatedCounter value={IMPACT_STATS.NPOS_SERVED} suffix="+" />
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
       Software Solutions for Non-Profits{" "}
      </Text>
     </VStack>
     <VStack
      bg="ctc.purple"
      borderRadius="md"
      minW="5rem"
      width="75%"
      py={4}
      spacing={2}
     >
      <Text fontSize="7xl" fontWeight="bold">
       <AnimatedCounter value={IMPACT_STATS.HOURS_VOLUNTEERED} suffix="+" />
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
       Hours Volunteered
      </Text>
     </VStack>
    </VStack>
   </SectionGridItem>
  </SectionGrid>
 );
}
