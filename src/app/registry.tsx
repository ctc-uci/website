"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

export default function EmotionRegistry({
 children,
}: {
 children: React.ReactNode;
}) {
 const cache = createCache({ key: "css" });
 cache.compat = true;

 useServerInsertedHTML(() => {
  return (
   <style
    data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
    dangerouslySetInnerHTML={{
     __html: Object.values(cache.inserted).join(" "),
    }}
   />
  );
 });

 return <CacheProvider value={cache}>{children}</CacheProvider>;
}
