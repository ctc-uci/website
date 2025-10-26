import React from "react";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import ProjectsList from "./ProjectsList";
import SectionText from "../TextUtils/SectionText";
import { PREVIOUS_DATA } from "../../ProjectData";

export default function WorkSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <SectionText topText="Our" bottomText="Work." />
   </SectionGridItem>

   <SectionGridItem>
    <ProjectsList projects={PREVIOUS_DATA} />
   </SectionGridItem>
  </SectionGrid>
 );
}
