import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { headingStyle, imageStyle } from "../../styles/shared";
import about from "/public/about.jpeg";

export function About() {
  return (
    <Stack
      sx={{
        paddingY: 20,
        flexDirection: { base: "column", mdlg: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={{ base: 10, mdlg: 20 }}
    >
      <Stack spacing={5}>
        <Heading sx={headingStyle}>About Us</Heading>
        <Text sx={{ fontSize: "lg" }}>
          Founded in 2020, Commit the Change started as a small group of
          undergraduate students with a shared love for coding and volunteering
          for causes in their communities.
        </Text>
        <Text sx={{ fontSize: "lg" }}>
          After merging with Blueprint in 2021, Commit the Change is now an
          established student organization at UC Irvine with a team of skilled
          designers and developers.
        </Text>
      </Stack>

      <Box
        sx={{
          maxWidth: { base: "100%", mdlg: "50%" },
          minWidth: { base: "100%", mdlg: "50%" },
          borderRadius: "lg",
        }}
      >
        <Image
          src={about}
          alt="CTC members, in formal attire"
          sx={{
            ...imageStyle,
            minWidth: "100%",
            width: "100%",
            height: { base: 300, mdlg: 400 },
            objectFit: "cover",
            objectPosition: "bottom",
            borderRadius: "lg",
          }}
        />
      </Box>
    </Stack>
  );
}
