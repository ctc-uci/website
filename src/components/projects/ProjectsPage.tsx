import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { headingStyle, pageStyle } from "../../styles/shared";
import { PROJECT_DATA } from "./projects-data";

export function ProjectsPage() {
  return (
    <Stack
      sx={{ ...pageStyle, paddingY: 20 }}
      spacing={{ base: 2.5, md: 5 }}
    >
      <Heading sx={headingStyle}>Projects</Heading>

      <Stack spacing={{ base: 10, md: 20 }}>
        <Stack spacing={5}>
          <Stack spacing={0}>
            <Text sx={{ fontSize: "xl" }}>Current Projects</Text>
            <Text sx={{ fontSize: "md", color: "ctc.subtitle" }}>
              2024-2025
            </Text>
          </Stack>
          <Box sx={{ overflowX: "scroll" }}>
            <HStack
              spacing={5}
              minWidth={"fit-content"}
            >
              {PROJECT_DATA.map((project) => (
                <Stack
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
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "lg",
                    }}
                  />
                  <Stack>
                    <Stack spacing={1}>
                      <Text sx={{ fontSize: "xl" }}>{project.name}</Text>
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
        </Stack>
        <Stack spacing={5}>
          <Text sx={{ fontSize: "xl" }}>Previous Projects</Text>
          <Box sx={{ overflowX: "scroll" }}>
            <HStack
              spacing={5}
              minWidth={"fit-content"}
            >
              {PROJECT_DATA.map((project) => (
                <Stack
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
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "lg",
                    }}
                  />
                  <Stack>
                    <Stack spacing={1}>
                      <Text sx={{ fontSize: "xl" }}>{project.name}</Text>
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
        </Stack>
      </Stack>
    </Stack>
  );
}
