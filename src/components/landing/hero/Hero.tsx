import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { imageStyle } from "../../../styles/shared";
import { ApplyButton } from "../../shared/ApplyButton";
import { LearnMoreButton } from "../../shared/LearnMoreButton";
import hero from "/public/hero.png";

export const Hero = () => {
  return (
    <HStack
      spacing={20}
      sx={{
        justifyContent: "space-between",
        height: 750,
        position: "relative",
      }}
    >
      <Stack
        spacing={5}
        sx={{ maxWidth: "50%", paddingY: 0 }}
      >
        <Heading
          sx={{
            color: "ctc.purple",
            fontSize: { base: "4xl", lg: "7xl", xl: "8xl" },
            lineHeight: "normal",
          }}
        >
          Commit the Change
        </Heading>
        <Text sx={{ fontSize: "4xl" }}>Creating tech for social good.</Text>

        <HStack spacing={5}>
          <ApplyButton />
          <LearnMoreButton />
        </HStack>
      </Stack>

      <Image
        src={hero}
        alt="Hero Image"
        sx={{
          ...imageStyle,
          maxWidth: "45%",
          height: "80%",
          objectFit: "contain",
        }}
      />

      <VStack
        sx={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Text>Learn More</Text>
        <motion.div
          animate={{
            y: [-5, 0, -5], // Animates the element up and down
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Icon as={ChevronDownIcon} />
        </motion.div>
      </VStack>
    </HStack>
  );
};
