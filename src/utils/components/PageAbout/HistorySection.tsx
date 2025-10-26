import React from "react";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

export default function MissionSection() {
 return (
  <SectionGrid>
   <SectionGridItem>lol</SectionGridItem>
   <SectionGridItem>
    <SectionText topText="Our" bottomText="History." />
   </SectionGridItem>
  </SectionGrid>
 );
}
