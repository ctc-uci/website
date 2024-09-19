import { Stack } from "@chakra-ui/react";

import { pageStyle } from "../../styles/shared";
import { Alumni } from "./Alumni";
import { Hero } from "./hero/Hero";
import { Projects } from "./Projects";
import { Stats } from "./Stats";
import { WhoAreWe } from "./WhoAreWe";

export function LandingPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={16}
    >
      {/* <Hero /> */}
      <Stats />
      <WhoAreWe />
      <Projects />
      <Alumni />
    </Stack>
  );
}
