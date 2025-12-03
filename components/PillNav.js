'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function PillNav({
  items,
  activeHref,
  logoText = "MP",
  className = "",
  ease = "power3.out",
  baseColor = "#0b1021",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor,
  initialLoadAnimation = true
}) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector(".pill-label");
        const white = pill.querySelector(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;
      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }
      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { width: "auto", duration: 0.6, ease });
      }
    }
    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease, overwrite: "auto" });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease, overwrite: "auto" });
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor
  };

  return (
    <div className={`relative w-full ${className}`} style={cssVars}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:px-10">
        <Link
          href="/"
          ref={logoRef}
          className="flex items-center gap-2 text-lg font-display font-semibold text-[color:var(--foreground)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-[color:var(--primary-foreground)]">
            {logoText}
          </span>
          Midonet Portfolio
        </Link>

        <div className="hidden gap-2 md:flex" ref={navItemsRef}>
          <ul className="flex list-none items-stretch gap-[6px] rounded-full bg-[color:var(--foreground)]/5 px-2 py-1">
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle = {
                background: "var(--pill-bg, #fff)",
                color: "var(--pill-text, var(--base, #000))",
                paddingLeft: "18px",
                paddingRight: "18px"
              };
              return (
                <li key={item.href} className="relative flex items-center">
                  <Link
                    href={item.href}
                    className="relative inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-wide"
                    style={pillStyle}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle pointer-events-none absolute left-1/2 bottom-0 z-[1] block rounded-full"
                      style={{ background: "var(--base, #000)", willChange: "transform" }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative z-[2] inline-block leading-[1]">
                      <span className="pill-label relative z-[2] inline-block leading-[1]" style={{ willChange: "transform" }}>
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 z-[3] inline-block"
                        style={{ color: "var(--hover-text, #fff)", willChange: "transform, opacity" }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-[6px] h-2 w-2 -translate-x-1/2 rounded-full"
                        style={{ background: "var(--base, #000)" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="md:hidden rounded-full border px-3 py-2 text-sm font-semibold text-[color:var(--foreground)]"
          style={{ borderColor: "var(--border)" }}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden" style={{ background: "var(--card)" }}>
          <ul className="flex flex-col gap-1 px-4 py-3">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--foreground)]"
                  style={{ border: "1px solid var(--border)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
