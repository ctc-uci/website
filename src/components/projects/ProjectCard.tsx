import { Image, Stack, Text } from "@chakra-ui/react";

import { imageStyle } from "../../styles/shared";
import { Project } from "./projects-data";

interface ProjectsRowProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectsRowProps) {
  return (
    <Stack
      spacing={5}
      width="1000px"
      sx={{
        borderRadius: "lg",
        padding: 10,
        height: "inherit",
        borderWidth: 0.5,
        borderColor: "ctc.lilac",
        backgroundColor: "ctc.offWhite",
        boxShadow: "5px 3px 20px 0px rgba(9, 7, 105, 0.20)",
      }}
    >
      <Image
        src={`/projects/${project.image}`}
        alt={`image of ${project.name}`}
        sx={{
          ...imageStyle,
          height: 250,
          paddingX: 25,
          paddingY: 12,
          objectFit: "contain",
          borderRadius: "lg",
          borderWidth: "0.5px",
          borderStyle: "solid",
          borderColor: "ctc.text",
        }}
      />

      <Stack>
        <Stack spacing={1}>
          <Text sx={{ fontSize: "xl", lineHeight: "normal" }}>
            {project.name}
          </Text>
          <Text sx={{ fontSize: "md", color: "ctc.subtitle" }}>
            {project.startYear}-{project.endYear}
          </Text>
        </Stack>

        <Text sx={{ fontSize: "lg" }}>{project.description}</Text>
      </Stack>
    </Stack>
  );
}
