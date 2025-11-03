"use client";
import * as React from "react";

export function MDXComponents({ children }: { children: React.ReactNode }) {
  return <div className="prose max-w-none">{children}</div>;
}
