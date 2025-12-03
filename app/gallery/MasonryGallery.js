'use client';

import Masonry from "../../components/Masonry";

export default function MasonryGallery({ items }) {
  return (
    <div
      className="relative min-h-[600px] rounded-3xl border p-4 shadow-sm sm:p-6"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.97}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
}
