import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { Apply } from "./Apply";
import { Questions } from "./questions/Questions";
import { Roles } from "./roles/Roles";
import { Timeline } from "./timeline/Timeline";

export function ApplyPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={16}
    >
      <Apply />
      {/* <Roles /> */}
      <Timeline />
      <Questions />
    </Stack>
  );
}
