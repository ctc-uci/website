import { Box, Button, Text, VStack } from "@chakra-ui/react";
export default function ClosingMessage() {
 return (
  <Box
   minH="100vh"
   w="100%"
   position="relative"
   bgGradient="linear(180deg, #FFF 0%, #E9D5FF 100%)"
   display="flex"
   alignItems="center"
   justifyContent="center"
   overflow="hidden"
  >
   <VStack spacing={4} alignItems="center" justifyContent="center">
    <Text fontSize="7xl" fontWeight="semibold" textAlign="center">
     Create Tech With Us!
    </Text>
    <Text fontSize="xl" textAlign="center">
     Applications only open in the Fall!
    </Text>
    <Button
     backgroundColor="ctc.purple"
     variant="purple"
     color="white"
     size="lg"
    >
     How to Join
    </Button>
   </VStack>
  </Box>
 );
}
