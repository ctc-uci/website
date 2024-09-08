import { Link as ChakraLink, Icon, Stack, Text } from "@chakra-ui/react";

import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import type { Profile } from "./team-data";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Stack
      key={profile.name + profile.role + profile.team + profile.linkedin}
      sx={{
        width: 60,
        height: 60,
        paddingX: 3,
        paddingY: 4,
        borderRadius: "lg",
        backgroundColor: "ctc.secondary",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: profile.image,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "ctc.gray",
        position: "relative", // To position the overlay correctly
        _after: {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // Adjust the gradient as needed
          borderRadius: "inherit",
          zIndex: 0,
        },
      }}
      aria-label={`Image of ${profile.name}`}
      spacing={0}
    >
      <Text
        sx={{
          fontSize: "lg",
          marginTop: "auto",
          fontWeight: "medium",
          zIndex: 1,
        }}
      >
        {profile.name}
      </Text>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          zIndex: 1,
        }}
      >
        <Text sx={{ fontSize: "sm" }}>{profile.role}</Text>
        {profile.linkedin ? (
          <ChakraLink
            as={Link}
            to={profile.linkedin}
            sx={{ height: 5 }}
          >
            <Icon
              as={FaLinkedin}
              sx={{ color: "ctc.purple" }}
            />
          </ChakraLink>
        ) : null}
      </Stack>
    </Stack>
  );
}
