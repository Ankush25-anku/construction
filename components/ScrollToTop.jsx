"use client"; // mark as client component

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ correct hook for Next.js

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]); // run every time the route changes

  return null;
}
