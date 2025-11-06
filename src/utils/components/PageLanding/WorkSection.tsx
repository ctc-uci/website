import { PROJECT_DATA, PREVIOUS_DATA } from "../../constants/project-data";
import { ProjectsList } from "../CardUtils";
import { SectionGrid, SectionGridItem } from "../GridUtils";
import SectionText from "../TextUtils/SectionText";

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
