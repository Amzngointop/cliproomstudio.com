import { Quote } from "lucide-react";

interface ExpertQuoteProps {
  quote: string;
  name: string;
  title: string;
}

export default function ExpertQuote({ quote, name, title }: ExpertQuoteProps) {
  return (
    <blockquote
      style={{
        background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
        borderRadius: "16px",
        padding: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "20px",
          opacity: 0.15,
        }}
      >
        <Quote size={80} color="#facc15" />
      </div>
      <p
        style={{
          color: "#fafafa",
          fontSize: "1.05rem",
          lineHeight: "1.75",
          fontStyle: "italic",
          marginBottom: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: "3px",
            height: "40px",
            backgroundColor: "#facc15",
            borderRadius: "2px",
          }}
        />
        <div>
          <p style={{ color: "#facc15", fontWeight: 700, fontSize: "0.9rem" }}>{name}</p>
          <p style={{ color: "rgba(250,250,250,0.6)", fontSize: "0.82rem" }}>{title}</p>
        </div>
      </div>
    </blockquote>
  );
}
