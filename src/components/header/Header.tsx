import {
  CloseIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  IconProps,
} from "@chakra-ui/icons";
import {
  Center,
  Link as ChakraLink,
  Collapse,
  ComponentWithAs,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { HEADER_HEIGHT, imageStyle, MAX_WIDTH } from "../../styles/shared";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export type NavLink = {
  label: string;
  href: string;
  icon?: ComponentWithAs<"svg", IconProps>;
};

const LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Team",
    href: "/team",
  },
  // {
  //   label: "Career",
  //   href: "/career",
  // },
  {
    label: "Recruitment",
    href: "/recruitment",
  },
  // {
  //   label: "Blog",
  //   href: "https://medium.com/@committhechange.uci",
  //   icon: ExternalLinkIcon,
  // },
  {
    label: "Work with Us",
    href: "/work-with-us",
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleClickLink = () => {
    if (isOpen) {
      onToggle();
    }
  };

  return (
    <Center
      sx={{
        backgroundColor: "none",
        position: "absolute",
        top: "5",
        height: HEADER_HEIGHT,
        width: "100%",
        zIndex: "docked",
      }}
    >
      <Flex
        backgroundColor="purple.100"
        rounded="full"
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          // maxWidth: MAX_WIDTH,
        }}
      >
        <HStack
          spacing={100}
          sx={{
            justifyContent: "space-between",
            flex: 1,
            paddingY: 2.5,
            paddingX: { base: "20px", lg: "50px" },
            fontSize: "sm",
          }}
        >
          <ChakraLink
            as={Link}
            to={"/"}
            onClick={handleClickLink}
          >
            <Image
              src="./ctc.svg"
              alt="ctc logo"
              sx={{ ...imageStyle, height: 7 }}
            />
          </ChakraLink>

          <DesktopNav links={LINKS} />

          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon
                    w={3}
                    h={3}
                  />
                ) : (
                  <HamburgerIcon
                    w={5}
                    h={5}
                  />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </HStack>

        <Collapse
          in={isOpen}
          animateOpacity
        >
          <MobileNav
            links={LINKS}
            isOpen={isOpen}
            handleClickLink={handleClickLink}
          />
        </Collapse>
      </Flex>
    </Center>
  );
};
