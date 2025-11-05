import { Image, VStack, Text } from "@chakra-ui/react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import BreakText from "../TextUtils/BreakText";
import SectionText from "../TextUtils/SectionText";

export default function MissionSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <VStack spacing={2} alignItems="start">
     <SectionText topText="Our" bottomText="Mission." animated={false} />
     <Text textAlign="left">
      At Commit the Change, our mission is to build end-to-
      <BreakText />
      end, high-quality products for non-profit organizations, <BreakText />{" "}
      while empowering UC Irvine designers and developers <BreakText /> to
      create technology with purpose.
     </Text>
    </VStack>
   </SectionGridItem>
   <SectionGridItem>
    <Image
     src="/photos/meet_the_club.jpg"
     alt="Meet the club because I couldn't find a better photo"
     boxShadow="lg"
     borderRadius="lg"
    />
   </SectionGridItem>
  </SectionGrid>
 );
}
