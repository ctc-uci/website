"use client";
import { Box, Image, Text, List, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface FlippableCardProps {
 frontImage?: string;
 backImage?: string;
 backText?: string;
 backTitle?: string;
 backBullets?: string[];
 label?: string;
}

export default function FlippableCard({
 frontImage,
 backImage,
 backText,
 backTitle,
 backBullets,
 label,
}: FlippableCardProps) {
 const [isFlipped, setIsFlipped] = useState(false);

 return (
  <Box
   width={{ base: "100%", md: "421px" }}
   maxW="421px"
   height={{ base: "auto", md: "354px" }}
   minH={{ base: "300px", md: "354px" }}
   cursor="pointer"
   onClick={() => setIsFlipped(!isFlipped)}
   flexShrink={0}
   style={{ perspective: "1000px" }}
  >
   <motion.div
    style={{
     width: "100%",
     height: "100%",
     position: "relative",
     transformStyle: "preserve-3d",
    }}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
   >
    {/* Front */}
    <Box
     position="absolute"
     width="100%"
     height="100%"
     borderRadius="xl"
     padding={7}
     boxShadow="0px 8px 16px 0px rgba(24, 24, 27, 0.1), 0px 0px 1px 0px rgba(212, 212, 216, 0.3) inset"
     bg="white"
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     style={{
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
     }}
    >
     {frontImage && (
      <Image
       src={frontImage}
       alt="Card front"
       width="161px"
       height="166px"
       objectFit="contain"
       opacity={1}
       mb={label ? 4 : 0}
      />
     )}
     {label && (
      <Text
       fontFamily="Inter, sans-serif"
       fontWeight="semibold"
       fontSize="2xl"
       lineHeight="32px"
       letterSpacing="0%"
       textAlign="center"
       verticalAlign="middle"
      >
       {label}
      </Text>
     )}
    </Box>

    {/* Back */}
    <Box
     position="absolute"
     width="100%"
     height="100%"
     borderRadius="xl"
     padding={7}
     boxShadow="0px 8px 16px 0px rgba(24, 24, 27, 0.1), 0px 0px 1px 0px rgba(212, 212, 216, 0.3) inset"
     bg="white"
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     style={{
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
     }}
    >
     {backImage && (
      <Image
       src={backImage}
       alt="Card back"
       width="161px"
       height="166px"
       objectFit="contain"
       opacity={1}
       mb={4}
      />
     )}
     {backTitle && (
      <Text
       fontFamily="Inter, sans-serif"
       fontWeight="semibold"
       fontSize="2xl"
       lineHeight="32px"
       letterSpacing="0%"
       textAlign="center"
       verticalAlign="middle"
       mb={4}
      >
       {backTitle}
      </Text>
     )}
     {backBullets && backBullets.length > 0 && (
      <List spacing={2} px={4} textAlign="left" width="100%">
       {backBullets.map((bullet, index) => (
        <ListItem
         key={index}
         fontFamily="Inter, sans-serif"
         fontWeight="normal"
         fontSize="sm"
         lineHeight="20px"
         letterSpacing="0%"
         verticalAlign="middle"
         listStyleType="disc"
         ml={4}
        >
         {bullet}
        </ListItem>
       ))}
      </List>
     )}
     {backText && !backTitle && !backBullets && (
      <Text
       fontSize="md"
       textAlign="center"
       color="gray.700"
       px={4}
      >
       {backText}
      </Text>
     )}
    </Box>
   </motion.div>
  </Box>
 );
}
