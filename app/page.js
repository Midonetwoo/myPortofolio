import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import SectionHeader from "../components/SectionHeader";
import Badge from "../components/Badge";
import { portfolioItems } from "../data/portfolio";

export default function HomePage() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <div className="space-y-12">
      <Hero />

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Blending video, visuals, and digital product"
          description="A snapshot of recent work across cinematography, graphic design, and websites. Tap into a detail page to see full descriptions and links."
          action={<Badge tone="neutral">{portfolioItems.length} projects</Badge>}
        />
        <PortfolioGrid items={featured} />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Cinematography",
            text: "Short films, music videos, and kinetic sequences designed for both stage and screen.",
            accent: "bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--chart-4)]"
          },
          {
            title: "Graphic Design",
            text: "Identity systems, poster series, and layouts that carry strong typography and motion.",
            accent: "bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--chart-5)]"
          },
          {
            title: "Web Experience",
            text: "Fast, responsive sites with story-driven case studies and purposeful interactions.",
            accent: "bg-gradient-to-br from-[color:var(--secondary)] to-[color:var(--chart-2)]"
          }
        ].map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div className={`h-24 ${item.accent}`} />
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{item.title}</h3>
              <p className="text-sm text-[color:var(--muted-foreground)]">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
