import { Box } from "@chakra-ui/react";

export default function BreakText() {
 return <Box display={{ base: "none", sm: "block" }} as="br" />;
}
