import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { Questions } from "./questions/Questions";
import { Roles } from "./Roles";
import { Timeline } from "./timeline/Timeline";

export function ApplyPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={16}
    >
      <Stack>Apply</Stack>

      <Roles />
      <Timeline />
      <Questions />
    </Stack>
  );
}
