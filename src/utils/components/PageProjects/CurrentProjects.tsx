import { Text, Stack, VStack } from "@chakra-ui/react";

import { PROJECT_DATA } from "@/utils/constants/project-data";

import { ProjectCard } from "../CardUtils";

export default function CurrentProjects() {
 return (
  <VStack spacing={0} py={20}>
   <Text fontSize="5xl" fontWeight="medium">
    Current Projects
   </Text>
   <Stack
    spacing={{ base: 2, lg: 10 }}
    direction={{ base: "column", md: "row" }}
    justifyContent="center"
    width="100%"
    flexWrap="wrap"
   >
    {PROJECT_DATA.map((project) => (
     <ProjectCard key={project.name} project={project} presentationDisplay />
    ))}
   </Stack>
  </VStack>
 );
}
