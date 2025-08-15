"use client";

import { ReactNode } from "react";

export default function Glass({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass relative ${className}`}>{children}</div>;
}
