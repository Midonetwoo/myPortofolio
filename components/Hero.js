import Link from "next/link";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-slate-900 to-ember/80 px-6 py-14 shadow-2xl sm:px-12 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge tone="ember">Portfolio</Badge>
          <h1 className="text-4xl font-display font-semibold text-white sm:text-5xl">
            Visual storytelling that blends motion, design, and the web.
          </h1>
          <p className="text-lg text-slate-200">
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
        <div className="relative">
          <div className="absolute inset-4 rounded-[32px] border border-white/10 blur-lg" />
          <div className="relative rounded-[32px] bg-white/5 p-4 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              {["cinema", "design", "web"].map((label) => (
                <div
                  key={label}
                  className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/15 to-white/5 p-3 text-white shadow-inner"
                >
                  <p className="text-sm font-semibold capitalize">{label}</p>
                  <div className="mt-4 h-full rounded-xl bg-black/50" />
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white">
              <span className="text-sm font-semibold">6 case studies</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">Multi-format</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
