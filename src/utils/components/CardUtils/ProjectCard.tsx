import { Box, VStack, Text, Image } from "@chakra-ui/react";

import { Project } from "../../ProjectData";

interface ProjectCardProps {
 project: Project;
 presentationDisplay?: boolean;
}

export default function ProjectCard({
 project,
 presentationDisplay = false,
}: ProjectCardProps) {
 return (
  <Box
   minWidth={"300px"}
   maxWidth={"325px"}
   width={{ base: "100%", md: "300px" }}
   backgroundColor="white"
   borderRadius="lg"
   boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
   p={6}
   transition="all 0.2s ease-in-out"
   css={{
    scrollSnapAlign: "start",
   }}
  >
   <VStack spacing={4} align="start" height="100%">
    {/* Project Image */}
    <Box
     width="100%"
     height={presentationDisplay ? "160px" : "120px"}
     display="flex"
     justifyContent="center"
     borderRadius="sm"
     overflow="hidden"
    >
     <Image
      src={`/projects/${project.image}`}
      alt={project.name}
      maxHeight="100%"
      maxWidth="100%"
      objectFit="contain"
      draggable="false"
     />
    </Box>

    {/* Project Name */}
    <Text
     fontSize="md"
     fontWeight="bold"
     color="gray.800"
     lineHeight="1.3"
     noOfLines={3}
    >
     {project.name}
    </Text>

    {/* Year Range */}
    <Text fontSize="sm" color="gray.600" fontWeight="medium">
     {project.startYear}-{project.endYear}
    </Text>

    {/* Description */}
    <Text
     fontSize="sm"
     color="gray.700"
     lineHeight="1.5"
     textAlign="left"
     noOfLines={presentationDisplay ? 10 : 6}
    >
     {project.description}
    </Text>
   </VStack>
  </Box>
 );
}
