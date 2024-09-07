import { Stack } from "@chakra-ui/react";

import { Hero } from "./hero/Hero";
import { WhoAreWe } from "./hero/WhoAreWe";
import { Stats } from "./Stats";

export function Landing() {
  return (
    <Stack sx={{ paddingX: { base: "20px", lg: "100px" } }}>
      <Hero />
      <Stats />
      <WhoAreWe />
    </Stack>
  );
}
