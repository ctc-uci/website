import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

import companyLogos from "../../public/company-logos.png";

export function Alumni() {
  return (
    <Stack>
      <Stack sx={{ position: "relative" }}>
        <Box
          sx={{
            height: { base: 300, md: 350 },
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "lg",
            background:
              "linear-gradient(0deg, rgba(62, 48, 97, 0.60) 0%, rgba(62, 48, 97, 0.60) 100%), rgb(211, 211, 211, 1) url('../../public/alumni.jpg') no-repeat center/cover",
            filter: "blur(1px)",
          }}
          aria-label="Image of CTC alumni (21-22)" // used in place of Image for the filter / image effects
        />
        <VStack
          spacing={5}
          sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: { base: "80%", md: "66%" },
            marginX: "auto",
            color: "ctc.white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Heading sx={{ fontSize: "4xl" }}>Where do our alumni work?</Heading>
          <Text sx={{ fontSize: "lg" }}>
            Commit the Change alumni pursue careers in tech fields, including
            software engineering, computer science, UI/UX design, product
            design, and product management.
          </Text>
        </VStack>
      </Stack>

      <Image
        src={companyLogos}
        sx={{
          backgroundSize: "cover",
          paddingX: { base: 0, md: 20 },
          paddingY: { base: 4, md: 12 },
        }}
      />
    </Stack>
  );
}
