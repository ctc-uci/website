import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { imageStyle } from "../../styles/shared";
import { Project } from "./projects-data";

interface ProjectsRowProps {
  data: Project[];
}

export function ProjectsRow({ data }: ProjectsRowProps) {
  return (
    <Box
      sx={{
        overflowX: "scroll",
        scrollbarColor: "transparent transparent",
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
          <Stack
            spacing={5}
            sx={{
              borderRadius: "lg",
              padding: 10,
              width: 400,
              borderWidth: 0.5,
              borderColor: "ctc.lilac",
              backgroundColor: "ctc.offWhite",
              boxShadow: "5px 3px 20px 0px rgba(9, 7, 105, 0.20)",
            }}
            key={project.name + project.startYear + project.endYear}
          >
            <Image
              src="/people/kaylee-doliente.png"
              alt={`image of ${project.name}`}
              sx={{
                ...imageStyle,
                width: "100%",
                objectFit: "cover",
                borderRadius: "lg",
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
        ))}
      </HStack>
    </Box>
  );
}
