'use client';

import React from "react";
import { gsap } from "gsap";

export default function FlowingMenu({ items = [] }) {
  return (
    <div className="h-full w-full overflow-hidden">
      <nav
        className="flex h-full w-full min-h-[360px] flex-col gap-2 rounded-2xl border p-2 shadow-sm"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, onClick }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="px-2 text-lg uppercase leading-[1.2] text-[color:var(--foreground)]">{text}</span>
      <div className="mx-[2vw] my-4 h-[64px] w-[200px] rounded-[50px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="relative flex-1 overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)" }} ref={itemRef}>
      <a
        className="flex h-full items-center justify-center cursor-pointer text-center text-xl sm:text-2xl font-semibold uppercase text-[color:var(--foreground)] no-underline transition hover:text-[color:var(--background)]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        {text}
      </a>
      <div className="translate-y-[101%] absolute left-0 top-0 h-full w-full overflow-hidden bg-[color:var(--card)] pointer-events-none" ref={marqueeRef}>
        <div className="flex h-full w-[200%]" ref={marqueeInnerRef}>
          <div className="animate-marquee flex h-full w-[200%] items-center">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}
