"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <h2
        style={{
          color: "#1e0a3c",
          fontWeight: 800,
          fontSize: "1.6rem",
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              border: openIndex === i ? "2px solid #7c3aed" : "2px solid #e5e7eb",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              aria-expanded={openIndex === i}
            >
              <span
                style={{
                  color: "#1e0a3c",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                  paddingRight: "16px",
                }}
              >
                {item.question}
              </span>
              <span style={{ color: "#7c3aed", flexShrink: 0 }}>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            {openIndex === i && (
              <div
                style={{
                  padding: "0 20px 16px",
                  color: "#4b5563",
                  fontSize: "0.9rem",
                  lineHeight: "1.7",
                  borderTop: "1px solid #f3f0ff",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
