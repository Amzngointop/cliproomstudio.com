import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | ClipRoomStudio",
  description: "ClipRoomStudio privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)", padding: "48px 0 40px" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: "#fafafa", fontWeight: 900, fontSize: "2rem" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(250,250,250,0.65)", marginTop: "8px" }}>Last updated: December 15, 2024</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ color: "#374151", lineHeight: 1.75, fontSize: "0.95rem" }}>
          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>1. Introduction</h2>
          <p>Welcome to {site.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit {site.domain}.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>2. Information We Collect</h2>
          <p><strong>Information you provide:</strong> When you contact us via our contact form, we collect your name, email address, and message content.</p>
          <p style={{ marginTop: "12px" }}><strong>Automatically collected information:</strong> Like most websites, we may collect standard log data including your IP address, browser type, pages visited, and time spent on pages. We may use analytics tools (such as Google Analytics) that collect this data on our behalf.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>3. How We Use Your Information</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
            <li>To respond to your inquiries and contact form submissions</li>
            <li>To improve our website content and user experience</li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>4. Cookies</h2>
          <p>We may use cookies and similar tracking technologies to enhance your browsing experience. These may include analytics cookies (Google Analytics) and advertising cookies. You can control cookie settings through your browser preferences.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>5. Amazon Associates and Third-Party Links</h2>
          <p>We participate in the Amazon Associates program. When you click affiliate links on our site and make purchases on Amazon, Amazon may place cookies on your browser. Amazon&apos;s privacy policy governs their data collection practices. We do not receive personal information about your Amazon purchases.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>6. Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytical purposes. We may disclose information when required by law.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>7. Data Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at {site.email}.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>9. Children&apos;s Privacy</h2>
          <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, contact us immediately.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top reflects the most recent revision. Continued use of our website after changes constitutes acceptance of the revised policy.</p>

          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginTop: "32px", marginBottom: "12px" }}>11. Contact Us</h2>
          <p>For privacy-related questions, contact us at: <a href={`mailto:${site.email}`} style={{ color: "#7c3aed" }}>{site.email}</a></p>
        </div>
      </div>
    </div>
  );
}
