// import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
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
import hero from "/public/hero.webp";

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
          minWidth: { base: "unset", lg: "100%" },
        }}
      >
        <Stack
          spacing={{ base: 3, lg: 5 }}
          sx={{
            maxWidth: { base: "unset", lg: "50%" },
            paddingY: 0,
            textAlign: { base: "unset", sm: "center", lg: "unset" },
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
            marginX={{ base: "unset", sm: "auto", lg: "unset" }}
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
              xs: "90%",
              xssm: "70%",
              sm: "60%",
              lg: "42.5%",
            },
            objectFit: "contain",
          }}
        />
      </HStack>

      <Box
        sx={{
          width: 1942,
          height: 471,
          maxWidth: "100%",
          maxHeight: "20%",

          flexShrink: 0,
          borderRadius: 1942,
          background: "rgba(210, 194, 249, 0.60)",
          filter: "blur(200px)",

          position: "absolute",
          bottom: 0,
          zIndex: -10,
        }}
      />

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
