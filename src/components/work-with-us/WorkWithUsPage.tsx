import {
  Button,
  Link as ChakraLink,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import {
  headingStyle,
  imageStyle,
  negativeMarginStyle,
  pageStyle,
} from "../../styles/shared";
import workWithUs from "/public/work-with-us.svg";

export function WorkWithUsPage() {
  return (
    <Grid
      sx={{
        ...pageStyle,
        paddingY: 10,
        overflowX: "hidden",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
      }}
    >
      <Stack spacing={{ base: 5, md: 10 }}>
        <Heading sx={headingStyle}>Hi Nonprofits!</Heading>
        <Stack
          spacing={5}
          sx={{ fontSize: "xl" }}
        >
          <Text>
            CTC works with Nonprofit Organizations during the school year (Sept
            - Jun) to develop software products that will assist organizations
            with their mission.
          </Text>
          <Text>
            We start our partnerships with non-profits in the summer, but feel
            free to reach out at any time.
          </Text>
          <Text>
            Email us at{" "}
            <Text
              as={"span"}
              sx={{ textDecoration: "underline", textUnderlineOffset: 2 }}
            >
              ctc@uci.edu
            </Text>
            .
          </Text>
        </Stack>

        <HStack spacing={5}>
          <ChakraLink
            as={Link}
            to={"mailto:ctc@uci.edu"}
          >
            <Button variant={"ctc"}>Contact Us</Button>
          </ChakraLink>
          <ChakraLink
            as={Link}
            target="_blank"
          >
            <Button variant={"ctc.secondary"}>View our Portfolio</Button>
          </ChakraLink>
        </HStack>
      </Stack>

      <Image
        src={workWithUs}
        alt="large ctc logo"
        sx={{
          ...imageStyle,
          marginLeft: "auto",
          marginRight: { ...negativeMarginStyle["marginRight"], xl: "unset" },
          width: "80%",
          display: { base: "none", md: "flex" },
          objectFit: "cover",
        }}
      />
    </Grid>
  );
}
