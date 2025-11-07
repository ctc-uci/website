import { Box, Text, Image, Link, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

import { Profile } from "../../constants/team-data";

interface ProfileCardProps {
 profile: Profile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
 return (
  <Box
   position="relative"
   borderRadius="lg"
   overflow="hidden"
   aspectRatio={{ base: ".5/.5", md: "1/1.5" }}
   boxShadow="lg"
   transition="transform 0.2s ease-in-out"
   _hover={{
    transform: "scale(1.02)",
   }}
  >
   <Link href={profile.linkedin} isExternal>
    <Image
     src={profile.image}
     alt={`${profile.name} profile picture`}
     width="100%"
     height="100%"
     objectFit="cover"
     fallbackSrc="/team/placeholder.jpg"
     loading="lazy"
    />

    {/* Overlay with gradient */}
    <Box
     position="absolute"
     bottom="0"
     left="0"
     right="0"
     bgGradient="linear(to-t, blackAlpha.900, transparent)"
     p={3}
     pt={6}
    >
     <VStack align="start" spacing={0.5}>
      <Text
       color="white"
       fontSize="sm"
       fontWeight="bold"
       lineHeight="1.2"
       noOfLines={2}
      >
       {profile.name}
      </Text>

      <Flex align="center">
       <Text color="white" fontSize="sm" fontWeight="medium" opacity={0.9}>
        {profile.role}
       </Text>
      </Flex>
     </VStack>
    </Box>
   </Link>
   {profile.linkedin && (
    <Link
     href={profile.linkedin}
     isExternal
     opacity={0.8}
     _hover={{ opacity: 1 }}
     transition="opacity 0.2s"
     color="white"
     position="absolute"
     top="2"
     right="2"
     borderRadius="md"
     boxShadow="md"
     bg="blackAlpha.500"
     p={1}
    >
     <FaLinkedin />
    </Link>
   )}
  </Box>
 );
};
