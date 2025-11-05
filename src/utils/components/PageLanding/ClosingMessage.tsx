import { Box, Button, Text, VStack } from "@chakra-ui/react";

import { RECRUITMENT_OPEN } from "@/utils/Settings";

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
    <Text
     fontSize={{ base: "4xl", sm: "7xl" }}
     fontWeight="semibold"
     textAlign="center"
    >
     Create Tech With Us!
    </Text>
    <Text fontSize={{ base: "xs", sm: "xl" }} textAlign="center">
     {RECRUITMENT_OPEN
      ? "Applications are currently open!"
      : "*Applications are currently closed and will reopen in the Fall"}
    </Text>
    <Button
     backgroundColor="ctc.purple"
     variant="purple"
     color="white"
     size="lg"
     as="a"
     href="/Recruitment"
    >
     How to Join
    </Button>
   </VStack>
  </Box>
 );
}
