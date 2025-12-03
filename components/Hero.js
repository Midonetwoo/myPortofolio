import Link from "next/link";
import Badge from "./Badge";
import SpotlightCard from "./SpotlightCard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl px-6 py-14 shadow-2xl sm:px-12 sm:py-16" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge tone="ember">Portfolio</Badge>
          <h1 className="text-4xl font-display font-semibold text-white sm:text-5xl">
            Visual storytelling that blends motion, design, and the web.
          </h1>
          <p className="text-lg text-slate-100">
            I craft cinematic sequences, bold identities, and web experiences that feel alive. Explore the work or
            request access to the admin to see how the projects are managed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gallery"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              View gallery
            </Link>
            <Link
              href="/portfolio/site-lumen"
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              See a featured project
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <SpotlightCard spotlightColor="rgba(255,255,255,0.2)" className="bg-white/10 text-white backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Cinematography</p>
            <h3 className="mt-2 text-xl font-semibold">Cinematic sequences</h3>
            <p className="text-sm text-slate-200">Short films, aerials, and moody cuts shaped for screens and stages.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(255,255,255,0.18)" className="bg-white/10 text-white backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Graphic Design</p>
            <h3 className="mt-2 text-xl font-semibold">Bold identities</h3>
            <p className="text-sm text-slate-200">Poster systems, logo marks, and kinetic visuals ready for campaigns.</p>
          </SpotlightCard>
          <SpotlightCard spotlightColor="rgba(255,255,255,0.15)" className="bg-white/10 text-white backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Web</p>
            <h3 className="mt-2 text-xl font-semibold">Digital experiences</h3>
            <p className="text-sm text-slate-200">Fast, responsive sites with immersive storytelling and motion.</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
