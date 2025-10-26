import {
 Box,
 useDisclosure,
 Drawer,
 DrawerOverlay,
 DrawerContent,
 DrawerCloseButton,
 DrawerHeader,
 DrawerBody,
 VStack,
 Text,
 IconButton,
} from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useScrollDirection } from "../../hooks/useScrollDirection";

type MobileNavbarProps = {
 pathname: string;
 navItems: { label: string; href: string }[];
};
function MobileNavbar({ pathname, navItems }: MobileNavbarProps) {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const scrollDirection = useScrollDirection();
 return (
  <>
   <Box
    position="fixed"
    top="0"
    left="0"
    right="0"
    zIndex={1000}
    bg="purple.200"
    px={4}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    transition="transform 0.3s ease-in-out"
    borderBottomRadius="sm"
    boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
    transform={
     scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)"
    }
   >
    {/* Home Logo */}
    <ChakraLink
     href="/"
     as={Link}
     display="flex"
     alignItems="center"
     justifyContent="center"
     borderRadius="2xl"
     w="40px"
     h="40px"
     _hover={{ opacity: 0.8 }}
     transition="opacity 0.2s"
    >
     <Image src="/assets/ctc.svg" alt="CTC Logo" width={32} height={32} />
    </ChakraLink>

    {/* Hamburger Menu Button */}
    <IconButton
     aria-label="Open menu"
     icon={<HamburgerIcon />}
     onClick={onOpen}
     variant="ctc.purple"
     size="lg"
    />
   </Box>

   {/* Mobile Drawer */}
   <Drawer isOpen={isOpen} onClose={onClose} placement="top">
    <DrawerOverlay />
    <DrawerContent>
     <DrawerCloseButton />
     <DrawerHeader bg="purple.200" borderBottom="1px" borderColor="purple.300">
      <Text fontSize="lg" fontWeight="bold">
       Commit the Change
      </Text>
     </DrawerHeader>
     <DrawerBody bg="purple.200" py={6}>
      <VStack spacing={4} align="stretch">
       {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
         <ChakraLink
          key={item.href}
          href={item.href}
          as={Link}
          color={isActive ? "white" : "gray.800"}
          fontWeight="500"
          fontSize="lg"
          bg={isActive ? "ctc.purple" : "transparent"}
          borderRadius="lg"
          px={6}
          py={4}
          textAlign="center"
          _hover={{
           color: isActive ? "white" : "ctc.purple",
           bg: isActive ? "ctc.purple" : "purple.100",
          }}
          transition="all 0.2s"
          textDecoration="none"
          onClick={onClose}
         >
          {item.label}
         </ChakraLink>
        );
       })}
      </VStack>
     </DrawerBody>
    </DrawerContent>
   </Drawer>
  </>
 );
}

export default MobileNavbar;
