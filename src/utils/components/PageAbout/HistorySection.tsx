"use client";
import { VStack, Text, Image, Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import BreakText from "../TextUtils/BreakText";
import SectionText from "../TextUtils/SectionText";

export default function MissionSection() {
 const [overlayOpacity, setOverlayOpacity] = useState(1);

 const handleOverlayClick = () => {
  setOverlayOpacity((prev) => Math.max(0, Number((prev - 0.02).toFixed(2))));
 };
 return (
  <SectionGrid>
   <SectionGridItem>
    <Box
     position="relative"
     height={{ base: 300, md: 350, mdlg: 500, xl: 600, "2xl": 700 }}
     width="100%"
     overflow="hidden"
     borderRadius="lg"
     boxShadow="lg"
    >
     {/* Base image */}
     <Image
      src="/photos/club-collaboration.jpg"
      alt="Club collaboration"
      position="absolute"
      inset={0}
      width="100%"
      height="100%"
      objectFit="cover"
     />
     {/* Overlay image with click-to-reveal */}
     <Image
      src="/photos/who-are-we.jpg"
      alt="Who are we overlay"
      position="absolute"
      inset={0}
      width="100%"
      height="100%"
      objectFit="cover"
      opacity={overlayOpacity}
      onClick={handleOverlayClick}
      cursor="pointer"
      title="Keep clicking to reveal the photo!"
     />
    </Box>
   </SectionGridItem>
   <SectionGridItem>
    <VStack spacing={2} alignItems="start">
     <SectionText topText="Our" bottomText="History." animated={false} />
     <Text textAlign="left">
      Founded in 2020, Commit the Change started as a small group <BreakText />{" "}
      of undergraduate students with a shared love for <BreakText />
      coding and finding fulfillment through positive <BreakText /> social
      impacts on their communities.
      <BreakText />
      <BreakText />
      After merging with Blueprint in 2021, Commit the
      <BreakText /> Change is now an established student organization at{" "}
      <BreakText />
      UC Irvine with a team of skilled designers and <BreakText /> developers.
     </Text>
    </VStack>
   </SectionGridItem>
  </SectionGrid>
 );
}
