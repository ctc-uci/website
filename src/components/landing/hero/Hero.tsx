// import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  // Icon,
  Image,
  Stack,
  Text,
  // VStack,
} from "@chakra-ui/react";

// import { motion } from "framer-motion";

import { imageStyle, MIN_HEIGHT } from "../../../styles/shared";
import { ApplyButton } from "../../shared/ApplyButton";
import { LearnMoreButton } from "../../shared/LearnMoreButton";
import hero from "/public/hero.png";

export const Hero = () => {
  return (
    <HStack
      spacing={10}
      sx={{
        justifyContent: "center",
        height: MIN_HEIGHT,
        position: "relative",
      }}
    >
      <HStack
        spacing={0}
        sx={{
          flexDirection: { base: "column-reverse", lg: "row" },
          justifyContent: { base: "center", lg: "space-between" },
        }}
      >
        <Stack
          spacing={{ base: 3, lg: 5 }}
          sx={{
            maxWidth: { base: "unset", lg: "50%" },
            paddingY: 0,
            textAlign: { base: "unset", md: "center", lg: "unset" },
          }}
        >
          <Heading
            sx={{
              color: "ctc.purple",
              fontSize: { base: "55px", lg: "7xl", xl: "8xl" },
              lineHeight: "normal",
            }}
          >
            Commit the Change
          </Heading>
          <Text sx={{ fontSize: { base: "22px", lg: "3xl", xl: "4xl" } }}>
            Creating tech for social good.
          </Text>

          <HStack
            spacing={{ base: 2.5, lg: 5 }}
            marginTop={{ base: 8, lg: "unset" }}
            marginX={{ base: "unset", md: "auto", lg: "unset" }}
          >
            <ApplyButton />
            <LearnMoreButton />
          </HStack>
        </Stack>

        <Image
          src={hero}
          alt="Hero Image"
          sx={{
            ...imageStyle,
            maxWidth: {
              base: "100%",
              xs: "65%",
              xssm: "70%",
              sm: "60%",
              lg: "42.5%",
            },
            objectFit: "contain",
          }}
        />
      </HStack>

      {/* <VStack
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
      </VStack> */}
    </HStack>
  );
};
