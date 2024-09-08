import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { About } from "./About";

export function AboutPage() {
  return (
    <Stack sx={pageStyle}>
      <About />
    </Stack>
  );
}
