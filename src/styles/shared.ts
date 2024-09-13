import { SystemStyleObject } from "@chakra-ui/styled-system";

export const pageStyle = {
  paddingLeft: { base: "20px", lg: "100px" },
  paddingRight: { base: "20px", lg: "100px" },
  width: "100%",
} satisfies SystemStyleObject;

export const negativeMarginStyle = {
  marginLeft: { base: "-20px", lg: "-100px" },
  marginRight: { base: "-20px", lg: "-100px" },
} satisfies SystemStyleObject;

export const headingStyle = {
  color: "ctc.purple",
  fontSize: "4xl",
} satisfies SystemStyleObject;

export const MAX_WIDTH = 1500;
