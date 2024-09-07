import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";

import { ApplyButton } from "../shared/ApplyButton";
import { LearnMoreButton } from "../shared/LearnMoreButton";

export const Hero = () => {
  return (
    <Flex
      sx={{
        paddingY: 150,
        justifyContent: "space-between",
        height: 750,
      }}
    >
      <Stack
        spacing={5}
        sx={{ maxWidth: "50%" }}
      >
        <Heading
          sx={{ color: "ctc.purple", fontSize: "8xl", lineHeight: "normal" }}
        >
          Commit the Change
        </Heading>
        <Text sx={{ fontSize: "4xl" }}>Creating tech for social good.</Text>

        <HStack spacing={5}>
          <ApplyButton />
          <LearnMoreButton />
        </HStack>
      </Stack>

      <Box sx={{ width: 700, backgroundColor: "ctc.purple", height: 600 }} />
    </Flex>
  );
};
