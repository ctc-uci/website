import { Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { headingStyle, pageStyle } from "../../styles/shared";

export function ApplyPage() {
  return (
    <Stack sx={pageStyle}>
      <Stack>Apply</Stack>

      <Stack spacing={10}>
        <Heading sx={headingStyle}>Roles</Heading>

        <Stack
          sx={{ flexDirection: { base: "column", lg: "row" } }}
          spacing={20}
        >
          <Stack spacing={10}>
            <Image />

            <Stack spacing={5}>
              <Text sx={{ fontWeight: "semibold", text: "xl" }}>Designer</Text>

              <Text>
                Designers will work in a cross functional team, using Figma and
                the design process (research, wireframing, prototyping,
                usability testing) to create innovative designs for non-profit
                organizations.
              </Text>
            </Stack>

            <Button variant={"ctc"}>Apply as Designer</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
