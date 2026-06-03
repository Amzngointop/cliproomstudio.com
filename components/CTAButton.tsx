import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "10px",
    fontWeight: 700,
    fontSize: "0.95rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    textDecoration: "none",
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...baseStyle,
      backgroundColor: "#facc15",
      color: "#1e0a3c",
      boxShadow: "0 4px 14px rgba(250,204,21,0.3)",
    },
    secondary: {
      ...baseStyle,
      backgroundColor: "#7c3aed",
      color: "#fafafa",
      boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
    },
    outline: {
      ...baseStyle,
      backgroundColor: "transparent",
      color: "#facc15",
      border: "2px solid #facc15",
    },
  };

  const hoverClass = "hover:scale-105 hover:shadow-lg";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={styles[variant]}
        className={`${hoverClass} ${className}`}
      >
        {children}
        <ExternalLink size={16} />
      </a>
    );
  }

  return (
    <Link href={href} style={styles[variant]} className={`${hoverClass} ${className}`}>
      {children}
    </Link>
  );
}
