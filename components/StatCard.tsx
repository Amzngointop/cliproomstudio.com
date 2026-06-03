"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function parseNumber(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: val };
  const num = parseFloat(match[2].replace(/,/g, ""));
  return { prefix: match[1], number: num, suffix: match[3] };
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const { prefix, number, suffix } = parseNumber(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startAnimation = () => {
      if (prefersReducedMotion) {
        setDisplayed(value);
        return;
      }
      const duration = 1200;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * number * 10) / 10;
        const formatted = current % 1 === 0
          ? current.toLocaleString()
          : current.toFixed(1);
        setDisplayed(prefix + formatted + suffix);
        if (progress < 1) requestAnimationFrame(animate);
      };
      setTimeout(() => requestAnimationFrame(animate), delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, number, prefix, suffix, delay]);

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: "24px 16px",
      }}
    >
      <p
        style={{
          color: "#facc15",
          fontWeight: 800,
          fontSize: "2.5rem",
          lineHeight: 1,
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}
      >
        {displayed || value}
      </p>
      <p
        style={{
          color: "rgba(250,250,250,0.75)",
          fontSize: "0.9rem",
          lineHeight: "1.4",
        }}
      >
        {label}
      </p>
    </div>
  );
}
