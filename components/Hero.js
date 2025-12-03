import Link from "next/link";
import Badge from "./Badge";
import CardSwap, { Card } from "./CardSwap";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl px-6 py-14 shadow-2xl sm:px-12 sm:py-16" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge tone="ember">Portfolio</Badge>
          <BlurText
            text="Visual storytelling that blends motion, design, and the web."
            delay={120}
            animateBy="words"
            direction="top"
            className="text-4xl font-display font-semibold text-white sm:text-5xl"
          />
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
          <div className="relative min-h-[360px]">
            <CardSwap cardDistance={50} verticalDistance={60} delay={4200} pauseOnHover={false}>
              <Card className="bg-white/90 px-5 py-4 text-left text-ink shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Cinematography</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">Cinematic sequences</h3>
                <p className="text-sm text-slate-600">Short films, aerials, and moody cuts shaped for screens and stages.</p>
              </Card>
              <Card className="bg-white/90 px-5 py-4 text-left text-ink shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Graphic Design</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">Bold identities</h3>
                <p className="text-sm text-slate-600">Poster systems, logo marks, and kinetic visuals ready for campaigns.</p>
              </Card>
              <Card className="bg-white/90 px-5 py-4 text-left text-ink shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Web</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">Digital experiences</h3>
                <p className="text-sm text-slate-600">Fast, responsive sites with immersive storytelling and motion.</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
