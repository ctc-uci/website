"use client";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTypingProps {
 text: string;
 speed?: number; // milliseconds per character
 delay?: number; // delay before starting
 fontSize?: string;
 fontWeight?: string;
 color?: string;
 fontFamily?: string;
 lineHeight?: string;
 textAlign?: "left" | "center" | "right";
 onComplete?: () => void;
}

export const AnimatedTyping = ({
 text,
 speed = 30, // Very fast typing by default
 delay = 0,
 fontSize = "inherit",
 fontWeight = "inherit",
 color = "inherit",
 fontFamily = "inherit",
 lineHeight = "inherit",
 textAlign = "left",
 onComplete,
}: AnimatedTypingProps) => {
 const [displayedText, setDisplayedText] = useState("");
 const [isComplete, setIsComplete] = useState(false);

 useEffect(() => {
  if (delay > 0) {
   const delayTimer = setTimeout(() => {
    startTyping();
   }, delay);
   return () => clearTimeout(delayTimer);
  } else {
   startTyping();
  }
 }, [text, speed, delay]);

 const startTyping = () => {
  let currentIndex = 0;
  const interval = setInterval(() => {
   if (currentIndex < text.length) {
    setDisplayedText(text.slice(0, currentIndex + 1));
    currentIndex++;
   } else {
    clearInterval(interval);
    setIsComplete(true);
    onComplete?.();
   }
  }, speed);

  return () => clearInterval(interval);
 };

 return (
  <Text
   fontSize={fontSize}
   fontWeight={fontWeight}
   color={color}
   fontFamily={fontFamily}
   lineHeight={lineHeight}
   textAlign={textAlign}
   whiteSpace="pre-wrap"
  >
   {displayedText}
   {!isComplete && (
    <motion.span
     animate={{ opacity: [1, 0, 1] }}
     transition={{
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
     }}
    >
     |
    </motion.span>
   )}
  </Text>
 );
};
