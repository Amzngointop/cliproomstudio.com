import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import FAQ from "@/components/FAQ";
import ExpertQuote from "@/components/ExpertQuote";
import AnimatedSection from "@/components/AnimatedSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "How to Set Up a Creator Studio in a Small Room: The Complete Guide | ClipRoomStudio",
  description:
    "Learn how to set up a professional creator studio in a small room or apartment. Zone planning, gear priority, lighting tips, audio treatment, and background ideas for TikTok and YouTube creators.",
  alternates: { canonical: `${site.url}/guides/how-to-set-up-creator-room` },
  openGraph: {
    title: "How to Set Up a Creator Studio in a Small Room",
    description: "The complete guide to zone planning, gear priority, lighting and audio for small-room creators.",
    url: `${site.url}/guides/how-to-set-up-creator-room`,
    type: "article",
  },
};

const faqItems = [
  {
    question: "How much space do I need for a home creator studio?",
    answer:
      "You can create professional-quality content in as little as 6x6 feet of dedicated space. The key is vertical thinking — use your wall space for acoustic panels and light positioning, and keep your filming area clear of clutter. Many full-time creators film in corner setups that take up less than 25 square feet.",
  },
  {
    question: "Should I soundproof my room before buying a microphone?",
    answer:
      "Soundproofing (blocking external noise) and acoustic treatment (reducing internal reflections) are different things. Soundproofing is expensive and rarely necessary for creators. Acoustic treatment with panels is affordable and immediately improves recording quality. Get a decent microphone first, then treat your room — in that order.",
  },
  {
    question: "What's the best background for small room creators?",
    answer:
      "Clean and intentional beats perfect. A plain painted wall in a dark or neutral color photographs well and doesn't distract viewers from your content. Bookshelf arrangements, acoustic panel walls, and simple LED strip accents all work beautifully. Avoid busy patterns, mirrors, and windows directly behind you unless you have a strong light source facing you.",
  },
  {
    question: "How do I prevent my window from ruining my lighting?",
    answer:
      "Position your camera so windows are to your side or slightly in front of you, never directly behind. Use blackout curtains when you need consistent lighting regardless of time of day. If a window is behind your filming position, you'll appear as a silhouette unless you match its brightness with a powerful key light facing you.",
  },
  {
    question: "Do I need separate zones or can I film in my regular living space?",
    answer:
      "Many creators film in fully multi-purpose spaces — the key is a dedicated filming corner rather than a separate room. Clear the filming area of personal clutter, position your gear consistently so setup time is minimal, and treat the specific area around your microphone with acoustic panels. You don't need a dedicated room to achieve professional results.",
  },
];

export default function HowToSetUpCreatorRoomPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
          padding: "64px 0 56px",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            style={{
              display: "inline-block",
              backgroundColor: "rgba(250,204,21,0.15)",
              border: "1px solid rgba(250,204,21,0.3)",
              color: "#facc15",
              borderRadius: "100px",
              padding: "4px 14px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Complete Guide
          </span>
          <h1
            style={{
              color: "#fafafa",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            How to Set Up a Creator Studio
            <br />
            <span style={{ color: "#facc15" }}>in a Small Room</span>
          </h1>
          <p style={{ color: "rgba(250,250,250,0.75)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "580px" }}>
            The complete guide: zone planning, gear priority, lighting and audio tips for TikTok, YouTube, and UGC creators filming in apartments and small rooms.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <AnimatedSection>
          <div style={{ marginBottom: "48px" }}>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.8, marginBottom: "16px" }}>
              The creator economy has never been more accessible — or more competitive. According to the Linktree Creator Report, over 200 million people worldwide now identify as content creators, with the vast majority filming in the same spaces they live and sleep in. The difference between creators who build audiences and those who quit within six months isn&apos;t talent. It&apos;s environment.
            </p>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.8 }}>
              This guide teaches you how to turn any small room into a professional filming environment. No renovations. No $5,000 gear lists. Just smart zone planning, strategic gear priority, and the practical knowledge that experienced creators figured out through years of trial and error — so you don&apos;t have to.
            </p>
          </div>
        </AnimatedSection>

        {/* Zone Planning */}
        <AnimatedSection>
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 900, fontSize: "1.6rem", marginBottom: "8px" }}>
              Zone Planning: Dividing Your Small Room
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "24px" }}>
              The most important mindset shift for small-room creators: you don&apos;t need a large room. You need a well-organized corner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  zone: "Filming Zone",
                  color: "#7c3aed",
                  items: ["Clear background (wall, panels, or backdrop)", "Ring light or key light positioned at eye level", "Tripod with phone or camera at correct height", "Teleprompter if you script your content"],
                  desc: "This is your camera-facing area. Keep it minimal — the camera sees more than you think.",
                },
                {
                  zone: "Audio Zone",
                  color: "#10b981",
                  items: ["Acoustic panels on walls around the mic", "Corner bass traps if you have persistent echo", "Hard surfaces minimized (bare floors cause reflections)", "No HVAC vents or appliances in the frame"],
                  desc: "Audio treatment is about controlling reflections, not blocking outside noise.",
                },
                {
                  zone: "Editing Zone",
                  color: "#f59e0b",
                  items: ["Separate desk from filming area if space allows", "Monitor positioned away from camera sightlines", "External hard drive for footage storage", "Good chair — you'll spend more time here than filming"],
                  desc: "Editing where you film works fine — just keep cables managed and out of shot.",
                },
              ].map((zone) => (
                <div
                  key={zone.zone}
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ backgroundColor: zone.color, padding: "14px 20px" }}>
                    <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{zone.zone}</h3>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "12px" }}>
                      {zone.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {zone.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle size={14} color={zone.color} style={{ marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ color: "#374151", fontSize: "0.82rem" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Room Layout Diagram */}
            <div
              style={{
                backgroundColor: "#f3f0ff",
                borderRadius: "16px",
                padding: "24px",
                border: "2px solid #e0d9ff",
              }}
            >
              <p style={{ color: "#7c3aed", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px" }}>
                Room Layout Diagram — Top-Down View
              </p>
              <svg
                viewBox="0 0 400 300"
                style={{ width: "100%", maxWidth: "500px", display: "block", margin: "0 auto" }}
                aria-label="Top-down diagram of a small creator room with three zones"
              >
                {/* Room outline */}
                <rect x="20" y="20" width="360" height="260" rx="8" fill="#fff" stroke="#7c3aed" strokeWidth="3" />

                {/* Door */}
                <line x1="20" y1="220" x2="20" y2="280" stroke="#7c3aed" strokeWidth="3" />
                <path d="M 20 220 Q 60 220 60 260" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,3" />
                <text x="22" y="295" fontSize="10" fill="#7c3aed">Door</text>

                {/* Window */}
                <rect x="20" y="60" width="4" height="80" fill="#facc15" />
                <text x="28" y="105" fontSize="10" fill="#92400e">Window</text>

                {/* Filming Zone (purple) */}
                <rect x="230" y="30" width="140" height="110" rx="6" fill="rgba(124,58,237,0.12)" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,3" />
                <text x="280" y="60" fontSize="11" fontWeight="bold" fill="#7c3aed">FILMING</text>
                <text x="285" y="75" fontSize="11" fontWeight="bold" fill="#7c3aed">ZONE</text>

                {/* Camera icon */}
                <rect x="285" y="90" width="26" height="18" rx="3" fill="#7c3aed" />
                <circle cx="298" cy="99" r="5" fill="#fff" />
                <rect x="311" y="96" width="8" height="6" rx="2" fill="#7c3aed" />
                <text x="278" y="126" fontSize="9" fill="#7c3aed">Camera+Light</text>

                {/* Audio Zone (green) */}
                <rect x="30" y="30" width="185" height="110" rx="6" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="2" strokeDasharray="6,3" />
                <text x="75" y="60" fontSize="11" fontWeight="bold" fill="#10b981">AUDIO ZONE</text>
                {/* Acoustic panels on walls */}
                <rect x="32" y="40" width="8" height="28" rx="2" fill="#10b981" opacity="0.6" />
                <rect x="32" y="72" width="8" height="28" rx="2" fill="#10b981" opacity="0.6" />
                <rect x="42" y="30" width="28" height="8" rx="2" fill="#10b981" opacity="0.6" />
                <rect x="74" y="30" width="28" height="8" rx="2" fill="#10b981" opacity="0.6" />
                <text x="55" y="100" fontSize="9" fill="#10b981">Mic + Panels</text>

                {/* Editing Zone (amber) */}
                <rect x="30" y="155" width="340" height="115" rx="6" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,3" />
                <text x="160" y="178" fontSize="11" fontWeight="bold" fill="#f59e0b">EDITING ZONE</text>
                {/* Desk */}
                <rect x="60" y="185" width="130" height="70" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="90" y="225" fontSize="9" fill="#92400e">Desk + Monitor</text>
                {/* Chair */}
                <circle cx="125" cy="240" r="12" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="112" y="244" fontSize="8" fill="#f59e0b">Chair</text>

                {/* Legend */}
                <rect x="230" y="165" width="12" height="12" rx="2" fill="rgba(124,58,237,0.3)" stroke="#7c3aed" strokeWidth="1" />
                <text x="246" y="175" fontSize="9" fill="#374151">Filming Zone</text>
                <rect x="230" y="185" width="12" height="12" rx="2" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1" />
                <text x="246" y="195" fontSize="9" fill="#374151">Audio Zone</text>
                <rect x="230" y="205" width="12" height="12" rx="2" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
                <text x="246" y="215" fontSize="9" fill="#374151">Editing Zone</text>
              </svg>
            </div>
          </section>
        </AnimatedSection>

        {/* Expert Quote */}
        <AnimatedSection>
          <div style={{ marginBottom: "52px" }}>
            <ExpertQuote
              quote="Most creators overcomplicate their setup. A ring light, a lav mic, and four acoustic panels in the corners will beat any elaborate studio setup that's hard to use consistently. Consistency is the magic ingredient — post 3x per week from a mediocre setup and you'll outperform someone with a $10,000 studio who posts once a month."
              name="Daniel Park"
              title="YouTube Studio Designer & Creator Coach, 12 years experience"
            />
          </div>
        </AnimatedSection>

        {/* Gear Priority Order */}
        <AnimatedSection>
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 900, fontSize: "1.6rem", marginBottom: "8px" }}>
              Gear Priority: What to Buy First
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "28px" }}>
              This order is specifically designed for small-room creators. The sequencing matters.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 1,
                  tier: "Under $100",
                  title: "Stability + Light",
                  items: ["Phone tripod ($28–$35) — stop the shake before anything else", "10\" ring light ($35–$45) — basic light makes an immediate visual difference", "Acoustic foam tiles ($24–$29) — treat your room echo on day one"],
                  why: "These three items fix the three most immediately visible problems: shaky video, dark/unflattering video, and echoey audio.",
                },
                {
                  step: 2,
                  tier: "$100–$200",
                  title: "Audio Upgrade",
                  items: ["Wireless lav mic ($89–$159) — upgrade from your phone's built-in mic", "Better ring light with stand ($79) — go 18\" for proper full-face coverage", "More acoustic panels — cover first reflection points on side walls"],
                  why: "Once you have stability and basic light, audio is the single biggest remaining differentiator between amateur and professional content.",
                },
                {
                  step: 3,
                  tier: "$200–$400",
                  title: "Workflow Tools",
                  items: ["Teleprompter ($79–$149) — reduce retakes, post more consistently", "Better wireless mic (DJI, Rode) if audio is critical to your content", "Professional lighting (LED panel or larger ring) for color-accurate skin tones"],
                  why: "At this stage you're optimizing for speed and consistency. Posting frequency matters more than gear quality for most growing channels.",
                },
                {
                  step: 4,
                  tier: "$400+",
                  title: "Professional Treatment",
                  items: ["Professional acoustic panels (rigid fiberglass) — Acoustimac or equivalent", "App-controlled lighting (Elgato) for consistent looks across all content", "Camera upgrade if phone limitations are genuinely visible to viewers"],
                  why: "This tier is for creators generating income or producing at a semi-professional level. Don't rush here — the previous tiers carry most creators for years.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "14px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "16px 20px",
                      backgroundColor: "#f9fafb",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#facc15",
                        color: "#1e0a3c",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <span style={{ color: "#7c3aed", fontSize: "0.78rem", fontWeight: 700 }}>{step.tier}</span>
                      <h3 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1rem" }}>{step.title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <ul className="flex flex-col gap-2 mb-3">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle size={14} color="#7c3aed" style={{ marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ color: "#374151", fontSize: "0.875rem" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p style={{ color: "#6b7280", fontSize: "0.82rem", fontStyle: "italic", lineHeight: 1.6, borderTop: "1px solid #f3f4f6", paddingTop: "12px" }}>
                      <strong>Why this order:</strong> {step.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Lighting Tips */}
        <AnimatedSection>
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 900, fontSize: "1.6rem", marginBottom: "20px" }}>
              Lighting Tips for Small Rooms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Window Placement",
                  content: "If you have a window, film facing toward it or with it at a 45° angle to your side. Natural light is your best friend when it's consistent — use it as a fill light or key light during the golden hours. Never film with a window behind you unless you're matching it with a powerful artificial source.",
                },
                {
                  title: "Ring Light Distance",
                  content: "Position your ring light 3–4 feet from your face for 18\" rings. Closer creates harsh, high-contrast lighting; further creates soft, flattering light but loses intensity. The ring should be at eye level or 10–15° above it — never below unless you want a horror movie effect.",
                },
                {
                  title: "Avoiding Shadows",
                  content: "Shadows form when your light source is too far to one side or too far above. To minimize them: move your light closer to the camera axis, add a second fill light from the opposite side, or use a reflector (a white foam board works perfectly). Keep at least 3 feet between yourself and the wall behind you.",
                },
                {
                  title: "Color Temperature",
                  content: "Match your room light to your ring light. Warm light (2700–3500K) creates a cozy, intimate feel. Cool light (5000–6500K) creates a professional, bright studio look. Most creators prefer 4500–5000K as a neutral starting point. Whatever you choose — be consistent across all your content so your brand looks cohesive.",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <h3 style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.95rem", marginBottom: "10px" }}>
                    {tip.title}
                  </h3>
                  <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.7 }}>{tip.content}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Audio Tips */}
        <AnimatedSection>
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 900, fontSize: "1.6rem", marginBottom: "20px" }}>
              Audio Tips: Room Treatment on a Budget
            </h2>
            <div
              style={{
                backgroundColor: "#fff",
                border: "2px solid #e5e7eb",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "20px",
              }}
            >
              <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "16px" }}>
                <strong>The acoustic treatment priority list for creators:</strong>
              </p>
              <ol style={{ color: "#374151", fontSize: "0.875rem", lineHeight: 1.75, paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}><strong>Corners first</strong> — acoustic energy builds up in corners. Two bass traps in the corners closest to your microphone treat more low-frequency buildup per dollar than any other placement.</li>
                <li style={{ marginBottom: "8px" }}><strong>Wall behind you</strong> — the surface your sound bounces directly back from. Four panels here eliminate the most obvious echo in your recordings.</li>
                <li style={{ marginBottom: "8px" }}><strong>First reflection points</strong> — stand where you film. Clap once. The spots on the side walls where the sound bounces to your microphone are your first reflection points. Find them and cover them.</li>
                <li><strong>Ceiling above</strong> — if you have hard floors and high ceilings, a panel or two above your recording position helps significantly with the hardest-to-treat reflections.</li>
              </ol>
            </div>
            <div
              style={{
                backgroundColor: "#fffbeb",
                border: "2px solid #fde68a",
                borderRadius: "12px",
                padding: "16px 20px",
              }}
            >
              <p style={{ color: "#92400e", fontSize: "0.875rem", lineHeight: 1.65 }}>
                <strong>The egg carton myth:</strong> Egg cartons, mattresses, moving blankets, and pillows do not provide meaningful acoustic treatment. They absorb some very high frequencies but do nothing for the mid-frequency reflections that make recordings sound muddy and unprofessional. Invest in actual acoustic foam or rigid fiberglass panels.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Background Tips */}
        <AnimatedSection>
          <section style={{ marginBottom: "52px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 900, fontSize: "1.6rem", marginBottom: "20px" }}>
              Background: What Works on Camera
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                style={{
                  backgroundColor: "#f0fdf4",
                  border: "2px solid #86efac",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#15803d", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
                  What Works
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Clean, plain-colored walls (dark or neutral)",
                    "Acoustic panel arrangements (aesthetic + functional)",
                    "Minimalist bookshelves with intentional objects",
                    "LED strip lights behind monitor or on wall",
                    "Solid color muslin or paper backdrops",
                    "Blurred backgrounds with wide aperture cameras",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={14} color="#16a34a" style={{ marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ color: "#374151", fontSize: "0.875rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  backgroundColor: "#fef2f2",
                  border: "2px solid #fca5a5",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h3 style={{ color: "#dc2626", fontWeight: 700, fontSize: "1rem", marginBottom: "12px" }}>
                  What Doesn&apos;t Work
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Windows directly behind you (silhouette effect)",
                    "Busy patterned wallpaper or curtains",
                    "Mirrors that reflect the camera or lights",
                    "Unmade beds or visible clutter",
                    "Posters with text (distracting to viewers)",
                    "White walls without any treatment (look amateurish)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "#dc2626", fontSize: "1rem", lineHeight: 1, flexShrink: 0 }}>✕</span>
                      <span style={{ color: "#374151", fontSize: "0.875rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA to articles */}
        <AnimatedSection>
          <section
            style={{
              background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
              borderRadius: "20px",
              padding: "36px",
              marginBottom: "52px",
            }}
          >
            <h2 style={{ color: "#fafafa", fontWeight: 800, fontSize: "1.3rem", marginBottom: "8px" }}>
              Ready to Shop for Your Setup?
            </h2>
            <p style={{ color: "rgba(250,250,250,0.7)", fontSize: "0.9rem", marginBottom: "24px" }}>
              Now that you know what you need and in what order — find the best specific products for each category.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Best Wireless Mics", slug: "best-wireless-lavalier-mics-tiktok-youtube" },
                { label: "Best Lights for Streaming", slug: "best-lights-streaming-content-creation" },
                { label: "Best LED Strip Lights", slug: "best-led-strip-lights-bedroom-gaming" },
                { label: "Best Phone Tripods", slug: "best-phone-tripods-content-creators" },
                { label: "Best Webcams", slug: "best-webcams-live-streaming" },
              ].map((link) => (
                <Link
                  key={link.slug}
                  href={`/best/${link.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "rgba(250,204,21,0.15)",
                    border: "1px solid rgba(250,204,21,0.4)",
                    color: "#facc15",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background-color 0.2s ease",
                  }}
                  className="hover:bg-yellow-400 hover:text-purple-950"
                >
                  {link.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: "48px" }}>
            <FAQ items={faqItems} />
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
