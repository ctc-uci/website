import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { LearnMoreButton } from "../shared/LearnMoreButton";

export function WhoAreWe() {
  return (
    <HStack spacing={200}>
      <Stack spacing={10}>
        <Stack spacing={5}>
          <Heading sx={{ fontSize: "4xl", color: "ctc.purple" }}>
            Who Are We?
          </Heading>
          <Text sx={{ color: "ctc.text" }}>
            Commit the Change is a UC Irvine club focused on creating end-to-end
            products for Southern California non-profit organizations.
          </Text>
          <Text sx={{ color: "ctc.text" }}>
            Each year, we partner with these nonprofits to design & develop
            mobile and web applications that enhance their ability to serve our
            communities.
          </Text>
        </Stack>

        <LearnMoreButton variant="ctc" />
      </Stack>

      <Image
        sx={{ width: 700, height: "100%", objectFit: "cover" }}
        src="https://bit.ly/dan-abramov"
        alt="CTC members at the beach"
      />
    </HStack>
  );
}
