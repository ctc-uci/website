"use client";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface GalleryProps {
 images: string[];
 title?: string;
 autoRotateInterval?: number; // in milliseconds
}

export default function Gallery({
 images,
 title = "Community",
 autoRotateInterval = 5000,
}: GalleryProps) {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isAutoRotating, setIsAutoRotating] = useState(true);

 const nextImage = useCallback(() => {
  setCurrentIndex((prev) => (prev + 1) % images.length);
 }, [images.length]);

 const prevImage = useCallback(() => {
  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
 }, [images.length]);

 // Auto-rotation effect
 useEffect(() => {
  if (!isAutoRotating || images.length <= 1) return;

  const interval = setInterval(nextImage, autoRotateInterval);
  return () => clearInterval(interval);
 }, [isAutoRotating, autoRotateInterval, nextImage, images.length]);

 // Pause auto-rotation on hover
 const handleMouseEnter = () => setIsAutoRotating(false);
 const handleMouseLeave = () => setIsAutoRotating(true);

 // Get visible images (prev, current, next)
 const getVisibleImages = () => {
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;
  return {
   prev: images[prevIndex],
   current: images[currentIndex],
   next: images[nextIndex],
  };
 };

 const visible = getVisibleImages();

 if (images.length === 0) {
  return null;
 }

 return (
  <VStack
   spacing={{ base: 8, md: 8 }}
   width="100%"
   py={{ base: 10, md: 8, lg: 8 }}
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
  >
   {title && (
    <Text
     fontSize={{ base: "6xl", md: "5xl" }}
     fontWeight="bold"
     color="black"
     fontFamily="Inter, sans-serif"
     textAlign="center"
     mt={{ base: 1, md: 0 }}
    >
     {title}
    </Text>
   )}

   <Box
    position="relative"
    width="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
    px={{ base: 2, md: 8 }}
   >
    {/* Container for all images */}
    <HStack
     spacing={{ base: 3, md: 4 }}
     alignItems="center"
     justifyContent="center"
     width="100%"
     maxWidth="100%"
     position="relative"
    >
     {/* Previous image (partially visible on left) - clickable */}
     <Box
      flex={{ base: "0 0 20%", md: "0 0 20%" }}
      display="flex"
      justifyContent="flex-end"
      overflow="hidden"
      height={{ base: "200px", md: "250px", lg: "350px" }}
      cursor="pointer"
      onClick={prevImage}
      _hover={{
       "& > div": {
        opacity: 0.8,
       },
      }}
      transition="all 0.2s"
     >
      <motion.div
       key={`prev-${currentIndex}`}
       style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
       }}
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 0.5, x: 0 }}
       exit={{ opacity: 0, x: -20 }}
       transition={{ duration: 0.15 }}
       whileHover={{ opacity: 0.8 }}
       whileTap={{ scale: 0.98 }}
      >
       <Box
        as="img"
        src={visible.prev}
        alt="Previous"
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="sm"
        bg="gray.200"
       />
      </motion.div>
     </Box>

     {/* Current image (center, fully visible) */}
     <Box
      position="relative"
      flex={{ base: "0 0 60%", md: "0 0 50%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ base: "300px", md: "300px", lg: "400px" }}
     >
      <AnimatePresence mode="wait">
       <motion.div
        key={`current-${currentIndex}`}
        style={{
         width: "100%",
         height: "100%",
         position: "relative",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
       >
        <Box
         position="relative"
         width="100%"
         height="100%"
         borderRadius="md"
         overflow="hidden"
         boxShadow="0 4px 20px rgba(0, 0, 0, 0.12)"
         bg="gray.200"
        >
         <Image
          src={visible.current}
          alt={`Image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 60vw, 50vw"
          style={{ objectFit: "cover" }}
          priority={false}
         />
        </Box>
       </motion.div>
      </AnimatePresence>
     </Box>

     {/* Next image (partially visible on right) - clickable */}
     <Box
      flex={{ base: "0 0 20%", md: "0 0 20%" }}
      display="flex"
      justifyContent="flex-start"
      overflow="hidden"
      height={{ base: "200px", md: "250px", lg: "350px" }}
      cursor="pointer"
      onClick={nextImage}
      _hover={{
       "& > div": {
        opacity: 0.8,
       },
      }}
      transition="all 0.2s"
     >
      <motion.div
       key={`next-${currentIndex}`}
       style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
       }}
       initial={{ opacity: 0, x: 20 }}
       animate={{ opacity: 0.5, x: 0 }}
       exit={{ opacity: 0, x: 20 }}
       transition={{ duration: 0.15 }}
       whileHover={{ opacity: 0.8 }}
       whileTap={{ scale: 0.98 }}
      >
       <Box
        as="img"
        src={visible.next}
        alt="Next"
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="sm"
        bg="gray.200"
       />
      </motion.div>
     </Box>
    </HStack>
   </Box>
  </VStack>
 );
}
