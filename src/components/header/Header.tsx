import {
  CloseIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  IconProps,
} from "@chakra-ui/icons";
import {
  Collapse,
  ComponentWithAs,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

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
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "https://www.medium.com", // ! FIXME: should go to CTC medium
    icon: ExternalLinkIcon,
  },
  {
    label: "Work with Us",
    href: "/",
  },
];

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      sx={{
        minHeight: 70,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        backdropFilter: 0.4,
      }}
    >
      <HStack
        sx={{
          justifyContent: "space-between",
          flex: 1,
          minHeight: 70,
          borderBottom: "0.3px solid",
          borderColor: "ctc.subtitle",
          paddingX: { base: "20px", lg: "100px" },
        }}
      >
        <Image
          src="./ctc.svg"
          alt="ctc logo"
          sx={{ height: 7 }}
        />

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
        <MobileNav links={LINKS} />
      </Collapse>
    </Flex>
  );
};
