"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          backgroundColor: "#f0fdf4",
          border: "2px solid #86efac",
          borderRadius: "16px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <CheckCircle size={48} color="#16a34a" style={{ margin: "0 auto 16px" }} />
        <h3 style={{ color: "#15803d", fontWeight: 800, fontSize: "1.2rem", marginBottom: "8px" }}>
          Message sent!
        </h3>
        <p style={{ color: "#16a34a", fontSize: "0.9rem" }}>
          Thanks for reaching out. We&apos;ll reply to {form.email} within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            style={{ display: "block", color: "#1e0a3c", fontWeight: 600, fontSize: "0.875rem", marginBottom: "6px" }}
          >
            Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #e5e7eb",
              fontSize: "0.9rem",
              color: "#1e0a3c",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
          />
        </div>
        <div>
          <label
            style={{ display: "block", color: "#1e0a3c", fontWeight: 600, fontSize: "0.875rem", marginBottom: "6px" }}
          >
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "2px solid #e5e7eb",
              fontSize: "0.9rem",
              color: "#1e0a3c",
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
          />
        </div>
      </div>

      <div>
        <label
          style={{ display: "block", color: "#1e0a3c", fontWeight: 600, fontSize: "0.875rem", marginBottom: "6px" }}
        >
          Subject *
        </label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          placeholder="What can we help with?"
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "10px",
            border: "2px solid #e5e7eb",
            fontSize: "0.9rem",
            color: "#1e0a3c",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        />
      </div>

      <div>
        <label
          style={{ display: "block", color: "#1e0a3c", fontWeight: 600, fontSize: "0.875rem", marginBottom: "6px" }}
        >
          Message *
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us what you&apos;re working on..."
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "10px",
            border: "2px solid #e5e7eb",
            fontSize: "0.9rem",
            color: "#1e0a3c",
            outline: "none",
            resize: "vertical",
            transition: "border-color 0.2s ease",
            fontFamily: "inherit",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        />
      </div>

      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: "#facc15",
          color: "#1e0a3c",
          padding: "14px 28px",
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: "0 4px 14px rgba(250,204,21,0.3)",
        }}
        className="hover:scale-105"
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}
