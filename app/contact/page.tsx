import type { Metadata } from "next";
import { MapPin, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | ClipRoomStudio",
  description: "Get in touch with the ClipRoomStudio team. Questions about gear, reviews, or affiliate partnerships — we'd love to hear from you.",
  alternates: { canonical: `${site.url}/contact` },
};

const contactFaq = [
  {
    question: "How quickly do you respond to emails?",
    answer:
      "We typically respond to all inquiries within 1–2 business days. For urgent matters, please include 'Urgent' in your subject line.",
  },
  {
    question: "Can I suggest a product for you to review?",
    answer:
      "Yes! We love hearing from creators about gear they want to see covered. Use the contact form and select 'Product Suggestion' as your subject. We can't guarantee coverage but we read every suggestion.",
  },
  {
    question: "Do you accept guest posts or sponsored content?",
    answer:
      "We do not currently accept guest posts. We do not publish sponsored content or paid reviews — our editorial content is strictly independent.",
  },
  {
    question: "I found incorrect information on your site. How do I report it?",
    answer:
      "Please use the contact form and select 'Content Correction' as your subject. Include the specific page URL and the correction you'd like us to make. We appreciate accuracy reports and aim to correct errors within 48 hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
          padding: "56px 0 48px",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            style={{
              color: "#fafafa",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              marginBottom: "12px",
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: "rgba(250,250,250,0.7)", fontSize: "1rem" }}>
            Questions, corrections, or just want to say hi? We&apos;re here.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2
              style={{
                color: "#1e0a3c",
                fontWeight: 800,
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              Get in Touch
            </h2>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#f3f0ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} color="#7c3aed" />
                </div>
                <div>
                  <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.875rem" }}>Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    style={{ color: "#7c3aed", fontSize: "0.875rem", textDecoration: "none" }}
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#f3f0ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} color="#7c3aed" />
                </div>
                <div>
                  <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.875rem" }}>Office</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.5 }}>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                    <br />
                    {site.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "#f3f0ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} color="#7c3aed" />
                </div>
                <div>
                  <p style={{ color: "#1e0a3c", fontWeight: 700, fontSize: "0.875rem" }}>Business Hours</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{site.businessHours}</p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f3f0ff",
                borderRadius: "12px",
                padding: "16px",
                marginTop: "24px",
              }}
            >
              <p style={{ color: "#7c3aed", fontWeight: 700, fontSize: "0.82rem", marginBottom: "6px" }}>
                Typical Response Time
              </p>
              <p style={{ color: "#4b5563", fontSize: "0.82rem" }}>
                We respond to all messages within 1–2 business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2
              style={{
                color: "#1e0a3c",
                fontWeight: 800,
                fontSize: "1.1rem",
                marginBottom: "20px",
              }}
            >
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "64px" }}>
          <FAQ items={contactFaq} title="Common Questions" />
        </div>
      </div>
    </>
  );
}
