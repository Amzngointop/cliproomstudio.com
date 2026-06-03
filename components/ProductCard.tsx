import { CheckCircle, XCircle, Tag, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  rank?: number;
}

export default function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div
      id={product.id}
      style={{
        backgroundColor: "#fff",
        border: rank === 1 ? "2px solid #facc15" : "2px solid #e5e7eb",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: rank === 1 ? "0 8px 32px rgba(250,204,21,0.15)" : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      className="hover:-translate-y-1 hover:shadow-xl group"
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: rank === 1 ? "#facc15" : "#1e0a3c",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {rank && (
          <span
            style={{
              backgroundColor: rank === 1 ? "#1e0a3c" : "#facc15",
              color: rank === 1 ? "#facc15" : "#1e0a3c",
              borderRadius: "6px",
              padding: "2px 10px",
              fontWeight: 800,
              fontSize: "0.8rem",
              flexShrink: 0,
            }}
          >
            #{rank}
          </span>
        )}
        <span
          style={{
            color: rank === 1 ? "#1e0a3c" : "#facc15",
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          {product.bestFor}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "20px" }}>
        {/* Product image */}
        <div
          style={{
            backgroundColor: "#f3f4f6",
            borderRadius: "10px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </div>

        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.1rem", lineHeight: "1.3" }}>
            {product.name}
          </h3>
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            backgroundColor: "#f3f0ff",
            color: "#7c3aed",
            borderRadius: "6px",
            padding: "3px 10px",
            fontSize: "0.78rem",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          <Tag size={12} />
          {product.brand}
        </span>

        <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: "1.65", marginBottom: "16px" }}>
          {product.summary}
        </p>

        {/* Specs */}
        {Object.keys(product.specs).length > 0 && (
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "16px",
            }}
          >
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                <div key={key}>
                  <p style={{ color: "#9ca3af", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase" }}>
                    {key}
                  </p>
                  <p style={{ color: "#1e0a3c", fontSize: "0.82rem", fontWeight: 600 }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p style={{ color: "#059669", fontWeight: 700, fontSize: "0.8rem", marginBottom: "8px" }}>
              PROS
            </p>
            <ul className="flex flex-col gap-2">
              {product.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2">
                  <CheckCircle size={14} color="#059669" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ color: "#374151", fontSize: "0.82rem" }}>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ color: "#dc2626", fontWeight: 700, fontSize: "0.8rem", marginBottom: "8px" }}>
              CONS
            </p>
            <ul className="flex flex-col gap-2">
              {product.cons.map((con) => (
                <li key={con} className="flex items-start gap-2">
                  <XCircle size={14} color="#dc2626" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ color: "#374151", fontSize: "0.82rem" }}>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "#facc15",
            color: "#1e0a3c",
            padding: "12px",
            borderRadius: "10px",
            fontWeight: 700,
            fontSize: "0.95rem",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 4px 14px rgba(250,204,21,0.3)",
            textDecoration: "none",
          }}
          className="hover:scale-105"
        >
          <ShoppingCart size={18} />
          Check Price on Amazon
        </a>
      </div>
    </div>
  );
}
