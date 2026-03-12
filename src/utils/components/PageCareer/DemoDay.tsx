import { Button, Image, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

function DemoDay() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <VStack alignItems="start" spacing={6}>
     <SectionText topText="Demo" bottomText="Day." />
     <Button as={NextLink} href="/DemoDay" bg="ctc.purple" color="white" _hover={{ bg: "purple.700" }}
       _active={{ bg: "purple.800" }}
>
      Learn More
     </Button>
    </VStack>
   </SectionGridItem>
   <SectionGridItem>
    <Image
     src="/photos/demo-day.png"
     alt="Demo Day"
     width="700px"
     height="400px"
     objectFit="cover"
     borderRadius="lg"
    />
   </SectionGridItem>
  </SectionGrid>
 );
}

export default DemoDay;
