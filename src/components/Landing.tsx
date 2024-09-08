import { Stack } from "@chakra-ui/react";

import { Alumni } from "./Alumni";
import { Hero } from "./hero/Hero";
import { Projects } from "./Projects";
import { Stats } from "./Stats";
import { WhoAreWe } from "./WhoAreWe";

export function Landing() {
  return (
    <Stack sx={{ paddingX: { base: "20px", lg: "100px" } }}>
      <Hero />
      <Stats />
      <WhoAreWe />
      <Projects />
      <Alumni />
    </Stack>
  );
}
