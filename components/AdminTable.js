'use client';

import { useMemo, useState } from "react";
import Badge from "./Badge";

const defaultNewItem = {
  title: "",
  type: "Website",
  image: "",
  link: "",
  description: ""
};

export default function AdminTable({ initialData }) {
  const [items, setItems] = useState(initialData);
  const [draft, setDraft] = useState(defaultNewItem);
  const totalByType = useMemo(() => {
    return items.reduce(
      (acc, item) => ({ ...acc, [item.type]: (acc[item.type] || 0) + 1 }),
      {}
    );
  }, [items]);

  const addItem = () => {
    if (!draft.title || !draft.type) return;
    const id = draft.title.toLowerCase().replace(/\s+/g, "-");
    const nextItem = {
      id,
      title: draft.title,
      type: draft.type,
      images: [draft.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
      links: { website: draft.link, github: "", video: "" },
      description: draft.description || "Quick draft description for a new case study."
    };
    setItems([nextItem, ...items]);
    setDraft(defaultNewItem);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div
        className="grid gap-4 rounded-2xl border p-5 shadow-sm sm:grid-cols-4"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <div>
          <p className="text-sm font-semibold text-[color:var(--foreground)]">Total projects</p>
          <p className="text-2xl font-display font-semibold">{items.length}</p>
        </div>
        {Object.entries(totalByType).map(([type, count]) => (
          <div
            key={type}
            className="flex items-center gap-2 rounded-xl px-3 py-3"
            style={{ background: "var(--muted)" }}
          >
            <Badge tone="neutral">{type}</Badge>
            <p className="text-xl font-semibold text-[color:var(--foreground)]">{count}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-5 shadow-sm"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <p className="text-sm font-semibold text-[color:var(--foreground)]">Add a new portfolio item</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Title"
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          />
          <select
            value={draft.type}
            onChange={(e) => setDraft({ ...draft, type: e.target.value })}
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          >
            <option>cinematography</option>
            <option>Graphic Design</option>
            <option>Website</option>
          </select>
          <input
            value={draft.image}
            onChange={(e) => setDraft({ ...draft, image: e.target.value })}
            placeholder="Hero image URL"
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          />
          <input
            value={draft.link}
            onChange={(e) => setDraft({ ...draft, link: e.target.value })}
            placeholder="Website or video link"
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          />
          <textarea
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            placeholder="Short description"
            className="rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent sm:col-span-2 lg:col-span-3"
            rows={2}
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={addItem}
            className="rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            Add portfolio
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden rounded-2xl border shadow-sm"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <div
          className="grid grid-cols-6 items-center gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wide"
          style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}
        >
          <span>ID</span>
          <span>Title</span>
          <span>Type</span>
          <span>Link</span>
          <span>Description</span>
          <span>Actions</span>
        </div>
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center gap-3 border-t px-4 py-3 text-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="truncate text-[color:var(--muted-foreground)]">{item.id}</span>
            <span className="font-semibold text-[color:var(--foreground)]">{item.title}</span>
            <Badge tone="neutral">{item.type}</Badge>
            <a href={item.links.website || item.links.video || "#"} className="truncate text-accent hover:underline">
              {item.links.website || item.links.video || "—"}
            </a>
            <span className="line-clamp-2 text-[color:var(--muted-foreground)]">{item.description}</span>
            <div className="flex gap-2">
              <button
                onClick={() => removeItem(item.id)}
                className="rounded-full border px-3 py-1 text-xs font-semibold transition"
                style={{ borderColor: "var(--border)", color: "var(--muted-foreground)", background: "var(--card)" }}
              >
                Remove
              </button>
              <a
                href={`/portfolio/${item.id}`}
                className="rounded-full px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
