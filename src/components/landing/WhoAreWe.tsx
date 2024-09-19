import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import { headingStyle, imageStyle } from "../../styles/shared";
import { LearnMoreButton } from "../shared/LearnMoreButton";
import whoAreWe from "/public/who-are-we.jpeg";

export function WhoAreWe() {
  return (
    <Stack
      spacing={{ base: 10, mdlg: 75, xl: 150 }}
      sx={{
        flexDirection: { base: "column", mdlg: "row" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={{ base: 5, mdlg: 10 }}>
        <Stack spacing={5}>
          <Heading sx={headingStyle}>Who Are We?</Heading>
          <Text sx={{ fontSize: "lg" }}>
            Commit the Change is a UC Irvine club focused on creating end-to-end
            products for Southern California non-profit organizations.
          </Text>
          <Text sx={{ fontSize: "lg" }}>
            Each year, we partner with these nonprofits to design & develop
            mobile and web applications that enhance their ability to serve our
            communities.
          </Text>
        </Stack>

        <LearnMoreButton variant="ctc" />
      </Stack>

      <Image
        sx={{
          ...imageStyle,
          height: { base: 300, md: 350, mdlg: 500, xl: 600, "2xl": 700 },
          width: "100%",
          objectFit: "cover",
          borderRadius: "lg",
        }}
        src={whoAreWe}
        alt="CTC members at the beach"
      />
    </Stack>
  );
}
