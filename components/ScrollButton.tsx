"use client";

import { ArrowDown } from "lucide-react";

export default function ScrollButton() {
  return (
    <a
      href="#best-picks"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("best-picks")?.scrollIntoView({ behavior: "smooth" });
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#facc15",
        color: "#1e0a3c",
        padding: "14px 28px",
        borderRadius: "10px",
        fontWeight: 800,
        fontSize: "1rem",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "0 4px 20px rgba(250,204,21,0.4)",
        textDecoration: "none",
        cursor: "pointer",
      }}
      className="hover:scale-105"
    >
      See Best Picks
      <ArrowDown size={18} />
    </a>
  );
}
