import SectionHeader from "../../components/SectionHeader";
import Badge from "../../components/Badge";

export const metadata = {
  title: "About | Midonet Portfolio",
  description: "Learn about Midonet and the disciplines covered across cinematography, design, and websites."
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="About"
        title="Midonet — multidisciplinary creative"
        description="I move between cameras, vectors, and code to build stories. The portfolio below is organized by the way the work shows up for clients."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Profile</Badge>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
            Director and designer focused on crafted visuals, crisp edits, and responsive web experiences. I translate
            abstract ideas into motion and clear interactions.
          </p>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Approach</Badge>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
            Close collaboration, fast prototyping, and thoughtful polish. I bring a consistent narrative thread from
            storyboard to final deployment.
          </p>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Capabilities</Badge>
          <ul className="mt-3 space-y-1 text-sm text-[color:var(--muted-foreground)]">
            <li>• Cinematography direction and edit supervision</li>
            <li>• Brand identity and kinetic poster systems</li>
            <li>• Next.js websites with CMS-ready structures</li>
            <li>• Creative leadership for cross-disciplinary teams</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
