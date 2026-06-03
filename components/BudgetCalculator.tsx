"use client";

import { useState } from "react";
import { Calculator, ChevronRight } from "lucide-react";

type ContentType = "TikTok" | "YouTube" | "Podcast";
type BudgetRange = "under100" | "100-300" | "300-600" | "600plus";

interface GearItem {
  item: string;
  reason: string;
  priority: number;
}

const recommendations: Record<ContentType, Record<BudgetRange, GearItem[]>> = {
  TikTok: {
    "under100": [
      { item: "Phone Tripod ($28–$35)", reason: "Stability is instant credibility. No shaky cam.", priority: 1 },
      { item: "Ring Light, 10\" ($35–$45)", reason: "TikTok is visual-first — lighting before everything else.", priority: 2 },
      { item: "Acoustic Foam Panels, 12-pack ($24–$29)", reason: "Treat your room echo so your built-in mic sounds cleaner.", priority: 3 },
    ],
    "100-300": [
      { item: "Phone Tripod + Bluetooth Remote ($35)", reason: "Trigger recording without running back to your phone.", priority: 1 },
      { item: "Ring Light, 18\" kit ($79)", reason: "Full-body TikTok content needs a larger light source.", priority: 2 },
      { item: "Wireless Lav Mic ($89–$159)", reason: "Clear voice audio separates viral TikToks from forgettable ones.", priority: 3 },
      { item: "Acoustic Panels, 12-pack ($29)", reason: "Treat the wall behind you for cleaner audio.", priority: 4 },
    ],
    "300-600": [
      { item: "Wireless Lav Mic — Hollyland Lark M2 ($159)", reason: "Best-in-class audio for under $200 with noise cancellation.", priority: 1 },
      { item: "Ring Light, 18\" premium ($79–$149)", reason: "Professional lighting with color temp control.", priority: 2 },
      { item: "Joby GorillaPod 5K ($79)", reason: "Flexible mounting adapts to any filming location.", priority: 3 },
      { item: "Acoustic Panels — BUBOS ($59)", reason: "Camera-ready panels that double as an impressive background.", priority: 4 },
      { item: "Teleprompter — Parrot ($95)", reason: "Script more content, film faster, post more consistently.", priority: 5 },
    ],
    "600plus": [
      { item: "DJI Mic 2 ($329)", reason: "32-bit float recording — never worry about clipping.", priority: 1 },
      { item: "Elgato Ring Light ($199)", reason: "App-controlled professional lighting with 2500 lumen output.", priority: 2 },
      { item: "Joby GorillaPod 5K ($79)", reason: "Flexible pro-grade mounting for creative angles.", priority: 3 },
      { item: "Acoustimac Panels ($149)", reason: "Professional rigid fiberglass treatment for studio-quality audio.", priority: 4 },
      { item: "Parrot Teleprompter 2 ($95)", reason: "High-output creators script everything — teleprompter is essential.", priority: 5 },
    ],
  },
  YouTube: {
    "under100": [
      { item: "Phone Tripod, 67\" ($35)", reason: "Stable talking-head video is the foundation of a YouTube channel.", priority: 1 },
      { item: "Ring Light, 10\" ($35–$45)", reason: "Even cheap lighting beats filming with a lamp behind you.", priority: 2 },
      { item: "Acoustic Foam, 12-pack ($24)", reason: "YouTube viewers tolerate a lot — except bad audio.", priority: 3 },
    ],
    "100-300": [
      { item: "Ring Light, 18\" full kit ($79)", reason: "YouTube's longer format requires more polished production.", priority: 1 },
      { item: "Wireless Lav Mic, entry level ($89–$159)", reason: "Clear voice audio is non-negotiable for 10–20 minute videos.", priority: 2 },
      { item: "Phone Tripod with remote ($35)", reason: "Start and stop recording from anywhere in your room.", priority: 3 },
      { item: "Acoustic Panels ($29–$59)", reason: "YouTube's algorithm favors watch time — bad audio tanks it.", priority: 4 },
    ],
    "300-600": [
      { item: "Rode Wireless GO II ($299)", reason: "Dual-channel for interviews, backup recording for long sessions.", priority: 1 },
      { item: "Elgato or Godox Ring Light ($149)", reason: "App-controlled lighting matches professional productions.", priority: 2 },
      { item: "Joby GorillaPod 5K ($79)", reason: "One tripod that handles phone and mirrorless as you upgrade.", priority: 3 },
      { item: "BUBOS Acoustic Panels ($59)", reason: "Good-looking panels create a recognizable YouTube background.", priority: 4 },
      { item: "Teleprompter — Imaginer Flex ($129)", reason: "Script-to-upload faster by eliminating retakes.", priority: 5 },
    ],
    "600plus": [
      { item: "DJI Mic 2 ($329)", reason: "The professional's wireless audio choice — zero compromise.", priority: 1 },
      { item: "Elgato Ring Light ($199)", reason: "Stream Deck integration + professional 2500 lumen output.", priority: 2 },
      { item: "Joby GorillaPod 5K ($79)", reason: "Built for cameras, not just phones — future-proof.", priority: 3 },
      { item: "Acoustimac DMD Panels ($149)", reason: "Professional broadband absorption for genuinely accurate audio.", priority: 4 },
      { item: "Glide Gear TMP 100 Teleprompter ($149)", reason: "Camera-grade teleprompter for scripted professional content.", priority: 5 },
    ],
  },
  Podcast: {
    "under100": [
      { item: "Acoustic Foam Panels, 12-pack ($24–$29)", reason: "For audio-only content, room treatment is priority #1.", priority: 1 },
      { item: "Phone Tripod or stand ($19–$35)", reason: "Stable mic positioning — even if using phone as recorder.", priority: 2 },
      { item: "Bass Trap Corners ($49)", reason: "Low-end room modes kill podcast audio — treat corners first.", priority: 3 },
    ],
    "100-300": [
      { item: "Wireless Lav Mic — Hollyland Lark M2 ($159)", reason: "Record guest and host wirelessly — essential for interview podcasts.", priority: 1 },
      { item: "Acoustic Panels — BUBOS ($59)", reason: "Deadens the room for clean, broadcast-quality audio.", priority: 2 },
      { item: "TroyStudio Bass Traps ($49)", reason: "Eliminates low-frequency room modes that foam doesn't treat.", priority: 3 },
    ],
    "300-600": [
      { item: "Rode Wireless GO II ($299)", reason: "Dual-channel is perfect for guest-host podcast recording.", priority: 1 },
      { item: "Acoustimac DMD Panels ($149)", reason: "Professional rigid fiberglass — worth the investment for audio-only.", priority: 2 },
      { item: "Ring Light (optional for video podcasts) ($79)", reason: "Add video to your podcast for YouTube distribution.", priority: 3 },
      { item: "Teleprompter for show notes ($95)", reason: "Keep your topics on screen without losing eye contact.", priority: 4 },
    ],
    "600plus": [
      { item: "Rode Wireless GO II ($299)", reason: "Best dual-channel wireless for professional podcast production.", priority: 1 },
      { item: "Acoustimac DMD + TroyStudio Bass Traps ($198)", reason: "Full broadband treatment — professional studio environment.", priority: 2 },
      { item: "Elgato Ring Light ($199)", reason: "Video podcast lighting with app control for consistent look.", priority: 3 },
      { item: "Glide Gear Teleprompter ($149)", reason: "Camera-mounted prompter for scripted podcast openings and outros.", priority: 4 },
    ],
  },
};

const contentTypes: ContentType[] = ["TikTok", "YouTube", "Podcast"];
const budgetRanges: { key: BudgetRange; label: string }[] = [
  { key: "under100", label: "Under $100" },
  { key: "100-300", label: "$100–$300" },
  { key: "300-600", label: "$300–$600" },
  { key: "600plus", label: "$600+" },
];

export default function BudgetCalculator() {
  const [contentType, setContentType] = useState<ContentType | null>(null);
  const [budget, setBudget] = useState<BudgetRange | null>(null);

  const result =
    contentType && budget ? recommendations[contentType][budget] : null;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        border: "2px solid #e5e7eb",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(30,10,60,0.08)",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Calculator size={28} color="#facc15" />
        <div>
          <h3 style={{ color: "#fafafa", fontWeight: 800, fontSize: "1.2rem" }}>
            Budget Calculator
          </h3>
          <p style={{ color: "rgba(250,250,250,0.7)", fontSize: "0.85rem" }}>
            Get your personalized gear priority list
          </p>
        </div>
      </div>

      <div style={{ padding: "28px" }}>
        {/* Step 1 */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.9rem", marginBottom: "12px" }}>
            Step 1: What type of content do you make?
          </p>
          <div className="flex flex-wrap gap-3">
            {contentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setContentType(type)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: contentType === type ? "2px solid #7c3aed" : "2px solid #e5e7eb",
                  backgroundColor: contentType === type ? "#f3f0ff" : "#fff",
                  color: contentType === type ? "#7c3aed" : "#4b5563",
                  fontWeight: contentType === type ? 700 : 500,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.9rem", marginBottom: "12px" }}>
            Step 2: What&apos;s your gear budget?
          </p>
          <div className="flex flex-wrap gap-3">
            {budgetRanges.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setBudget(key)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: budget === key ? "2px solid #facc15" : "2px solid #e5e7eb",
                  backgroundColor: budget === key ? "#fffbeb" : "#fff",
                  color: budget === key ? "#92400e" : "#4b5563",
                  fontWeight: budget === key ? 700 : 500,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {result && (
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "12px",
              border: "2px solid #facc15",
              padding: "20px",
            }}
          >
            <p style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1rem", marginBottom: "16px" }}>
              Your recommended gear priority list for {contentType} at {budgetRanges.find(b => b.key === budget)?.label}:
            </p>
            <div className="flex flex-col gap-3">
              {result.map((gear, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "14px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#facc15",
                      color: "#1e0a3c",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      flexShrink: 0,
                    }}
                  >
                    {gear.priority}
                  </span>
                  <div>
                    <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.9rem" }}>
                      {gear.item}
                    </p>
                    <p style={{ color: "#6b7280", fontSize: "0.82rem", marginTop: "2px" }}>
                      {gear.reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
              <a
                href="/guides/how-to-set-up-creator-room"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#7c3aed",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
              >
                See our full room setup guide
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        )}

        {!result && (
          <div
            style={{
              textAlign: "center",
              padding: "24px",
              color: "#9ca3af",
              fontSize: "0.9rem",
            }}
          >
            Select your content type and budget to see your gear priority list
          </div>
        )}
      </div>
    </div>
  );
}
