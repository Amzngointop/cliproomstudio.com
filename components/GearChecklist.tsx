"use client";

import { useState } from "react";
import { Check, Mic, Sun, Smartphone, Grid, MonitorPlay, HardDrive, Image, Tablet, Video } from "lucide-react";

interface ChecklistItem {
  id: string;
  icon: React.ReactNode;
  name: string;
  why: string;
}

const items: ChecklistItem[] = [
  {
    id: "mic",
    icon: <Mic size={20} />,
    name: "Wireless Lav Mic",
    why: "Clean audio separates professional creators from bedroom hobbyists.",
  },
  {
    id: "light",
    icon: <Sun size={20} />,
    name: "Ring Light or Key Light",
    why: "Proper lighting is the fastest visual upgrade with the highest ROI.",
  },
  {
    id: "tripod",
    icon: <Smartphone size={20} />,
    name: "Phone Tripod or Mount",
    why: "Stable footage is the baseline — shaky cam kills watch time.",
  },
  {
    id: "webcam",
    icon: <Video size={20} />,
    name: "Webcam",
    why: "Clear 1080p video makes your content look intentional — even in a small room.",
  },
  {
    id: "prompter",
    icon: <MonitorPlay size={20} />,
    name: "Teleprompter",
    why: "Script-to-upload faster by eliminating retakes from forgotten lines.",
  },
  {
    id: "storage",
    icon: <HardDrive size={20} />,
    name: "SD Card / Cloud Storage",
    why: "Running out of storage mid-session costs you takes you can't reshoot.",
  },
  {
    id: "backdrop",
    icon: <Image size={20} />,
    name: "Backdrop or Clean Background",
    why: "What's behind you tells viewers how seriously to take your content.",
  },
  {
    id: "editing",
    icon: <Tablet size={20} />,
    name: "Editing App Subscription",
    why: "CapCut, DaVinci, or Premiere — you need one to compete in 2026.",
  },
];

export default function GearChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const count = checked.size;
  const total = items.length;
  const progress = (count / total) * 100;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        border: "2px solid #e5e7eb",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(30,10,60,0.06)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
          padding: "24px 28px",
        }}
      >
        <h3 style={{ color: "#fafafa", fontWeight: 800, fontSize: "1.2rem", marginBottom: "4px" }}>
          The Minimum Viable Studio
        </h3>
        <p style={{ color: "rgba(250,250,250,0.7)", fontSize: "0.85rem", marginBottom: "16px" }}>
          Check off what you already have
        </p>
        {/* Progress bar */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            borderRadius: "100px",
            height: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#facc15",
              height: "100%",
              borderRadius: "100px",
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <p style={{ color: "#facc15", fontWeight: 700, fontSize: "0.875rem", marginTop: "8px" }}>
          {count}/{total} essentials checked
        </p>
      </div>

      {/* Checklist */}
      <div style={{ padding: "8px 0" }}>
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                width: "100%",
                padding: "14px 24px",
                background: isChecked ? "#f3f0ff" : "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background-color 0.2s ease",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {/* Checkbox */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  border: isChecked ? "2px solid #7c3aed" : "2px solid #d1d5db",
                  backgroundColor: isChecked ? "#7c3aed" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              >
                {isChecked && <Check size={16} color="#fff" strokeWidth={3} />}
              </div>

              {/* Icon */}
              <div
                style={{
                  color: isChecked ? "#7c3aed" : "#9ca3af",
                  marginTop: "4px",
                  flexShrink: 0,
                  transition: "color 0.2s ease",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    color: isChecked ? "#7c3aed" : "#1e0a3c",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: isChecked ? "line-through" : "none",
                    transition: "all 0.2s ease",
                    marginBottom: "2px",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: "1.4" }}>
                  {item.why}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {count === total && (
        <div
          style={{
            backgroundColor: "#facc15",
            padding: "16px 24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "0.95rem" }}>
            Your studio is complete. Time to create.
          </p>
        </div>
      )}
    </div>
  );
}
