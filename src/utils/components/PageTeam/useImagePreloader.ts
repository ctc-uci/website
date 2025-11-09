import { useEffect } from "react";

import { Profile } from "../../constants/team-data";

/**
 * Hook to preload all images from team profiles
 * This ensures images are cached before users switch tabs
 */
export const useImagePreloader = (teamData: Profile[][]) => {
  useEffect(() => {
    // Collect all unique image URLs from all teams
    const imageUrls = new Set<string>();
    
    teamData.forEach((profiles) => {
      profiles.forEach((profile) => {
        if (profile.image && profile.image.trim() !== "") {
          imageUrls.add(profile.image);
        }
      });
    });

    // Preload all images
    const preloadImages = () => {
      imageUrls.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        // Optionally handle errors silently
        img.onerror = () => {
          // Image failed to load, but don't show error
        };
      });
    };

    // Preload images after a small delay to not block initial render
    const timeoutId = setTimeout(preloadImages, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [teamData]);
};

