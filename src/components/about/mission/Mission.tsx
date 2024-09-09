import { Heading, Image, Stack, Text, VStack, Wrap } from "@chakra-ui/react";

import { headingStyle } from "../../../styles/shared";
import { Values } from "./mission-values";

export function Mission() {
  return (
    <Stack
      sx={{
        paddingY: 100,
        marginX: { base: -5, lg: -100 },
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      spacing={10}
    >
      <Image
        src={"../../../public/mission.jpeg"}
        sx={{
          position: "absolute",
          top: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          maxHeight: { base: "100%", xl: 1250 },
          objectFit: "cover",
          borderRadius: "lg",
        }}
      />

      <VStack
        spacing={5}
        sx={{ maxWidth: "66%", textAlign: "center" }}
      >
        <Heading sx={{ ...headingStyle, color: "ctc.gray" }}>
          Our Mission
        </Heading>
        <Text sx={{ fontSize: "xl", color: "ctc.gray" }}>
          At Commit the Change, our mission is to build end-to-end, high-quality
          products for non-profit organizations, while empowering UC Irvine
          designers and developers to create technology with purpose.
        </Text>
      </VStack>

      <VStack
        sx={{ maxWidth: "80%", textAlign: "center" }}
        spacing={5}
      >
        <Heading sx={{ ...headingStyle, color: "ctc.gray" }}>
          Our Values
        </Heading>

        <Wrap
          spacing={5}
          justify={"center"}
        >
          {Values.map((value) => (
            <VStack
              sx={{
                width: 300,
                height: 400,
                borderRadius: "lg",
                padding: 10,
                backgroundColor: "rgba(249, 249, 249, 0.8)",
                justifyContent: "center",
                alignItems: "center",
              }}
              spacing={6}
              key={value.value}
            >
              <Image
                src={value.icon}
                alt={value.value}
                sx={{ width: 120, height: 120 }}
              />
              <Text sx={{ fontSize: "2xl" }}>{value.value}</Text>
            </VStack>
          ))}
        </Wrap>
      </VStack>
    </Stack>
  );
}
