import { Image, Stack, Text } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";

export function ProjectsPage() {
  return (
    <Stack sx={pageStyle}>
      <Stack sx={{ borderRadius: "lg", padding: 10 }}>
        <Image alt="image of the BLANK project" />

        <Stack>
          <Stack spacing={1}>
            <Text sx={{ fontSize: "xl" }}>Organization Name</Text>
            <Text sx={{ fontSize: "md", color: "ctc.subtitle" }}>
              2024-2025
            </Text>
          </Stack>
          <Text sx={{ fontSize: "lg" }}>
            Description of the organization, and what they do. The description
            could potentially be very long, so there needs to be room to
            accommodate.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
