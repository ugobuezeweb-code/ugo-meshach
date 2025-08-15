"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Example reveal animation logic
    if (ref.current) {
      ref.current.style.opacity = "1";
      ref.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}>
      {children}
    </div>
  );
}
