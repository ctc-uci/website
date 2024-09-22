import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

import {
  headingStyle,
  imageStyle,
  negativeMarginStyle,
} from "../../styles/shared";
import apply from "/public/apply.svg";

export function Apply() {
  return (
    <VStack sx={{ position: "relative" }}>
      <Stack
        sx={{
          textAlign: "center",
          marginTop: { base: 10, md: 20 },
          maxWidth: 700,
          marginX: "auto",
        }}
        spacing={{ base: 5, md: 10 }}
      >
        <Stack spacing={0}>
          <Text sx={{ fontSize: "xl", lineHeight: "normal" }}>
            Hey UC Irvine Students,
          </Text>
          <Heading
            sx={{
              ...headingStyle,
              fontSize: { base: "5xl", sm: "6xl" },
              lineHeight: "normal",
            }}
          >
            Want to join our team?
          </Heading>
        </Stack>

        <Stack spacing={0}>
          <Text sx={{ fontSize: { base: "lg", md: "xl" }, fontWeight: "bold" }}>
            Recruitment is open!
          </Text>
          <Text sx={{ fontSize: { base: "lg", md: "xl" } }}>
            We recruit new developers and designers at the beginning of every
            school year. Learn more about the roles and application process
            below.
          </Text>
        </Stack>
      </Stack>

      <Box sx={negativeMarginStyle}>
        <Image
          src={apply}
          alt={"members of CTC smiling for a group photo"}
          sx={{
            ...imageStyle,
            paddingLeft: { base: "unset", xs: "4%" }, // ! this is bad code
            minHeight: 300,
            objectFit: "cover",
          }}
        />
      </Box>

      <Box
        sx={{
          width: 1942,
          height: 471,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 1942,
          background: "rgba(210, 194, 249, 0.60)",
          filter: "blur(200px)",

          position: "absolute",
          bottom: 0,
          zIndex: -10,
        }}
      />
    </VStack>
  );
}
