"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2.0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const numStr = match[1];
    const suffix = match[2] || "";
    const targetValue = parseFloat(numStr);
    
    const hasDecimal = numStr.includes(".");
    const decimalPlaces = hasDecimal ? numStr.split(".")[1].length : 0;

    const controls = animate(0, targetValue, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Premium Apple Ease Out [cubic-bezier(0.16, 1, 0.3, 1)]
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimalPlaces) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [value, isInView, duration]);

  // Initial render shows base layout of suffix without number to reserve correct space and layout
  const match = value.match(/^([\d.]+)(.*)$/);
  const suffix = match ? match[2] || "" : value;
  const initialValue = `0${suffix}`;

  return <span ref={ref}>{initialValue}</span>;
}
