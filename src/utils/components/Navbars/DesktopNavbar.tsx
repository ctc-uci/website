import { Box, HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

type DesktopNavbarProps = {
 pathname: string;
 navItems: { label: string; href: string }[];
};
function DesktopNavbar({ pathname, navItems }: DesktopNavbarProps) {
 return (
  <Box
   position="absolute"
   top="20px"
   left="50%"
   transform="translateX(-50%)"
   zIndex={1000}
   bg="purple.200"
   borderRadius="full"
   px={{ base: 6, md: 8, lg: 10 }}
   py={1}
   minW={{ base: "80%", md: "60%", lg: "50%" }}
   fontSize="md"
  >
   <HStack
    spacing={{ base: 8, md: 12, lg: 15 }}
    justify="space-between"
    align="center"
   >
    {/* Home Logo - Fixed size */}
    <ChakraLink
     href="/"
     as={Link}
     display="flex"
     alignItems="center"
     justifyContent="center"
     bg={pathname === "/" ? "ctc.purple" : ""}
     borderRadius="2xl"
     px={2}
     w="64px"
     h="54px"
     minW="64px"
     minH="54px"
     maxW="64px"
     maxH="54px"
     _hover={{ opacity: 0.8 }}
     transition="opacity 0.2s"
    >
     {pathname === "/" ? (
      <Image
       src="/assets/ctc-white.svg"
       alt="CTC Logo"
       width={60}
       height={50}
      />
     ) : (
      <Image src="/assets/ctc.svg" alt="CTC Logo" width={60} height={50} />
     )}
    </ChakraLink>

    {navItems.map((item, index) => {
     const isActive = pathname === item.href;
     const isWIP = index >= navItems.length - 2; // Last two items
     return (
      <ChakraLink
       key={item.href}
       href={isWIP ? "#" : item.href}
       as={Link}
       color={isWIP ? "gray.400" : isActive ? "white" : "gray.800"}
       fontWeight="500"
       fontSize="md"
       bg={isActive && !isWIP ? "ctc.purple" : "transparent"}
       borderRadius="full"
       px={4}
       py={2}
       minW="80px"
       h="38px"
       display="flex"
       alignItems="center"
       justifyContent="center"
       _hover={{
        color: isWIP ? "gray.400" : isActive ? "white" : "ctc.purple",
        bg: isWIP ? "transparent" : isActive ? "ctc.purple" : "purple.100",
       }}
       transition="all 0.2s"
       textDecoration="none"
       whiteSpace="nowrap"
       cursor={isWIP ? "not-allowed" : "pointer"}
      >
       {item.label}
      </ChakraLink>
     );
    })}
   </HStack>
  </Box>
 );
}

export default DesktopNavbar;
