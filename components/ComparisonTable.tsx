import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "12px", border: "2px solid #e5e7eb" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#1e0a3c" }}>
            <th style={{ color: "#facc15", padding: "14px 16px", textAlign: "left", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
              Product
            </th>
            <th style={{ color: "#facc15", padding: "14px 16px", textAlign: "left", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
              Best For
            </th>
            <th style={{ color: "#facc15", padding: "14px 16px", textAlign: "center", fontWeight: 700, fontSize: "0.85rem", whiteSpace: "nowrap" }}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              style={{
                backgroundColor: i % 2 === 0 ? "#fff" : "#faf9ff",
                borderBottom: "1px solid #e5e7eb",
                transition: "background-color 0.15s ease",
              }}
              className="hover:bg-purple-50"
            >
              <td style={{ padding: "12px 16px" }}>
                <div>
                  <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.9rem" }}>
                    {product.name}
                  </p>
                  <p style={{ color: "#9ca3af", fontSize: "0.78rem" }}>{product.brand}</p>
                </div>
              </td>
              <td style={{ padding: "12px 16px" }}>
                <span style={{ color: "#4b5563", fontSize: "0.85rem" }}>{product.bestFor}</span>
              </td>
              <td style={{ padding: "12px 16px", textAlign: "center" }}>
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    backgroundColor: "#facc15",
                    color: "#1e0a3c",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    transition: "transform 0.15s ease",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  className="hover:scale-105"
                >
                  Amazon
                  <ExternalLink size={12} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
