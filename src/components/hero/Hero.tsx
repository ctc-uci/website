import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ApplyButton } from "../header/ApplyButton";

export const Hero = () => {
  return (
    <Flex
      sx={{
        paddingX: { base: "20px", lg: "100px" },
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

        <HStack>
          <ApplyButton />
          <Button
            variant={"solid"}
            sx={{
              backgroundColor: "#DADADA",
              _hover: {
                bg: "#DADADA",
                opacity: 0.9,
              },
              _active: {
                bg: "#DADADA",
                opacity: 0.8,
              },
            }}
          >
            Learn More
          </Button>
        </HStack>
      </Stack>

      <Box sx={{ width: 700, backgroundColor: "ctc.purple", height: 600 }} />
    </Flex>
  );
};
