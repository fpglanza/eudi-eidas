"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const body = {
      url: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || null,
      ua: navigator.userAgent || null,
    };
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }, [pathname, search]);

  return (
    <>
      {/* Add any scripts like analytics here */}
      {children}
    </>
  );
}
