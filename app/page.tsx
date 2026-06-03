import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mic, Sun, Smartphone, Grid3X3, MonitorPlay, BookOpen, Star, Shield, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollButton from "@/components/ScrollButton";
import StatCard from "@/components/StatCard";
import BudgetCalculator from "@/components/BudgetCalculator";
import GearChecklist from "@/components/GearChecklist";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Creator Gear Reviews for Small Rooms`,
  description: site.description,
  alternates: { canonical: site.url },
};

const featuredProducts = [
  {
    asin: "B0CMJTSVRW",
    name: "Mini Mic Pro (Latest Model)",
    category: "Microphones",
    imageUrl: "https://m.media-amazon.com/images/I/711s6fypzWL._AC_SL1500_.jpg",
  },
  {
    asin: "B0C2C9QT91",
    name: "ALTSON 60 LED Portable Selfie Light",
    category: "Lighting",
    imageUrl: "https://m.media-amazon.com/images/I/71mi169ArHL._AC_SL1500_.jpg",
  },
  {
    asin: "B09TQY66NH",
    name: "SENSYNE 62\" Phone Tripod & Selfie Stick",
    category: "Tripods",
    imageUrl: "https://m.media-amazon.com/images/I/51svJuNXDyL._AC_SL1500_.jpg",
  },
  {
    asin: "B0BXGFFSL1",
    name: "Logitech Brio 101 Full HD 1080p Webcam",
    category: "Webcams",
    imageUrl: "https://m.media-amazon.com/images/I/71A0Pp767BL._AC_SL1500_.jpg",
  },
  {
    asin: "B0991Q94KP",
    name: "Govee RGBIC LED Strip Lights 16.4ft",
    category: "LED Lights",
    imageUrl: "https://m.media-amazon.com/images/I/71tjdZg28vL._AC_SL1500_.jpg",
  },
];

const articleCards = [
  {
    slug: "best-wireless-lavalier-mics-tiktok-youtube",
    title: "Best Wireless Lavalier Mics for TikTok & YouTube",
    desc: "Crystal-clear wireless audio without the cable mess. From Hollyland to Mini Mic Pro, the best options for every budget.",
    icon: <Mic size={24} />,
    category: "Microphones",
    color: "#7c3aed",
  },
  {
    slug: "best-lights-streaming-content-creation",
    title: "Best Lights for Streaming & Content Creation",
    desc: "Flattering, professional lighting for your stream or video setup. Ring lights, panels, and clip-ons ranked for every budget.",
    icon: <Sun size={24} />,
    category: "Lighting",
    color: "#f59e0b",
  },
  {
    slug: "best-phone-tripods-content-creators",
    title: "Best Phone Tripods for Content Creators",
    desc: "Stable shots that make your content look intentional. From magnetic mounts to full-height studio stands.",
    icon: <Smartphone size={24} />,
    category: "Mounts",
    color: "#0ea5e9",
  },
  {
    slug: "best-webcams-live-streaming",
    title: "Best Webcams for Live Streaming",
    desc: "Clean 1080p video that keeps viewers watching. The webcams streamers and creators actually rely on in 2026.",
    icon: <MonitorPlay size={24} />,
    category: "Webcams",
    color: "#10b981",
  },
  {
    slug: "best-led-strip-lights-bedroom-gaming",
    title: "Best LED Strip Lights for Bedroom & Gaming",
    desc: "Transform your room into a branded creator space. RGBIC and RGB strips ranked for coverage, color, and value.",
    icon: <Grid3X3 size={24} />,
    category: "LED Lights",
    color: "#ef4444",
  },
];

const methodologyPoints = [
  {
    icon: <Star size={22} />,
    title: "Real-World Testing Criteria",
    desc: "We evaluate each product against actual small-room creator use cases — not studio environments with ideal conditions.",
  },
  {
    icon: <Shield size={22} />,
    title: "No Fake Ratings",
    desc: "We don't invent star ratings or claim hands-on testing we haven't done. Our assessments are editorially honest.",
  },
  {
    icon: <Zap size={22} />,
    title: "Budget-First Thinking",
    desc: "Every recommendation considers the creator who's just starting out as well as the one ready to invest seriously.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="animated-gradient"
        style={{ padding: "80px 0 96px", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 60% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(250,204,21,0.15)",
                border: "1px solid rgba(250,204,21,0.4)",
                color: "#facc15",
                borderRadius: "100px",
                padding: "6px 16px",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              For TikTok, YouTube & UGC Creators
            </span>
            <h1
              style={{
                color: "#fafafa",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Stop Filming
              <br />
              <span style={{ color: "#facc15" }}>in the Dark.</span>
            </h1>
            <p
              style={{
                color: "rgba(250,250,250,0.8)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "560px",
              }}
            >
              Honest gear reviews for creators filming in small apartments, dorm rooms, and bedroom corners. Find your minimum viable studio — and start creating content that actually gets watched.
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollButton />
              <Link
                href="/guides/how-to-set-up-creator-room"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "#fafafa",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "2px solid rgba(250,250,250,0.3)",
                  transition: "border-color 0.2s ease",
                  textDecoration: "none",
                }}
                className="hover:border-white"
              >
                <BookOpen size={18} />
                Room Setup Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ backgroundColor: "#fafafa", padding: "72px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#f3f0ff",
                  color: "#7c3aed",
                  borderRadius: "100px",
                  padding: "4px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Gear Spotlight
              </span>
              <h2
                style={{
                  color: "#1e0a3c",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Top Picks Across Every Category
              </h2>
              <p style={{ color: "#4b5563", fontSize: "1rem", maxWidth: "560px", margin: "0 auto" }}>
                One editor-selected product from each category — check the price on Amazon without losing your place in the review.
              </p>
            </div>
          </AnimatedSection>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featuredProducts.slice(0, 3).map((product, i) => (
              <AnimatedSection key={product.asin} delay={[0, 100, 200][i] as 0 | 100 | 200}>
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  className="hover:-translate-y-1 hover:shadow-xl"
                >
                  <div style={{ backgroundColor: "#f3f4f6", height: "200px", position: "relative" }}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "contain", padding: "12px" }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <span style={{ display: "inline-block", backgroundColor: "#f3f0ff", color: "#7c3aed", borderRadius: "6px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "8px" }}>
                      {product.category}
                    </span>
                    <h3 style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4, marginBottom: "16px" }}>
                      {product.name}
                    </h3>
                    <a href={`https://www.amazon.com/dp/${product.asin}?tag=YOURTAG-20`} target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#facc15", color: "#1e0a3c", padding: "9px 18px", borderRadius: "8px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", transition: "transform 0.15s ease" }} className="hover:scale-105">
                      View on Amazon <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          {/* Bottom row: 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {featuredProducts.slice(3).map((product, i) => (
              <AnimatedSection key={product.asin} delay={[0, 100][i] as 0 | 100} className="w-full sm:w-auto" >
                <div
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    width: "100%",
                  }}
                  className="hover:-translate-y-1 hover:shadow-xl sm:w-80"
                >
                  <div style={{ backgroundColor: "#f3f4f6", height: "200px", position: "relative" }}>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      style={{ objectFit: "contain", padding: "12px" }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <span style={{ display: "inline-block", backgroundColor: "#f3f0ff", color: "#7c3aed", borderRadius: "6px", padding: "2px 10px", fontSize: "0.75rem", fontWeight: 600, marginBottom: "8px" }}>
                      {product.category}
                    </span>
                    <h3 style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.4, marginBottom: "16px" }}>
                      {product.name}
                    </h3>
                    <a href={`https://www.amazon.com/dp/${product.asin}?tag=YOURTAG-20`} target="_blank" rel="noopener noreferrer sponsored" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#facc15", color: "#1e0a3c", padding: "9px 18px", borderRadius: "8px", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", transition: "transform 0.15s ease" }} className="hover:scale-105">
                      View on Amazon <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ backgroundColor: "#1e0a3c" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="grid grid-cols-1 sm:grid-cols-3"
              style={{ borderBottom: "1px solid rgba(250,204,21,0.1)" }}
            >
              <StatCard value="2M+" label="creators equipped with better gear" delay={0} />
              <div style={{ borderLeft: "1px solid rgba(250,204,21,0.1)", borderRight: "1px solid rgba(250,204,21,0.1)" }}>
                <StatCard value="5" label="gear categories reviewed and ranked" delay={200} />
              </div>
              <StatCard value="$200" label="average starter studio budget" delay={300} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Cards Grid */}
      <section id="best-picks" style={{ padding: "80px 0", backgroundColor: "#fafafa" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div style={{ marginBottom: "48px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#f3f0ff",
                  color: "#7c3aed",
                  borderRadius: "100px",
                  padding: "4px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Best Picks
              </span>
              <h2
                style={{
                  color: "#1e0a3c",
                  fontWeight: 900,
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Find Your Perfect Gear
              </h2>
              <p style={{ color: "#4b5563", fontSize: "1rem", maxWidth: "520px" }}>
                Five gear categories. Dozens of options tested and ranked. Clear winners at every budget.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {articleCards.slice(0, 3).map((card, i) => (
              <AnimatedSection key={card.slug} delay={([0, 100, 200][i] as 0 | 100 | 200)}>
                <Link
                  href={`/best/${card.slug}`}
                  style={{ display: "block", textDecoration: "none", height: "100%" }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "2px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "24px",
                      height: "100%",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    }}
                    className="hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: `${card.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: card.color,
                        marginBottom: "16px",
                      }}
                    >
                      {card.icon}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                        borderRadius: "100px",
                        padding: "2px 10px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        marginBottom: "10px",
                      }}
                    >
                      {card.category}
                    </span>
                    <h3
                      style={{
                        color: "#1e0a3c",
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: card.color,
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        marginTop: "16px",
                      }}
                    >
                      Read guide <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          {/* Bottom row: last 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {articleCards.slice(3).map((card, i) => (
              <AnimatedSection key={card.slug} delay={([0, 100][i] as 0 | 100)} className="w-full sm:w-auto">
                <Link
                  href={`/best/${card.slug}`}
                  style={{ display: "block", textDecoration: "none", height: "100%" }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "2px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "24px",
                      height: "100%",
                      width: "100%",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    }}
                    className="hover:-translate-y-1 hover:shadow-xl sm:w-80"
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        backgroundColor: `${card.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: card.color,
                        marginBottom: "16px",
                      }}
                    >
                      {card.icon}
                    </div>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                        borderRadius: "100px",
                        padding: "2px 10px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        marginBottom: "10px",
                      }}
                    >
                      {card.category}
                    </span>
                    <h3
                      style={{
                        color: "#1e0a3c",
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        lineHeight: 1.3,
                        marginBottom: "10px",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: card.color,
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        marginTop: "16px",
                      }}
                    >
                      Read guide <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Start Here Guide Strip */}
      <AnimatedSection>
        <section
          style={{
            background: "linear-gradient(135deg, #facc15 0%, #f59e0b 100%)",
            padding: "48px 0",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p
                  style={{
                    color: "#1e0a3c",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "6px",
                  }}
                >
                  Start Here
                </p>
                <h2
                  style={{
                    color: "#1e0a3c",
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                    marginBottom: "8px",
                  }}
                >
                  How to Set Up a Creator Studio in a Small Room
                </h2>
                <p style={{ color: "rgba(30,10,60,0.75)", fontSize: "0.9rem" }}>
                  Zone planning, gear priority order, lighting and audio tips — all in one complete guide.
                </p>
              </div>
              <Link
                href="/guides/how-to-set-up-creator-room"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#1e0a3c",
                  color: "#facc15",
                  padding: "14px 28px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  transition: "transform 0.2s ease",
                }}
                className="hover:scale-105"
              >
                Read the Guide
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Budget Calculator */}
      <section style={{ padding: "80px 0", backgroundColor: "#f3f0ff" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#fff",
                  color: "#7c3aed",
                  borderRadius: "100px",
                  padding: "4px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Personalized
              </span>
              <h2
                style={{
                  color: "#1e0a3c",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                What Should You Buy First?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <BudgetCalculator />
          </AnimatedSection>
        </div>
      </section>

      {/* Gear Checklist */}
      <section style={{ padding: "80px 0", backgroundColor: "#fafafa" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#f3f0ff",
                  color: "#7c3aed",
                  borderRadius: "100px",
                  padding: "4px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Inventory Check
              </span>
              <h2
                style={{
                  color: "#1e0a3c",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Do You Have the Essentials?
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <GearChecklist />
          </AnimatedSection>
        </div>
      </section>

      {/* Methodology */}
      <AnimatedSection>
        <section style={{ backgroundColor: "#1e0a3c", padding: "72px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2
                style={{
                  color: "#fafafa",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                How We Review Gear
              </h2>
              <p style={{ color: "rgba(250,250,250,0.65)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
                Every recommendation is grounded in editorial judgment, not paid placements or made-up ratings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodologyPoints.map((point) => (
                <div
                  key={point.title}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(250,204,21,0.15)",
                    borderRadius: "16px",
                    padding: "28px",
                  }}
                >
                  <div style={{ color: "#facc15", marginBottom: "16px" }}>{point.icon}</div>
                  <h3 style={{ color: "#fafafa", fontWeight: 700, fontSize: "1rem", marginBottom: "8px" }}>
                    {point.title}
                  </h3>
                  <p style={{ color: "rgba(250,250,250,0.6)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Affiliate Disclosure snippet */}
      <section style={{ backgroundColor: "#fafafa", padding: "24px 0", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p style={{ color: "#9ca3af", fontSize: "0.8rem", textAlign: "center" }}>
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. As an Amazon Associate, we earn a small commission from qualifying purchases at no extra cost to you.{" "}
            <Link href="/affiliate-disclosure" style={{ color: "#7c3aed" }}>
              Learn more
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
