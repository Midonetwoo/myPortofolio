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
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-4">
        <div>
          <p className="text-sm font-semibold text-ink">Total projects</p>
          <p className="text-2xl font-display font-semibold">{items.length}</p>
        </div>
        {Object.entries(totalByType).map(([type, count]) => (
          <div key={type} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3">
            <Badge tone="neutral">{type}</Badge>
            <p className="text-xl font-semibold text-ink">{count}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-ink">Add a new portfolio item</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Title"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <select
            value={draft.type}
            onChange={(e) => setDraft({ ...draft, type: e.target.value })}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            <option>cinematography</option>
            <option>Graphic Design</option>
            <option>Website</option>
          </select>
          <input
            value={draft.image}
            onChange={(e) => setDraft({ ...draft, image: e.target.value })}
            placeholder="Hero image URL"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <input
            value={draft.link}
            onChange={(e) => setDraft({ ...draft, link: e.target.value })}
            placeholder="Website or video link"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <textarea
            value={draft.description}
            onChange={(e) => setDraft({ ...draft, description: e.target.value })}
            placeholder="Short description"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent sm:col-span-2 lg:col-span-3"
            rows={2}
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={addItem}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Add portfolio
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-6 items-center gap-3 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <span>ID</span>
          <span>Title</span>
          <span>Type</span>
          <span>Link</span>
          <span>Description</span>
          <span>Actions</span>
        </div>
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-6 items-center gap-3 border-t border-slate-100 px-4 py-3 text-sm">
            <span className="truncate text-slate-500">{item.id}</span>
            <span className="font-semibold text-ink">{item.title}</span>
            <Badge tone="neutral">{item.type}</Badge>
            <a href={item.links.website || item.links.video || "#"} className="truncate text-accent hover:underline">
              {item.links.website || item.links.video || "—"}
            </a>
            <span className="line-clamp-2 text-slate-600">{item.description}</span>
            <div className="flex gap-2">
              <button
                onClick={() => removeItem(item.id)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Remove
              </button>
              <a
                href={`/portfolio/${item.id}`}
                className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white transition hover:-translate-y-0.5"
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
