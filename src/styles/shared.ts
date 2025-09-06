import { SystemStyleObject } from "@chakra-ui/styled-system";

export const pageStyle = {
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

export const heroSize = {
  minHeight: "100vh",
  width: "100%",
} satisfies SystemStyleObject;

export const HEADER_HEIGHT = 70;

export const MAX_WIDTH = 1500;
export const MIN_HEIGHT = `calc(100vh - ${HEADER_HEIGHT}px)`;
export const HERO_GRADIENT =
  "linear-gradient(180deg, var(--whiteAlpha-0, #FFF) 0%, var(--purple-200, #E9D5FF) 100%)";
