import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { Questions } from "./questions/Questions";
import { Roles } from "./Roles";
import { Timeline } from "./Timeline";

export function ApplyPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={6}
    >
      <Stack>Apply</Stack>

      <Roles />
      <Timeline />
      <Questions />
    </Stack>
  );
}
