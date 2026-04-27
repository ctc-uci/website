import type { MetadataRoute } from "next";

const BASE_URL = "https://ctc-uci.com";

export default function sitemap(): MetadataRoute.Sitemap {
 return [
  {
   url: BASE_URL,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 1,
  },
  {
   url: `${BASE_URL}/about`,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 0.8,
  },
  {
   url: `${BASE_URL}/projects`,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 0.8,
  },
  {
   url: `${BASE_URL}/team`,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 0.7,
  },
  {
   url: `${BASE_URL}/career`,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 0.7,
  },
  {
   url: `${BASE_URL}/recruitment`,
   lastModified: new Date(),
   changeFrequency: "monthly",
   priority: 0.9,
  },
 ];
}
