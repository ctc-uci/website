import { Box, HStack } from "@chakra-ui/react";

import { Project } from "../../ProjectData";

import ProjectCard from "./ProjectCard";

interface HorizontalProjectScrollProps {
 projects: Project[];
 width?: string;
}

export default function HorizontalProjectScroll({
 projects,
 width = "450px",
}: HorizontalProjectScrollProps) {
 return (
  <Box
   overflowX="auto"
   overflowY="hidden"
   display="block"
   position="relative"
   css={{
    "&::-webkit-scrollbar": {
     display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
   }}
  >
   {/* Fade overlay on the right side */}
   <Box
    position="absolute"
    top={0}
    right={0}
    width="25px"
    height="100%"
    background="linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent)"
    pointerEvents="none"
    zIndex={1}
   />
   {/* <Box
    position="absolute"
    top={0}
    left={0}
    width={6}
    height="100%"
    background="linear-gradient(to right, rgb(255, 255, 255), transparent)"
    pointerEvents="none"
    zIndex={1}
   /> */}

   <HStack
    spacing={6}
    align="stretch"
    minWidth="300px"
    position="relative"
    width={{ base: "300px", sm: "400px", md: "350px", lg: width }}
    overflowX="auto"
    paddingY={4}
    paddingX={2}
    css={{
     "&::-webkit-scrollbar": {
      display: "none",
     },
     msOverflowStyle: "none",
     scrollbarWidth: "none",
     //  scrollSnapType: "x mandatory",
     //  scrollBehavior: "smooth",
    }}
   >
    {projects.map((project, index) => (
     <ProjectCard key={index} project={project} />
    ))}
   </HStack>
  </Box>
 );
}
