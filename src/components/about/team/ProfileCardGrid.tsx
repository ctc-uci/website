import { SimpleGrid } from "@chakra-ui/react";

export function ProfileCardGrid({ children }: { children: React.ReactNode }) {
  return (
    <SimpleGrid
      columns={{ base: 1, xssm: 2, mdlg: 3, xl: 4, "2xl": 5 }}
      spacing={5}
      sx={{
        marginRight: "auto",
        marginLeft: { base: "auto", mdlg: "unset" },
      }}
    >
      {children}
    </SimpleGrid>
  );
}
