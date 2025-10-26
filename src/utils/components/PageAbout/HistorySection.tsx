import React from "react";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";
import { VStack, Text, Image } from "@chakra-ui/react";

export default function MissionSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <Image
     src="/photos/who-are-we.jpg"
     alt="History"
     height={{ base: 300, md: 350, mdlg: 500, xl: 600, "2xl": 700 }}
     objectFit="cover"
     borderRadius="lg"
     boxShadow="lg"
    />
   </SectionGridItem>
   <SectionGridItem>
    <VStack spacing={0} alignItems="start">
     <SectionText topText="Our" bottomText="History." animated={false} />
     <Text textAlign="left">
      Founded in 2020, Commit the Change started as a small group <br /> of
      undergraduate students with a shared love for <br />
      coding and finding fulfillment through positive <br /> social impacts on
      their communities.
      <br />
      <br />
      After merging with Blueprint in 2021, Commit the
      <br /> Change is now an established student organization at <br />
      UC Irvine with a team of skilled designers and <br /> developers.
     </Text>
    </VStack>
   </SectionGridItem>
  </SectionGrid>
 );
}
