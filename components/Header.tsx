"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Video, ChevronDown } from "lucide-react";
import { site } from "@/data/site";

const bestPicksLinks = [
  { label: "Best Wireless Lavalier Mics for TikTok & YouTube", href: "/best/best-wireless-lavalier-mics-tiktok-youtube" },
  { label: "Best Lights for Streaming & Content Creation", href: "/best/best-lights-streaming-content-creation" },
  { label: "Best Phone Tripods for Content Creators", href: "/best/best-phone-tripods-content-creators" },
  { label: "Best Webcams for Live Streaming", href: "/best/best-webcams-live-streaming" },
  { label: "Best LED Strip Lights for Bedroom & Gaming", href: "/best/best-led-strip-lights-bedroom-gaming" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(30,10,60,0.95)" : "rgba(30,10,60,0.85)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        borderBottom: scrolled ? "1px solid rgba(250,204,21,0.15)" : "1px solid transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              style={{
                backgroundColor: "#facc15",
                borderRadius: "8px",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
              }}
              className="group-hover:scale-110"
            >
              <Video size={16} color="#1e0a3c" strokeWidth={2.5} />
            </span>
            <span
              style={{ color: "#fafafa", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}
            >
              {site.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "rgba(250,250,250,0.8)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                className="hover:text-yellow-400"
              >
                {item.label}
              </Link>
            ))}

            {/* Browse Gear dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#facc15",
                  color: "#1e0a3c",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                }}
                className="hover:scale-105"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Browse Gear
                <ChevronDown
                  size={15}
                  style={{
                    transition: "transform 0.2s ease",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <div
                className={`nav-dropdown${dropdownOpen ? " open" : ""}`}
                style={{
                  position: "absolute",
                  top: "calc(100% + 12px)",
                  right: 0,
                  backgroundColor: "#1e0a3c",
                  border: "1px solid rgba(250,204,21,0.25)",
                  borderRadius: "12px",
                  padding: "8px",
                  minWidth: "300px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                  zIndex: 100,
                }}
              >
                {bestPicksLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 14px",
                      color: "rgba(250,250,250,0.85)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "background-color 0.15s ease, color 0.15s ease",
                    }}
                    className="hover:bg-yellow-400/10 hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#fafafa" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#1e0a3c", borderTop: "1px solid rgba(250,204,21,0.2)" }}
          className="md:hidden"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ color: "rgba(250,250,250,0.85)", fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p
              style={{
                color: "#facc15",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Browse Gear
            </p>
            {bestPicksLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "rgba(250,250,250,0.75)", fontSize: "0.875rem", fontWeight: 500, paddingLeft: "8px" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
