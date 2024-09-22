import { Circle, Stack } from "@chakra-ui/react";

export function MenuBar({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      sx={{ justifyContent: "column", width: "fit-content" }}
      spacing={0}
    >
      <Stack
        sx={{
          backgroundColor: "#D7CAF6",
          borderTopRadius: "lg",
          height: 10,
          flexDirection: "row",
          alignItems: "center",
          padding: 2.5,
        }}
      >
        <Circle sx={{ backgroundColor: "ctc.purple", width: 3, height: 3 }} />
        <Circle sx={{ backgroundColor: "ctc.purple", width: 3, height: 3 }} />
        <Circle sx={{ backgroundColor: "ctc.purple", width: 3, height: 3 }} />
      </Stack>
      {children}
    </Stack>
  );
}
