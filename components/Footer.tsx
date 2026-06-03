import Link from "next/link";
import { Video, Play, Film } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1e0a3c", borderTop: "1px solid rgba(250,204,21,0.15)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span
                style={{
                  backgroundColor: "#facc15",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Video size={16} color="#1e0a3c" strokeWidth={2.5} />
              </span>
              <span style={{ color: "#fafafa", fontWeight: 800, fontSize: "1.1rem" }}>
                {site.name}
              </span>
            </Link>
            <p style={{ color: "rgba(250,250,250,0.6)", fontSize: "0.85rem", lineHeight: "1.6" }}>
              Gear reviews and setup guides for small-room TikTok, YouTube, and UGC creators. No fluff, just honest recommendations.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(250,250,250,0.5)",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-yellow-400"
                aria-label="YouTube"
              >
                <Play size={20} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(250,250,250,0.5)",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-yellow-400"
                aria-label="Instagram"
              >
                <Film size={20} />
              </a>
            </div>
          </div>

          {/* Best Articles */}
          <div>
            <h3 style={{ color: "#facc15", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }} className="mb-3">
              Best Picks
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Wireless Lavalier Mics", slug: "best-wireless-lavalier-mics-tiktok-youtube" },
                { label: "Lights for Streaming", slug: "best-lights-streaming-content-creation" },
                { label: "Phone Tripods", slug: "best-phone-tripods-content-creators" },
                { label: "Webcams", slug: "best-webcams-live-streaming" },
                { label: "LED Strip Lights", slug: "best-led-strip-lights-bedroom-gaming" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/best/${item.slug}`}
                    style={{ color: "rgba(250,250,250,0.6)", fontSize: "0.875rem", transition: "color 0.2s ease" }}
                    className="hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ color: "#facc15", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }} className="mb-3">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              {site.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(250,250,250,0.6)", fontSize: "0.875rem", transition: "color 0.2s ease" }}
                    className="hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p style={{ color: "rgba(250,250,250,0.5)", fontSize: "0.8rem" }}>
                {site.email}
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid rgba(250,250,250,0.1)", paddingTop: "1.5rem" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p style={{ color: "rgba(250,250,250,0.4)", fontSize: "0.8rem" }}>
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p style={{ color: "rgba(250,250,250,0.4)", fontSize: "0.8rem", textAlign: "center" }}>
            As an Amazon Associate, we earn from qualifying purchases.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "rgba(250,204,21,0.7)" }}>
              Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
