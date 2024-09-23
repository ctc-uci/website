import {
  Box,
  Button,
  Link as ChakraLink,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { buttonStyle, headingStyle } from "../../styles/shared";
import { PROJECT_DATA } from "../projects/projects-data";
import { ProjectsRow } from "../projects/ProjectsRow";
import { IconCarousel } from "./projects/IconCarousel";

export function Projects() {
  return (
    <Stack
      spacing={10}
      sx={{ paddingY: 10 }}
    >
      <Heading sx={headingStyle}>Our Projects</Heading>

      <Box
        sx={{
          display: { base: "none", md: "flex" },
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <IconCarousel />
      </Box>

      <Stack spacing={5}>
        <ProjectsRow data={PROJECT_DATA} />

        <ChakraLink
          as={Link}
          to={"/projects"}
        >
          <Button
            variant={"ctc"}
            sx={buttonStyle}
          >
            <Text sx={{ fontSize: "lg" }}>View all Projects</Text>
          </Button>
        </ChakraLink>
      </Stack>
    </Stack>
  );
}
