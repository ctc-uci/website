import { Text } from "@chakra-ui/react";

import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

function DemoDay() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <SectionText topText="Demo" bottomText="Day." />
   </SectionGridItem>
   <SectionGridItem>
    <Text>Demo Day</Text>
   </SectionGridItem>
  </SectionGrid>
 );
}

export default DemoDay;
