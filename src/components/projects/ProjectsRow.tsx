import { Box, HStack } from "@chakra-ui/react";

import { ProjectCard } from "./ProjectCard";
import { Project } from "./projects-data";

interface ProjectsRowProps {
  data: Project[];
}

export function ProjectsRow({ data }: ProjectsRowProps) {
  return (
    <Box
      sx={{
        overflowX: "scroll",
      }}
    >
      <HStack
        spacing={5}
        sx={{
          minWidth: "fit-content",
          paddingX: 2,
          paddingY: 4,
          alignItems: "stretch",
        }}
      >
        {data.map((project) => (
          <ProjectCard
            project={project}
            key={project.name + project.startYear + project.endYear}
          />
        ))}
      </HStack>
    </Box>
  );
}
