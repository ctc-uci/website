import { Image, VStack, Text } from "@chakra-ui/react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

export default function MissionSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <VStack spacing={1} alignItems="start">
     <SectionText topText="Our" bottomText="Mission." animated={false} />
     <Text textAlign="left">
      At Commit the Change, our mission is to build end-to-
      <br />
      end, high-quality products for non-profit organizations,
      <br /> while empowering UC Irvine designers and developers
      <br /> to create technology with purpose.
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
