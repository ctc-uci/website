import React from "react";
import { Select, Box, Text } from "@chakra-ui/react";

interface DropdownControllerProps {
 labels: string[];
 activeTab: number;
 onTabChange: (index: number) => void;
}

export const DropdownController: React.FC<DropdownControllerProps> = ({
 labels,
 activeTab,
 onTabChange,
}) => {
 return (
  <Box mb={6} w="100%" maxW="300px" mx="auto">
   <Text
    fontSize="sm"
    fontWeight="medium"
    color="gray.600"
    mb={2}
    textAlign="center"
   >
    Select Team:
   </Text>
   <Select
    value={activeTab}
    onChange={(e) => onTabChange(parseInt(e.target.value))}
    bg="white"
    borderColor="gray.300"
    borderRadius="md"
    _focus={{
     borderColor: "blue.500",
     boxShadow: "0 0 0 1px blue.500",
    }}
    _hover={{
     borderColor: "gray.400",
    }}
   >
    {labels.map((label, index) => (
     <option key={index} value={index}>
      {label}
     </option>
    ))}
   </Select>
  </Box>
 );
};
