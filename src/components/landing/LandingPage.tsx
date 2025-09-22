import { ReactNode, useEffect, useRef, useState } from "react";

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

import { HERO_GRADIENT, imageStyle, pageStyle } from "../../styles/shared";
import { FadeInText_BottomUp } from "../animated/FadeInText_BottomUp";
import { ProjectCard } from "../projects/ProjectCard";
import {
  PREVIOUS_DATA,
  Project,
  PROJECT_DATA,
} from "../projects/projects-data";
import { SideSection } from "../section/SideSection";
import { Hero } from "./hero/Hero";
import { Stats } from "./Stats";

interface VerticalInfiniteScrollProps {
  iconSize?: number;
  speed?: number;
  containerHeight?: number;
}

const VerticalInfiniteScroll = ({
  iconSize = 200,
  speed = 1,
  containerHeight = 400,
}: VerticalInfiniteScrollProps) => {
  // Company icons in order
  const companyIcons = [
    "amazon.png",
    "khan-academy.png",
    "meta.png",
    "cisco.png",
    "visa.png",
    "tableu.png",
    "airtable.png",
    "google.png",
    "microsoft.png",
    "zillow.png",
    "cox-automotive.png",
    "qualtrics.png",
  ];

  // Duplicate the list for seamless infinite scroll
  const duplicatedIcons = [...companyIcons, ...companyIcons];

  return (
    <Box
      width={`${iconSize}px`}
      height={`${containerHeight}px`}
      overflow="hidden"
      position="relative"
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        animate={{
          y: [0, -companyIcons.length * (iconSize + 20)],
        }}
        transition={{
          duration: speed * 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedIcons.map((icon, index) => (
          <Box
            key={`${icon}-${index}`}
            width={`${iconSize}px`}
            height={`${iconSize}px`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={`/alumni/careers/${icon}`}
              alt={`${icon.replace(".png", "")} logo`}
              width={`${iconSize - 16}px`}
              height={`${iconSize - 16}px`}
              objectFit="contain"
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

interface HorizontalScrollCardsProps {
  data: Project[];
  visibleCards?: number;
  cardWidth?: number;
  cardHeight?: number;
}

const HorizontalScrollCards = ({
  data,
  visibleCards = 3,
  cardWidth = 280,
  cardHeight = 380,
}: HorizontalScrollCardsProps) => {
  return (
    <Box
      width="100%"
      overflowX="auto"
      overflowY="hidden"
      sx={{
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "gray.100",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.400",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "gray.500",
          },
        },
      }}
    >
      <HStack
        spacing={4}
        paddingY={2}
        minWidth={`${data.length * (cardWidth + 16)}px`}
      >
        {data.map((project, index) => (
          <Box
            key={`${project.name}-${index}`}
            width={`${cardWidth}px`}
            height={`${cardHeight}px`}
            flexShrink={0}
            sx={{
              scrollSnapAlign: "start",
            }}
          >
            <Stack
              height="100%"
              backgroundColor="white"
              borderRadius="lg"
              padding={4}
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
              justifyContent="space-between"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-2px)",
                transition: "all 0.2s ease",
              }}
            >
              <Image
                src={`/projects/${project.image}`}
                alt={`image of ${project.name}`}
                sx={{
                  ...imageStyle,
                  height: 200,
                  objectFit: "contain",
                }}
              />
              <Stack spacing={2}>
                <Text
                  fontSize="xs"
                  color="gray.500"
                  fontWeight={500}
                >
                  {project.startYear}-{project.endYear}
                </Text>
                <Text
                  fontSize="lg"
                  fontWeight={600}
                  lineHeight="shorter"
                >
                  {project.name}
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.600"
                  noOfLines={3}
                  lineHeight="1.4"
                >
                  {project.description}
                </Text>
              </Stack>
            </Stack>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

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
      width="100%"
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
        <VerticalInfiniteScroll
          iconSize={144}
          speed={100}
          containerHeight={400}
        />
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
        <HStack
          alignItems="center"
          justifyContent="center"
          width="97vw"
        >
          <Stack
            fontSize="7xl"
            spacing={0}
            letterSpacing="-0.4px"
            lineHeight="92px"
            width="50%"
            justifyContent="end"
            alignItems="center"
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
          <Box width="45%">
            <HorizontalScrollCards
              data={PREVIOUS_DATA}
              cardWidth={300}
              cardHeight={380}
            />
          </Box>
        </HStack>
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
