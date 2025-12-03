import Link from "next/link";
import Badge from "./Badge";
import PixelBlast from "./PixelBlast";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl px-6 py-14 shadow-2xl sm:px-12 sm:py-16">
      <div className="absolute inset-0 -z-10 opacity-70">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
          className="pointer-events-none"
        />
      </div>
      <div className="absolute inset-0 -z-5 bg-gradient-to-br from-[color:var(--background)]/70 via-[color:var(--background)]/60 to-[color:var(--background)]/40" />
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge tone="ember">Portfolio</Badge>
          <h1 className="text-4xl font-display font-semibold text-[color:var(--foreground)] sm:text-5xl">
            Visual storytelling that blends motion, design, and the web.
          </h1>
          <p className="text-lg text-[color:var(--muted-foreground)]">
            I craft cinematic sequences, bold identities, and web experiences that feel alive. Explore the work or
            request access to the admin to see how the projects are managed.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/gallery"
              className="rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              View gallery
            </Link>
            <Link
              href="/portfolio/site-lumen"
              className="rounded-full border px-5 py-3 text-sm font-semibold text-[color:var(--foreground)] transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", background: "var(--card)" }}
            >
              See a featured project
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-4 rounded-[32px] border border-white/20 blur-lg" />
          <div
            className="relative rounded-[32px] p-4 shadow-2xl backdrop-blur"
            style={{ background: "var(--card)", border: `1px solid var(--border)` }}
          >
            <div className="grid grid-cols-3 gap-3">
              {["cinema", "design", "web"].map((label) => (
                <div
                  key={label}
                  className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[color:var(--primary)]/15 to-[color:var(--accent)]/15 p-3 text-[color:var(--foreground)] shadow-inner"
                >
                  <p className="text-sm font-semibold capitalize">{label}</p>
                  <div className="mt-4 h-full rounded-xl bg-[color:var(--muted)]" />
                </div>
              ))}
            </div>
            <div
              className="mt-3 flex items-center justify-between rounded-2xl px-4 py-3"
              style={{ background: "var(--muted)" }}
            >
              <span className="text-sm font-semibold text-[color:var(--foreground)]">6 case studies</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">Multi-format</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
