import { User } from "lucide-react";

interface AuthorBioProps {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

export default function AuthorBio({ name, title, bio }: AuthorBioProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        backgroundColor: "#f3f0ff",
        border: "1px solid #e0d9ff",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#7c3aed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <User size={28} color="#fff" />
      </div>
      <div>
        <p style={{ color: "#7c3aed", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
          Written by
        </p>
        <p style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1rem", marginBottom: "2px" }}>{name}</p>
        <p style={{ color: "#7c3aed", fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>{title}</p>
        <p style={{ color: "#4b5563", fontSize: "0.85rem", lineHeight: "1.6" }}>{bio}</p>
      </div>
    </div>
  );
}
