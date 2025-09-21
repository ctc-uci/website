import { Box, Heading, Stack, Text, Wrap } from "@chakra-ui/react";

import { headingStyle, pageStyle } from "../../styles/shared";
import { ProjectCard } from "./ProjectCard";
import { PREVIOUS_DATA, PROJECT_DATA } from "./projects-data";

export function ProjectsPage() {
  return (
    <Stack
      sx={{ ...pageStyle, paddingY: 20, position: "relative" }}
      spacing={{ base: 2.5, md: 5 }}
    >
      <Heading sx={headingStyle}>Projects</Heading>

      <Stack spacing={{ base: 10, md: 20 }}>
        <Stack spacing={5}>
          <Stack spacing={0}>
            <Text sx={{ fontSize: "xl" }}>Current Projects</Text>
            <Text sx={{ fontSize: "md", color: "ctc.subtitle" }}>
              2025-2026
            </Text>
          </Stack>

          <Wrap
            spacing={5}
            justify={"center"}
          >
            {PROJECT_DATA.map((project) => (
              <ProjectCard
                project={project}
                key={project.name + project.startYear + project.endYear}
              />
            ))}
          </Wrap>
        </Stack>

        <Stack spacing={5}>
          <Text sx={{ fontSize: "xl" }}>Previous Projects</Text>

          <Wrap
            spacing={5}
            justify={"center"}
          >
            {PREVIOUS_DATA.map((project) => (
              <ProjectCard
                project={project}
                key={project.name + project.startYear + project.endYear}
              />
            ))}
          </Wrap>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: 867,
          height: 785,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 867,
          background: "rgba(190, 169, 239, 0.40)",
          filter: "blur(250px)",

          position: "absolute",
          top: -350,
          left: 0,
          zIndex: -10,
        }}
      />

      <Box
        sx={{
          width: 665,
          height: 602,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 665,
          background: "rgba(190, 169, 239, 0.40)",
          filter: "blur(250px)",

          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: -10,
        }}
      />
    </Stack>
  );
}
