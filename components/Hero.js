import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import CardSwap, { Card } from "./CardSwap";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl px-6 py-14 shadow-2xl sm:px-12 sm:py-16" style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <Badge tone="neutral">Personal Portfolio</Badge>
          <BlurText
            text="hola, soy Digo. film-maker, coder, & designer."
            delay={300}
            animateBy="words"
            direction="top"
            className="text-4xl font-display font-semibold text-white sm:text-5xl"
          />
          <p className="text-lg text-slate-100">
            I dont know why i build this website actually. But if you want to know more about me, check out my gallery and projects.
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
                <div className="flex flex-col items-start gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Cinematography</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">Cinematic sequences</h3>
                    <p className="text-sm text-slate-600">
                      Short films, aerials, and moody cuts shaped for screens and stages.
                    </p>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1200&q=90"
                      alt="Cinematography frame"
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>

              <Card className="bg-white/90 px-5 py-4 text-left text-ink shadow-2xl">
                <div className="flex flex-col items-start gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Graphic Design</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">Bold identities</h3>
                    <p className="text-sm text-slate-600">
                      Poster systems, logo marks, and kinetic visuals ready for campaigns.
                    </p>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=90"
                      alt="Graphic design poster"
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
              <Card className="bg-white/90 px-5 py-4 text-left text-ink shadow-2xl">
                <div className="flex flex-col items-start gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Web</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">Digital experiences</h3>
                    <p className="text-sm text-slate-600">
                      Fast, responsive sites with immersive storytelling and motion.
                    </p>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90"
                      alt="Web interface"
                      fill
                      sizes="(min-width: 1024px) 320px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
