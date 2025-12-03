'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const isExternalLink = (href) =>
  href?.startsWith("http://") ||
  href?.startsWith("https://") ||
  href?.startsWith("//") ||
  href?.startsWith("mailto:") ||
  href?.startsWith("tel:") ||
  href?.startsWith("#");

export default function PillNav({
  items,
  activeHref,
  className = "",
  ease = "power3.out",
  baseColor = "#0b1021",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);

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

    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation && navItemsRef.current) {
      gsap.set(navItemsRef.current, { width: 0, overflow: "hidden" });
      gsap.to(navItemsRef.current, {
        width: "auto",
        duration: 0.6,
        ease
      });
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto"
    });
  };

  const handleLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto"
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    const menu = mobileMenuRef.current;
    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease, transformOrigin: "top center" }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          }
        });
      }
    }
    onMobileMenuClick?.();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
    ["--pill-pad-x"]: "18px",
    ["--pill-gap"]: "3px"
  };

  return (
    <div className={`w-full ${className}`}>
      <nav className="flex w-full items-center justify-center" style={cssVars}>
        <div
          ref={navItemsRef}
          className="relative hidden items-center rounded-full md:flex"
          style={{ height: "var(--nav-h)", background: "var(--base, #000)" }}
        >
          <ul role="menubar" className="m-0 flex h-full list-none items-stretch p-[3px]" style={{ gap: "var(--pill-gap)" }}>
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle = {
                background: "var(--pill-bg, #fff)",
                color: "var(--pill-text, var(--base, #000))",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)"
              };

              const PillContent = (
                <>
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
                  <span
                    className="absolute left-1/2 -bottom-[6px] h-2 w-2 -translate-x-1/2 rounded-full transition-opacity duration-200"
                    style={{ background: "var(--base, #000)", opacity: isActive ? 1 : 0 }}
                  />
                </>
              );

              const basePillClasses =
                "relative inline-flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-0 text-[16px] font-semibold uppercase leading-[0] tracking-[0.2px]";

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isExternalLink(item.href) ? (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  ) : (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="relative flex cursor-pointer flex-col items-center justify-center gap-1 rounded-full border-0 p-0 md:hidden"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)"
          }}
        >
          <span
            className="hamburger-line h-0.5 w-4 origin-center rounded transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "var(--pill-bg, #fff)" }}
          />
          <span
            className="hamburger-line h-0.5 w-4 origin-center rounded transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{ background: "var(--pill-bg, #fff)" }}
          />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="absolute left-4 right-4 top-[3em] z-[998] origin-top rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:hidden"
        style={{
          background: "var(--base, #f0f0f0)",
          visibility: isMobileMenuOpen ? "visible" : "hidden",
          opacity: isMobileMenuOpen ? 1 : 0
        }}
      >
        <ul className="m-0 flex list-none flex-col gap-[3px] p-[3px]">
          {items.map((item) => {
            const defaultStyle = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, #fff)"
            };
            const hoverIn = (e) => {
              e.currentTarget.style.background = "var(--base)";
              e.currentTarget.style.color = "var(--hover-text, #fff)";
            };
            const hoverOut = (e) => {
              e.currentTarget.style.background = "var(--pill-bg, #fff)";
              e.currentTarget.style.color = "var(--pill-text, #fff)";
            };

            const linkClasses =
              "block rounded-[50px] py-3 px-4 text-[16px] font-medium transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]";

            return (
              <li key={item.href}>
                {isExternalLink(item.href) ? (
                  <a
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={linkClasses}
                    style={defaultStyle}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
