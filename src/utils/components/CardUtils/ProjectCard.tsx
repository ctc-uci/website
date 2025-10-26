import { Box, VStack, Text, Image } from "@chakra-ui/react";

import { Project } from "../../ProjectData";

interface ProjectCardProps {
 project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
 return (
  <Box
   minWidth="300px"
   maxWidth="300px"
   backgroundColor="white"
   borderRadius="12px"
   boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
   padding={6}
   cursor="pointer"
   transition="all 0.2s ease-in-out"
   css={{
    scrollSnapAlign: "start",
   }}
   _hover={{
    transform: "translateY(-2px)",
    boxShadow:
     "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
   }}
  >
   <VStack spacing={4} align="start" height="100%">
    {/* Project Image */}
    <Box
     width="100%"
     height="120px"
     display="flex"
     justifyContent="center"
     borderRadius="8px"
     overflow="hidden"
    >
     <Image
      src={`/projects/${project.image}`}
      alt={project.name}
      maxHeight="100%"
      maxWidth="100%"
      objectFit="contain"
     />
    </Box>

    {/* Project Name */}
    <Text
     fontSize="lg"
     fontWeight="bold"
     color="gray.800"
     lineHeight="1.3"
     noOfLines={2}
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
     noOfLines={4}
    >
     {project.description}
    </Text>
   </VStack>
  </Box>
 );
}
