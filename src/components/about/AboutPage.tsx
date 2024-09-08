import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { About } from "./About";
import { Team } from "./team/Team";

export function AboutPage() {
  return (
    <Stack sx={pageStyle}>
      <About />
      <Team />
    </Stack>
  );
}
