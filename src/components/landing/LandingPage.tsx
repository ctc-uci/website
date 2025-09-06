import { ReactNode, useRef } from "react";

import {
  Box,
  BoxProps,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { motion, useInView } from "framer-motion";

import { HERO_GRADIENT, pageStyle } from "../../styles/shared";
import { FadeInText_BottomUp } from "../animated/FadeInText_BottomUp";
import { SideSection } from "../section/SideSection";
import { Hero } from "./hero/Hero";
import { Stats } from "./Stats";

interface LandingPageIconBoxProps extends BoxProps {
  children: ReactNode;
  rotation?: string;
  positionOverride?: {
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
  };
  fadeInDelay?: number;
  fadeInDuration?: number;
}

const LandingPageIconBox = ({
  children,
  rotation = "rotate(-10deg)",
  positionOverride = { left: "15%", top: "20%" },
  fadeInDelay = 0,
  fadeInDuration = 0.6,
  ...boxProps
}: LandingPageIconBoxProps) => {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true });

  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }
      }
      transition={{
        duration: fadeInDuration,
        delay: fadeInDelay,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        left: positionOverride.left,
        top: positionOverride.top,
        right: positionOverride.right,
        bottom: positionOverride.bottom,
        zIndex: 0,
      }}
    >
      <Box
        width="124px"
        height="124px"
        backgroundColor="ctc.purple"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        p={30}
        transform={rotation}
        {...boxProps}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export function LandingPage() {
  return (
    <Stack
      sx={pageStyle}
      spacing={0}
    >
      <Hero>
        <VStack spacing={"20px"}>
          <LandingPageIconBox
            rotation="rotate(-10deg)"
            positionOverride={{ left: "15%", top: "20%" }}
            fadeInDelay={0}
            fadeInDuration={0.8}
          >
            <Image
              src="/icons/code.svg"
              alt="Code Icon"
              width="100%"
              height="100%"
            />
          </LandingPageIconBox>

          <LandingPageIconBox
            rotation="rotate(15deg)"
            positionOverride={{ right: "20%", top: "20%" }}
            fadeInDelay={0.2}
            fadeInDuration={0.8}
          >
            <Image
              src="/icons/heart-handshake.svg"
              alt="Heart Handshake Icon"
              width="100%"
              height="100%"
            />
          </LandingPageIconBox>

          <LandingPageIconBox
            rotation="rotate(-15deg)"
            positionOverride={{ right: "10%", bottom: "20%" }}
            fadeInDelay={0.4}
            fadeInDuration={0.8}
          >
            <Image
              src="/icons/heart-handshake.svg"
              alt="Heart Handshake Icon"
              width="100%"
              height="100%"
            />
          </LandingPageIconBox>

          <LandingPageIconBox
            rotation="rotate(13deg)"
            positionOverride={{ left: "20%", bottom: "20%" }}
            fadeInDelay={0.6}
            fadeInDuration={0.8}
          >
            <Image
              src="/icons/mouse-pointer.svg"
              alt="Mouse Pointer Icon"
              width="100%"
              height="100%"
            />
          </LandingPageIconBox>

          <Text fontSize="xl">EST. 2020</Text>
          <Text
            fontSize="7xl"
            fontWeight={600}
            textAlign="center"
            lineHeight="shorter"
          >
            Commit The
            <br />
            Change
          </Text>
          <Text fontSize="xl">Create tech for social good.</Text>
          <Button variant="ctc">Learn More</Button>
        </VStack>
      </Hero>

      <SideSection>
        <HStack spacing={180}>
          <FadeInText_BottomUp>
            <Stack
              fontSize="7xl"
              spacing={0}
              letterSpacing="-0.4px"
              lineHeight="92px"
            >
              <Text>Our</Text>
              <Text
                color="ctc.purple"
                fontWeight={600}
              >
                Impact.
              </Text>
            </Stack>
          </FadeInText_BottomUp>
          <Box>
            <Stats />
          </Box>
        </HStack>
      </SideSection>

      <SideSection>
        <FadeInText_BottomUp>
          <Stack
            fontSize="7xl"
            spacing={0}
            letterSpacing="-0.4px"
            lineHeight="92px"
          >
            <Text>Our</Text>
            <Text
              color="ctc.purple"
              fontWeight={600}
            >
              Legacy.
            </Text>
          </Stack>
        </FadeInText_BottomUp>
      </SideSection>

      <SideSection>
        <Stack
          fontSize="7xl"
          spacing={0}
          letterSpacing="-0.4px"
          lineHeight="92px"
        >
          <FadeInText_BottomUp>
            <Text>Our</Text>
            <Text
              color="ctc.purple"
              fontWeight={600}
            >
              Work.
            </Text>
          </FadeInText_BottomUp>
        </Stack>
      </SideSection>

      <Box
        sx={{
          background: HERO_GRADIENT,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VStack spacing={5}>
          <Text
            fontSize="7xl"
            fontWeight={600}
            textAlign="center"
            lineHeight="shorter"
          >
            Create Tech With Us!
          </Text>
          <Text fontSize="xl">Applications open in the Fall!</Text>
          <Button variant="ctc">How To Join</Button>
        </VStack>
      </Box>
    </Stack>
  );
}
