import React, { useState } from "react";

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  VStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { imageStyle, pageStyle } from "../../styles/shared";
import { Hero } from "../landing/hero/Hero";
import { SideSection } from "../section/SideSection";
import designer from "/public/icons/designer.png";
import developer from "/public/icons/developer.png";

interface FlipCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const FlipCard = ({ image, title, description, alt }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      width="300px"
      height="250px"
      cursor="pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card - Design/Icon */}
        <VStack
          position="absolute"
          width="100%"
          height="100%"
          borderRadius="lg"
          boxShadow="lg"
          paddingX={8}
          paddingY={6}
          backgroundColor="white"
          justifyContent="center"
          alignItems="center"
          border="1px solid"
          borderColor="gray.200"
          sx={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt={alt}
            width={120}
            height={120}
            objectFit="contain"
          />
          <Text
            fontSize="xl"
            fontWeight={600}
            color="ctc.purple"
          >
            {title}
          </Text>
        </VStack>

        {/* Back of card - Description */}
        <VStack
          position="absolute"
          width="100%"
          height="100%"
          borderRadius="lg"
          boxShadow="lg"
          paddingX={6}
          paddingY={6}
          backgroundColor="ctc.purple"
          justifyContent="center"
          alignItems="center"
          sx={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Text
            fontSize="lg"
            fontWeight={500}
            color="white"
            textAlign="center"
            lineHeight="1.6"
          >
            {description}
          </Text>
        </VStack>
      </motion.div>
    </Box>
  );
};

interface TimelineCardProps {
  date?: string;
  description: string;
}

const TimelineCard = ({ date, description }: TimelineCardProps) => {
  return (
    <Step>
      <StepIndicator>
        <StepStatus
          complete={""}
          incomplete={""}
          active={""}
        />
      </StepIndicator>
      <Box
        flexShrink="0"
        boxShadow="lg"
        height="fit-content"
        paddingY={4}
        paddingX={12}
        borderRadius="lg"
        textAlign="center"
        minWidth={400}
        marginBottom={4}
      >
        <StepTitle>{date}</StepTitle>
        <StepDescription
          fontSize="lg"
          fontWeight={500}
          color="black"
        >
          {description}
        </StepDescription>
      </Box>
      <StepSeparator />
    </Step>
  );
};

export function RecruitmentPage() {
  return (
    <Stack sx={pageStyle}>
      <Hero>
        <VStack>
          <Text
            fontSize="7xl"
            fontWeight={600}
          >
            Recruitment
          </Text>
          <Text fontSize="xl">Applications open in the Fall!</Text>
        </VStack>
      </Hero>
      <SideSection>
        <VStack spacing={10}>
          <Text
            fontSize="5xl"
            fontWeight={500}
          >
            We're looking for...
          </Text>
          <HStack spacing={100}>
            <FlipCard
              image={designer}
              title="Designers"
              description="Create beautiful and intuitive user experiences. Work with Figma, design systems, and user research to bring ideas to life."
              alt="designer"
            />
            <FlipCard
              image={developer}
              title="Developers"
              description="Build robust and scalable applications. Work with modern frameworks, databases, and cloud technologies to create impactful solutions."
              alt="developer"
            />
          </HStack>
        </VStack>
      </SideSection>
      <SideSection>
        <VStack spacing={8}>
          <Text
            fontSize="5xl"
            fontWeight={500}
          >
            Timeline
          </Text>
          <Stepper
            index={-1}
            orientation="vertical"
            height="800px"
            gap="0"
            colorScheme="purple"
            sx={{
              "& .chakra-step__indicator": {
                backgroundColor: "ctc.purple",
                borderColor: "ctc.purple",
              },
              "& .chakra-step__separator": {
                backgroundColor: "ctc.purple",
              },
            }}
          >
            <TimelineCard
              date="September 21, 2025"
              description="Applications Open at 12am"
            />

            <TimelineCard
              date="September 22, 2025"
              description="CTC at AIF"
            />
            <TimelineCard
              date="September 25, 2025"
              description="Meet the Club"
            />
            <TimelineCard
              date="September 26, 2025"
              description="Game Night"
            />
            <TimelineCard
              date="October 5-10, 2025"
              description="Skill Showcase"
            />
            <TimelineCard
              date="October 13-15, 2025"
              description="Coffee Chat"
            />
            <TimelineCard
              date="October 20, 2025"
              description="Final Decisions"
            />
          </Stepper>
        </VStack>
      </SideSection>
    </Stack>
  );
}
