import SectionHeader from "../../components/SectionHeader";
import Badge from "../../components/Badge";
import LogoLoop from "../../components/LogoLoop";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiGnubash } from "react-icons/si";

const iconClass = "h-16 w-16 text-[color:var(--foreground)]";

const techLogos = [
  { node: <SiReact className={iconClass} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={iconClass} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss className={iconClass} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript className={iconClass} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiGnubash className={iconClass} />, title: "Bash", href: "https://www.gnu.org/software/bash/" }
];

export const metadata = {
  title: "About | Midonet Portfolio",
  description: "Learn about Midonet and the disciplines covered across cinematography, design, and websites."
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="About"
        title="Midonet - multidisciplinary creative"
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

      <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Technology</p>
            <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Tools and stack I use</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">Core libraries and frameworks powering my builds.</p>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <LogoLoop
            logos={techLogos}
            speed={30}
            direction="left"
            logoHeight={64}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="var(--card)"
            ariaLabel="Technology stack logos"
            className="py-2"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Detailed capabilities</Badge>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted-foreground)]">
            <li>• Storyboarding, shot design, and color direction for narrative and commercial work.</li>
            <li>• Identity systems with motion toolkits, poster series, and launch assets.</li>
            <li>• Web builds in Next.js with animations (GSAP/Motion) and performance budgeting.</li>
            <li>• End-to-end creative direction for campaigns with multi-disciplinary teams.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Achievements</Badge>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted-foreground)]">
            <li>• Short film selections at indie festivals (cinematography and edit supervision).</li>
            <li>• Brand refresh that drove a 30% lift in launch sign-ups.</li>
            <li>• Delivered 6+ Next.js sites with sub-1s LCP targets and clean handoffs.</li>
            <li>• Led distributed teams of designers, devs, and editors across sprints.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Social</Badge>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted-foreground)]">
            <li>
              <a href="https://instagram.com" className="text-accent hover:underline">
                Instagram
              </a>{" "}
              — frame grabs, b-roll tests, and behind-the-scenes stills.
            </li>
            <li>
              <a href="https://vimeo.com" className="text-accent hover:underline">
                Vimeo
              </a>{" "}
              — reels, music video cuts, and short film excerpts.
            </li>
            <li>
              <a href="https://dribbble.com" className="text-accent hover:underline">
                Dribbble
              </a>{" "}
              — poster systems, logo motion, and layout studies.
            </li>
            <li>
              <a href="https://github.com" className="text-accent hover:underline">
                GitHub
              </a>{" "}
              — experiments, Next.js starters, and tooling snippets.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
