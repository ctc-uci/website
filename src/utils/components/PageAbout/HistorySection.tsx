import { VStack, Text, Image } from "@chakra-ui/react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import BreakText from "../TextUtils/BreakText";
import SectionText from "../TextUtils/SectionText";

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
