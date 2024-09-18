import { useState } from "react";

import { Heading, Image, Stack, Text, VStack, Wrap } from "@chakra-ui/react";

import { motion } from "framer-motion";

import {
  headingStyle,
  imageStyle,
  negativeMarginStyle,
} from "../../../styles/shared";
import { Values } from "./mission-values";
import mission from "/public/mission.jpeg";

type FiveBooleans = [boolean, boolean, boolean, boolean, boolean];

export function Mission() {
  const [flip, setFlip] = useState<FiveBooleans>([
    false,
    false,
    false,
    false,
    false,
  ]);

  /**
   * @see {@link https://codesandbox.io/p/sandbox/flip-card-framer-motion-or7kv} for where the flipping code was sourced
   */
  const handleFlip = (index: number) => {
    const newFlip = [...flip];
    newFlip[index] = !flip[index];
    setFlip(newFlip as FiveBooleans);
  };

  return (
    <Stack
      sx={{
        ...negativeMarginStyle,
        paddingY: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
      spacing={10}
    >
      <Image
        src={mission}
        sx={{
          ...imageStyle,
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
          {Values.map((value, index) => {
            const isFlipped = flip[index];

            return (
              <motion.div
                transition={{ duration: 0.7 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                key={value.value}
                style={{
                  width: 300,
                  height: 400,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "rgba(249, 249, 249, 0.8)",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  onClick={() => handleFlip(index)}
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <motion.div
                    transition={{ duration: 0.7 }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    style={{
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 24,
                      width: "100%",
                      height: "100%",
                      padding: 40,
                    }}
                  >
                    <Image
                      src={value.icon}
                      alt={value.value}
                      sx={{ width: 120, height: 120, pointerEvents: "none" }}
                    />
                    <Text sx={{ fontSize: "2xl" }}>{value.value}</Text>
                  </motion.div>

                  <motion.div
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: isFlipped ? 0 : 180 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      position: "absolute",
                      backfaceVisibility: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 24,
                      width: "100%",
                      height: "100%",
                      padding: 40,
                    }}
                  >
                    <Text sx={{ fontSize: "2xl" }}>{value.value}</Text>
                    <Text sx={{ fontSize: "lg" }}>{value.description}</Text>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </Wrap>
      </VStack>
    </Stack>
  );
}
