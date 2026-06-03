import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | ClipRoomStudio",
  description: "ClipRoomStudio affiliate disclosure — how our Amazon Associates links work.",
  alternates: { canonical: `${site.url}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)", padding: "48px 0 40px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: "#fafafa", fontWeight: 900, fontSize: "2rem" }}>Affiliate Disclosure</h1>
          <p style={{ color: "rgba(250,250,250,0.65)", marginTop: "8px" }}>Last updated: December 15, 2024</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem" }}>
          <div
            style={{
              backgroundColor: "#fffbeb",
              border: "2px solid #fde68a",
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "32px",
            }}
          >
            <p style={{ color: "#92400e", fontWeight: 600 }}>
              <strong>Summary:</strong> {site.name} earns commissions from Amazon when you click our links and make purchases. This costs you nothing extra. Our recommendations are not influenced by these commissions.
            </p>
          </div>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "0", marginBottom: "12px" }}>Amazon Associates Program</h2>
          <p>{site.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
          <p style={{ marginTop: "12px" }}>When you click on an affiliate link on our site and subsequently make a purchase on Amazon.com, we receive a small commission. The commission is paid by Amazon and does not affect the price you pay — you pay the same price you would pay visiting Amazon directly.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>How We Use Affiliate Commissions</h2>
          <p>Commissions earned through our affiliate links help us:</p>
          <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
            <li>Maintain and improve this website</li>
            <li>Research and evaluate products for our reviews</li>
            <li>Produce more in-depth guides and content</li>
            <li>Keep all content free for readers</li>
          </ul>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>Editorial Independence</h2>
          <p>Our product selections and rankings are based solely on editorial judgment, research, and analysis of available information. We do not:</p>
          <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
            <li>Accept payment for positive reviews</li>
            <li>Guarantee positive coverage in exchange for affiliate relationships</li>
            <li>Rank products higher because they generate higher commissions</li>
            <li>Accept free products in exchange for favorable reviews</li>
          </ul>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>FTC Disclosure Compliance</h2>
          <p>In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials (16 CFR Part 255), we disclose our affiliate relationships on all pages containing affiliate links. Look for the affiliate disclosure notice at the bottom of article pages and in our article headers.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>Price and Availability Accuracy</h2>
          <p>Product prices and availability on Amazon change frequently. Prices shown on our site are editorial estimates based on research at the time of writing. Always check the current price on Amazon before purchasing. We are not responsible for pricing discrepancies.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>Contact</h2>
          <p>Questions about our affiliate relationships? Contact us at: <a href={`mailto:${site.email}`} style={{ color: "#7c3aed" }}>{site.email}</a></p>
        </div>
      </div>
    </div>
  );
}
