"use client";
import { VStack, Text, Box } from "@chakra-ui/react";
import { IMPACT_STATS } from "@/utils/Settings";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import AnimatedCounter from "../AnimationUtils/AnimatedCounter";
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
    >
     <Box bg="ctc.purple" borderRadius="md" minW="5rem" width="75%">
      <Text fontSize="7xl" fontWeight="bold">
       <AnimatedCounter value={IMPACT_STATS.NPOS_SERVED} suffix="+" />
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
       Software Solutions for Non-Profits{" "}
      </Text>
     </Box>
     <Box bg="ctc.purple" borderRadius="md" minW="5rem" width="75%">
      <Text fontSize="7xl" fontWeight="bold">
       <AnimatedCounter value={IMPACT_STATS.HOURS_VOLUNTEERED} suffix="+" />
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
       Hours Volunteered
      </Text>
     </Box>
    </VStack>
   </SectionGridItem>
  </SectionGrid>
 );
}
