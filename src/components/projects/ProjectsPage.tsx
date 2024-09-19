import { Heading, Stack, Text } from "@chakra-ui/react";

import { headingStyle, pageStyle } from "../../styles/shared";
import { PROJECT_DATA } from "./projects-data";
import { ProjectsRow } from "./ProjectsRow";

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

          <ProjectsRow data={PROJECT_DATA} />
        </Stack>

        <Stack spacing={5}>
          <Text sx={{ fontSize: "xl" }}>Previous Projects</Text>

          <ProjectsRow data={PROJECT_DATA} />
        </Stack>
      </Stack>
    </Stack>
  );
}
