import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { About } from "./About";
import { Mission } from "./mission/Mission";
import { Team } from "./team/Team";

export function AboutPage() {
  return (
    <Stack sx={pageStyle}>
      <About />
      <Mission />
      <Team />
    </Stack>
  );
}
