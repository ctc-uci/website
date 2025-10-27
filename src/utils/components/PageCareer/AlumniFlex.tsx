import { VStack, Text } from "@chakra-ui/react";

import { CareersMarque } from "../AnimationUtils";

function AlumniFlex() {
 return (
  <VStack spacing={6} py={10} width="full">
   <Text fontSize="6xl" fontWeight="semibold" textAlign="center">
    Alumni Destinations
   </Text>
   <CareersMarque orientation="horizontal" height="120px" />
  </VStack>
 );
}

export default AlumniFlex;
