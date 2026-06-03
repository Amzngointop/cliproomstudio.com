import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, Users, BarChart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import AuthorBio from "@/components/AuthorBio";
import ExpertQuote from "@/components/ExpertQuote";
import AnimatedSection from "@/components/AnimatedSection";
import { articles } from "@/data/articles";
import { lavalierMics, streamingLights, phoneTripods, webcams, ledStripLights } from "@/data/products";
import type { Product } from "@/data/products";
import { site } from "@/data/site";

const productsByCategory: Record<string, Product[]> = {
  "lavalier-mics": lavalierMics,
  "streaming-lights": streamingLights,
  "phone-tripods": phoneTripods,
  webcams: webcams,
  "led-strip-lights": ledStripLights,
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${site.url}/best/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${site.url}/best/${slug}`,
      type: "article",
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
    },
  };
}

export default async function BestArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const products = productsByCategory[article.productCategory] ?? [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.publishDate,
    dateModified: article.updatedDate,
    author: { "@type": "Person", name: article.author.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e0a3c 0%, #3b1a6e 100%)",
          padding: "96px 0 48px",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(250,204,21,0.8)",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: "20px",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            className="hover:text-yellow-400"
          >
            <ArrowLeft size={16} />
            All Best Picks
          </Link>
          <h1
            style={{
              color: "#fafafa",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "16px",
              marginTop: "16px",
            }}
          >
            {article.title}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              color: "rgba(250,250,250,0.6)",
              fontSize: "0.85rem",
            }}
          >
            <span>By {article.author.name}</span>
            <span>Updated {new Date(article.updatedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Author Bio */}
        <AnimatedSection>
          <div style={{ marginBottom: "40px" }}>
            <AuthorBio
              name={article.author.name}
              title={article.author.title}
              bio={article.author.bio}
            />
          </div>
        </AnimatedSection>

        {/* Affiliate disclosure */}
        <div
          style={{
            backgroundColor: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "0.82rem",
            color: "#92400e",
            marginBottom: "32px",
          }}
        >
          <strong>Affiliate Disclosure:</strong> We earn a small commission from Amazon purchases made through our links, at no extra cost to you.{" "}
          <Link href="/affiliate-disclosure" style={{ color: "#7c3aed" }}>
            Learn more
          </Link>
        </div>

        {/* Stats intro */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {article.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: "#f3f0ff",
                  borderRadius: "12px",
                  padding: "16px",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <TrendingUp size={20} color="#7c3aed" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#7c3aed", fontWeight: 800, fontSize: "1.1rem" }}>{stat.value}</p>
                  <p style={{ color: "#4b5563", fontSize: "0.8rem", lineHeight: 1.4 }}>{stat.label}</p>
                  <p style={{ color: "#9ca3af", fontSize: "0.72rem", marginTop: "2px" }}>Source: {stat.source}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.8, marginBottom: "40px" }}>
            {article.intro}
          </p>
        </AnimatedSection>

        {/* Expert Quote */}
        <AnimatedSection>
          <div style={{ marginBottom: "40px" }}>
            <ExpertQuote
              quote={article.expertQuote.quote}
              name={article.expertQuote.name}
              title={article.expertQuote.title}
            />
          </div>
        </AnimatedSection>

        {/* Who is this for */}
        <AnimatedSection>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.4rem", marginBottom: "20px" }}>
              Who Is This Guide For?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(
                [
                  { icon: <Users size={18} />, label: "Beginner", text: article.whoIsItFor.beginner, color: "#10b981" },
                  { icon: <BarChart size={18} />, label: "Intermediate", text: article.whoIsItFor.intermediate, color: "#f59e0b" },
                  { icon: <TrendingUp size={18} />, label: "Advanced", text: article.whoIsItFor.advanced, color: "#7c3aed" },
                ] as Array<{ icon: React.ReactNode; label: string; text: string; color: string }>
              ).map((tier) => (
                <div
                  key={tier.label}
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <div style={{ color: tier.color, marginBottom: "8px" }}>{tier.icon}</div>
                  <p style={{ color: tier.color, fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                    {tier.label}
                  </p>
                  <p style={{ color: "#4b5563", fontSize: "0.85rem", lineHeight: 1.6 }}>{tier.text}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Budget Tiers Table */}
        <AnimatedSection>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.4rem", marginBottom: "20px" }}>
              Budget Tiers at a Glance
            </h2>
            <div style={{ overflowX: "auto", borderRadius: "12px", border: "2px solid #e5e7eb" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#1e0a3c" }}>
                    <th style={{ color: "#facc15", padding: "12px 16px", textAlign: "left", fontWeight: 700, fontSize: "0.82rem" }}>Tier</th>
                    <th style={{ color: "#facc15", padding: "12px 16px", textAlign: "left", fontWeight: 700, fontSize: "0.82rem" }}>Our Pick</th>
                    <th style={{ color: "#facc15", padding: "12px 16px", textAlign: "left", fontWeight: 700, fontSize: "0.82rem" }}>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {article.budgetTiers.map((tier, i) => (
                    <tr key={tier.label} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#faf9ff", borderBottom: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 700, color: "#1e0a3c", fontSize: "0.9rem" }}>{tier.label}</td>
                      <td style={{ padding: "12px 16px", color: "#1e0a3c", fontWeight: 600, fontSize: "0.88rem" }}>{tier.pick}</td>
                      <td style={{ padding: "12px 16px", color: "#6b7280", fontSize: "0.82rem" }}>{tier.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.4rem", marginBottom: "20px" }}>
              Quick Comparison
            </h2>
            <ComparisonTable products={products} />
          </section>
        </AnimatedSection>

        {/* Product Cards */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.6rem", marginBottom: "8px" }}>
            The Best {article.category} — Ranked
          </h2>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "32px" }}>
            Each product reviewed with honest pros, cons, and a clear recommendation on who should buy it.
          </p>
          <div className="flex flex-col gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={0}>
                <ProductCard product={product} rank={i + 1} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Buying Advice */}
        <AnimatedSection>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.4rem", marginBottom: "16px" }}>
              Buying Advice: What to Know Before You Order
            </h2>
            <div className="flex flex-col gap-3">
              {article.buyingAdvice.map((tip, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    backgroundColor: "#f9fafb",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#facc15",
                      color: "#1e0a3c",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.65 }}>{tip}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection>
          <div style={{ marginBottom: "48px" }}>
            <FAQ items={article.faq} />
          </div>
        </AnimatedSection>

        {/* Related Articles */}
        <AnimatedSection>
          <section
            style={{
              backgroundColor: "#f3f0ff",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ color: "#1e0a3c", fontWeight: 800, fontSize: "1.2rem", marginBottom: "16px" }}>
              Related Guides
            </h2>
            <div className="flex flex-col gap-3">
              {article.relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={
                    related.slug.startsWith("how-to")
                      ? `/guides/${related.slug}`
                      : `/best/${related.slug}`
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    border: "1px solid #e5e7eb",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  className="hover:border-purple-300"
                >
                  <span style={{ color: "#1e0a3c", fontWeight: 600, fontSize: "0.9rem" }}>
                    {related.title}
                  </span>
                  <ArrowRight size={16} color="#7c3aed" />
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
}
