import { Text, VStack } from "@chakra-ui/react";

import { PREVIOUS_DATA } from "@/utils/constants/project-data";

import { ProjectsList } from "../CardUtils";
import { SectionGrid, SectionGridItem } from "../GridUtils";

export default function PastProjects() {
 //  Groups projects into their year ranges
 const pastProjects = PREVIOUS_DATA.reduce((acc, project) => {
  const yearKey = `'${project.startYear.substring(
   2
  )} - '${project.endYear.substring(2)}`;
  if (!acc[yearKey]) {
   acc[yearKey] = [];
  }
  acc[yearKey].push(project);
  return acc;
 }, {} as Record<string, typeof PREVIOUS_DATA>);

 return (
  <VStack alignItems="center" spacing={0}>
   <Text fontSize="5xl" fontWeight="medium">
    Past Projects
   </Text>
   {Object.entries(pastProjects).map(([year, projects]) => (
    <SectionGrid key={year}>
     <SectionGridItem>
      <Text fontSize="7xl" fontWeight="medium">
       {year}
      </Text>
     </SectionGridItem>
     <SectionGridItem>
      <ProjectsList projects={projects} width="600px" />
     </SectionGridItem>
    </SectionGrid>
   ))}
  </VStack>
 );
}
