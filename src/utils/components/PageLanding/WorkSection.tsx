import React from "react";

import { PROJECT_DATA, PREVIOUS_DATA } from "../../ProjectData";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

import ProjectsList from "./ProjectsList";

export default function WorkSection() {
 return (
  <SectionGrid>
   <SectionGridItem>
    <SectionText topText="Our" bottomText="Work." />
   </SectionGridItem>

   <SectionGridItem>
    <ProjectsList projects={[...PROJECT_DATA, ...PREVIOUS_DATA]} />
   </SectionGridItem>
  </SectionGrid>
 );
}
