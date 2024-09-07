import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface LearnMoreButtonProps extends ButtonProps {
  variant?: "ctc" | "ctc.secondary";
}

export function LearnMoreButton({
  variant = "ctc.secondary",
}: LearnMoreButtonProps) {
  return (
    <Button
      variant={variant}
      sx={{
        paddingX: 8,
        paddingY: 2.5,
        width: "fit-content",
      }}
    >
      <Text sx={{ fontWeight: 600, fontSize: "xl" }}>Learn More</Text>{" "}
    </Button>
  );
}
