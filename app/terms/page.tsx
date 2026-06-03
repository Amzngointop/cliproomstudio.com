import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | ClipRoomStudio",
  description: "ClipRoomStudio terms and conditions of use.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)", padding: "48px 0 40px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: "#fafafa", fontWeight: 900, fontSize: "2rem" }}>Terms & Conditions</h1>
          <p style={{ color: "rgba(250,250,250,0.65)", marginTop: "8px" }}>Last updated: December 15, 2024</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem" }}>
          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>1. Acceptance of Terms</h2>
          <p>By accessing and using {site.domain} (the &quot;Site&quot;), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>2. Use of the Site</h2>
          <p>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
          <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
            <li>Copy or reproduce our content without written permission</li>
            <li>Use our content for commercial purposes without authorization</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Transmit harmful, offensive, or illegal content</li>
          </ul>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>3. Affiliate Relationships</h2>
          <p>{site.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program. We earn commissions from qualifying purchases made through our affiliate links. This does not affect the price you pay. See our <a href="/affiliate-disclosure" style={{ color: "#7c3aed" }}>Affiliate Disclosure</a> for full details.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>4. Editorial Independence</h2>
          <p>Our product recommendations are based on editorial judgment and research. Affiliate relationships do not influence our reviews or rankings. We do not accept payment for positive reviews.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>5. Disclaimer of Warranties</h2>
          <p>The content on this Site is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of product information, pricing, or availability. Prices and product availability are subject to change without notice.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>6. Limitation of Liability</h2>
          <p>{site.name} and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site or products purchased based on our recommendations.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>7. Intellectual Property</h2>
          <p>All content on this Site, including text, graphics, logos, and design, is the property of {site.name} and is protected by copyright law. Unauthorized reproduction or distribution is prohibited.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>8. Third-Party Links</h2>
          <p>Our Site contains links to third-party websites including Amazon. We are not responsible for the content, privacy practices, or terms of these external sites. Visiting third-party sites is at your own risk.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Arizona, USA, without regard to its conflict of law provisions.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>10. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes are effective when posted. Continued use of the Site after changes constitutes acceptance.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>11. Contact</h2>
          <p>For questions about these Terms, contact us at: <a href={`mailto:${site.email}`} style={{ color: "#7c3aed" }}>{site.email}</a></p>
        </div>
      </div>
    </div>
  );
}
