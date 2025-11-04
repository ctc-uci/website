import { Image } from "@chakra-ui/react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

function DemoDay() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <SectionText topText="Demo" bottomText="Day." />
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
