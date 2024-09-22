import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { headingStyle, imageStyle } from "../../styles/shared";
import about from "/public/about.jpg";

export function About() {
  return (
    <Stack
      sx={{
        paddingY: 20,
        flexDirection: { base: "column", mdlg: "row" },
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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

      <Box
        sx={{
          width: 867,
          height: 785,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 867,
          background: "rgba(190, 169, 239, 0.40)",
          filter: "blur(250px)",

          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -10,
        }}
      />

      <Box
        sx={{
          width: 867,
          height: 785,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 867,
          background: "rgba(190, 169, 239, 0.40)",
          filter: "blur(200px)",

          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: -10,
        }}
      />
    </Stack>
  );
}
