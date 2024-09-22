import {
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
    <Stack spacing={10}>
      <Heading sx={headingStyle}>Our Projects</Heading>

      <IconCarousel />

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
