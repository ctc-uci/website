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

export const imageStyle = {
  pointerEvents: "none",
} satisfies SystemStyleObject;

export const buttonStyle = {
  paddingX: 8,
  paddingY: 2.5,
  fontSize: "lg",
  width: "fit-content",
} satisfies SystemStyleObject;

export const HEADER_HEIGHT = 70;

export const MAX_WIDTH = 1500;
export const MIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px)`;
