import { Box, HStack, Image, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

type DesktopNavbarProps = {
 pathname: string;
 navItems: { label: string; href: string }[];
};

function RecruitmentTooltip({ linkContent, href }: { linkContent: React.ReactNode, href: string }) {
 return (
  <Tooltip 
   key={href} 
   label={
    <Box textAlign="center" whiteSpace="pre-line">
      Applications{"\n"}reopen in the Fall!
    </Box>
   }
   offset={[0, 5]}
   openDelay={250}
   closeDelay={100}
   placement="bottom"
   bg="ctc.purple"
   color="white"
   borderRadius="md"
   px={4}
   py={2}
   motionProps={{
   initial: { opacity: 0, y: -8, scale: 0.9 },
   animate: { opacity: 1, y: 0, scale: 1.0 },
   exit: { opacity: 0, y: 6, scale: 1.0 },
    transition: { duration: 0.2, ease: "easeOut" },
   }}
  >
    <Box 
     as="span" 
     display="inline-block" 
     cursor="none"
     sx={{
      "*": {
      cursor: "s-resize !important",
     },
    }}
    >
      {linkContent}
    </Box>
  </Tooltip>
 )
}

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
     position="relative"
     overflow="hidden"
     _before={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bg: "purple.100",
      borderRadius: "2xl",
      transform: "scale(0)",
      transformOrigin: "center",
      zIndex: -1,
      opacity: 0,
     }}
     _hover={{
      bg: pathname === "/" ? "ctc.purple" : "transparent",
      _before: {
       transform: pathname === "/" ? "scale(0)" : "scale(1)",
       opacity: pathname === "/" ? 0 : 1,
      },
     }}
     transition="color 0.3s ease-out"
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
     const isWIP = index >= navItems.length - 1; // Last two items
     const linkContent = (
      <ChakraLink
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
       position="relative"
       overflow="hidden"
       _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "purple.100",
        borderRadius: "full",
        transform: "scale(0)",
        transformOrigin: "center",
        zIndex: -1,
        opacity: 0,
       }}
       _hover={{
        color: isWIP ? "gray.400" : isActive ? "white" : "ctc.purple",
        bg: isActive && !isWIP ? "ctc.purple" : "transparent",
        _before: {
         transform: isWIP || isActive ? "scale(0)" : "scale(1)",
         opacity: isWIP || isActive ? 0 : 1,
        },
       }}
       transition="color 0.3s ease-out"
       textDecoration="none"
       whiteSpace="nowrap"
       cursor={isWIP ? "not-allowed" : "pointer"}
      >
       {item.label}
      </ChakraLink>
     );

     return isWIP && item.href === "/Recruitment" ? (
      <RecruitmentTooltip linkContent={linkContent} href={item.href} key={item.href} />
     ) : (
      <Box key={item.href}>{linkContent}</Box>
     );
    })}
   </HStack>
  </Box>
 );
}

export default DesktopNavbar;
