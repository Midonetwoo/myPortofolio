'use client';

import { useMemo, useState } from "react";
import FlowingMenu from "./FlowingMenu";
import PortfolioGrid from "./PortfolioGrid";

const categories = [
  { key: "cinematography", label: "Cinematography" },
  { key: "Graphic Design", label: "Graphic Design" },
  { key: "Website", label: "Website" }
];

export default function HomeCategorySection({ items }) {
  const [active, setActive] = useState(categories[0].key);

  const menuItems = categories.map((cat, idx) => {
    const firstImage = items.find((it) => it.type === cat.key)?.images?.[0];
    return {
      link: `#${cat.key}`,
      text: cat.label,
      image: firstImage
        ? `${firstImage}${firstImage.startsWith("data:") ? "" : "?auto=format&fit=crop&w=800&q=80"}`
        : `https://picsum.photos/600/400?random=${idx + 1}`,
      onClick: () => setActive(cat.key)
    };
  });

  const filtered = useMemo(
    () => items.filter((item) => item.type === active),
    [items, active]
  );

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <div className="h-[320px] sm:h-[360px]">
          <FlowingMenu
            items={menuItems.map((m) => ({
              ...m,
              link: "#",
              onClick: () => setActive(m.text === "Graphic Design" ? "Graphic Design" : m.text === "Cinematography" ? "cinematography" : "Website")
            }))}
          />
        </div>
      </div>
      <div className="lg:col-span-2 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
            {active} <span className="text-sm text-[color:var(--muted-foreground)]">({filtered.length})</span>
          </h3>
        </div>
        <PortfolioGrid items={filtered} />
      </div>
    </section>
  );
}
