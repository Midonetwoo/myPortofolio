import SectionHeader from "../../components/SectionHeader";
import Badge from "../../components/Badge";
import LogoLoop from "../../components/LogoLoop";
import GlareHover from "../../components/GlareHover";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiGnubash,
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiTiktok,
  SiGmail
} from "react-icons/si";
import { FiAward, FiFilm, FiTrendingUp, FiUsers, FiGlobe } from "react-icons/fi";

const iconClass = "h-16 w-16 text-[color:var(--foreground)]";

const techLogos = [
  { node: <SiReact className={iconClass} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={iconClass} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss className={iconClass} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript className={iconClass} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiGnubash className={iconClass} />, title: "Bash", href: "https://www.gnu.org/software/bash/" }
];

const socialLinks = [
  { href: "https://www.instagram.com/mhmddirga.aprilians_/", label: "Instagram", icon: <SiInstagram className="h-6 w-6" /> },
  { href: "https://github.com/Midonetwoo", label: "GitHub", icon: <SiGithub className="h-6 w-6" /> },
  { href: "https://www.linkedin.com/in/muhammad-dirga-apriliansyah-863348265/", label: "LinkedIn", icon: <SiLinkedin className="h-6 w-6" /> },
  { href: "mailto:apriliansyahdirga@gmail.com", label: "Gmail", icon: <SiGmail className="h-6 w-6" /> },
  { href: "https://www.tiktok.com/@dirga.aprilian12", label: "TikTok", icon: <SiTiktok className="h-6 w-6" /> },
  { href: "/", label: "Website", icon: <FiGlobe className="h-6 w-6" /> }
];

const achievements = [ 
  { icon: <FiFilm className="h-5 w-5 text-[color:var(--foreground)]" />, text: "Short film selections at indie festivals (cinematography and edit supervision)." },
  { icon: <FiAward className="h-5 w-5 text-[color:var(--foreground)]" />, text: "Brand refresh that drove a 30% lift in launch sign-ups." },
  { icon: <FiTrendingUp className="h-5 w-5 text-[color:var(--foreground)]" />, text: "Delivered 6+ Next.js sites with sub-1s LCP targets and clean handoffs." },
  { icon: <FiUsers className="h-5 w-5 text-[color:var(--foreground)]" />, text: "Led distributed teams of designers, devs, and editors across sprints." }
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
          <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_1fr] sm:items-center">
            <GlareHover
              width="100%"
              height="220px"
              background="var(--card)"
              borderRadius="14px"
              borderColor="var(--border)"
              glareColor="#ffffff"
              glareOpacity={0.25}
              glareAngle={-25}
              glareSize={220}
              transitionDuration={800}
              className="overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </GlareHover>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Director and designer focused on crafted visuals, crisp edits, and responsive web experiences. I translate
              abstract ideas into motion and clear interactions.
            </p>
          </div>
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
          <ul className="mt-3 space-y-3 text-sm text-[color:var(--muted-foreground)]">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-[2px] rounded-full bg-[color:var(--muted)] p-2 text-[color:var(--foreground)] shadow-sm">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
          <Badge tone="neutral">Social</Badge>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--muted)] text-[color:var(--foreground)]">
                  {link.icon}
                </span>
                <span className="text-[color:var(--foreground)]">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
