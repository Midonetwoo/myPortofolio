'use client';

import { useMemo, useState } from "react";
import AlertBanner from "./AlertBanner";
import Badge from "./Badge";

const defaultNewItem = {
  title: "",
  type: "Website",
  image: "",
  link: "",
  description: "",
  images: []
};

export default function AdminTable({ initialData }) {
  const [items, setItems] = useState(initialData);
  const [draft, setDraft] = useState(defaultNewItem);
  const [imageUrl, setImageUrl] = useState("");
  const [alert, setAlert] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState(null);
  const [editImageUrl, setEditImageUrl] = useState("");

  const totalByType = useMemo(
    () => items.reduce((acc, item) => ({ ...acc, [item.type]: (acc[item.type] || 0) + 1 }), {}),
    [items]
  );

  const showAlert = (message, type = "info") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2500);
  };

  const addItem = () => {
    if (!draft.title || !draft.type) {
      showAlert("Title and type are required", "error");
      return;
    }
    const id = `${draft.title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
    const nextItem = {
      id,
      title: draft.title,
      type: draft.type,
      images: draft.images.length
        ? draft.images
        : [draft.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"],
      links: { website: draft.link, github: "", video: "" },
      description: draft.description || "Quick draft description for a new case study."
    };
    setItems([nextItem, ...items]);
    setDraft(defaultNewItem);
    setImageUrl("");
    showAlert("Portfolio added", "success");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    showAlert("Portfolio removed", "warning");
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditDraft({
      ...item,
      link: item.links.website || item.links.video || "",
      images: item.images || []
    });
    setEditImageUrl("");
  };

  const saveEdit = () => {
    if (!editingId || !editDraft) {
      showAlert("Nothing to update", "warning");
      return;
    }
    const updated = {
      ...editDraft,
      links: { website: editDraft.link, video: "", github: "" }
    };
    setItems(items.map((it) => (it.id === editingId ? updated : it)));
    setEditingId(null);
    setEditDraft(null);
    showAlert("Portfolio updated", "success");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDraft(null);
    setEditImageUrl("");
  };

  const addImageFromUrl = () => {
    if (!imageUrl.trim()) return;
    setDraft({ ...draft, images: [...draft.images, imageUrl.trim()] });
    setImageUrl("");
  };

  const addEditImageFromUrl = () => {
    if (!editImageUrl.trim()) return;
    setEditDraft({ ...editDraft, images: [...(editDraft?.images || []), editImageUrl.trim()] });
    setEditImageUrl("");
  };

  const handleFiles = async (files, mode = "draft") => {
    const toBase64 = (file) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    const images = await Promise.all(Array.from(files).map(toBase64));
    if (mode === "draft") {
      setDraft((prev) => ({ ...prev, images: [...prev.images, ...images] }));
    } else {
      setEditDraft((prev) => ({ ...prev, images: [...(prev?.images || []), ...images] }));
    }
  };

  const handleDrop = (e, mode = "draft") => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files?.length) {
      handleFiles(files, mode);
      showAlert(mode === "draft" ? "Images added to new item" : "Images added to edit", "info");
    }
  };

  const removeDraftImage = (idx, mode = "draft") => {
    if (mode === "draft") {
      setDraft({ ...draft, images: draft.images.filter((_, i) => i !== idx) });
    } else if (editDraft) {
      setEditDraft({ ...editDraft, images: editDraft.images.filter((_, i) => i !== idx) });
    }
  };

  return (
    <div className="space-y-6">
      <AlertBanner alert={alert} onClose={() => setAlert(null)} />

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

        <div className="mt-3 grid gap-3 lg:grid-cols-3">
          <div
            className="rounded-xl border border-dashed p-4 text-sm"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, "draft")}
            style={{ borderColor: "var(--border)" }}
          >
            Drag & drop images here
          </div>
          <div className="flex items-center gap-2">
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
            />
            <button
              type="button"
              onClick={addImageFromUrl}
              className="rounded-full px-4 py-2 text-sm font-semibold transition"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              Add image
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {draft.images.map((src, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 rounded-lg border px-2 py-1 text-xs"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="max-w-[120px] truncate">{src.startsWith("data:") ? "upload" : src}</span>
                <button onClick={() => removeDraftImage(idx)} className="text-ember">
                  ✕
                </button>
              </div>
            ))}
          </div>
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
            {editingId === item.id ? (
              <>
                <input
                  value={editDraft?.title || ""}
                  onChange={(e) => setEditDraft({ ...editDraft, title: e.target.value })}
                  className="rounded-lg border px-2 py-1 text-sm"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                />
                <select
                  value={editDraft?.type || "Website"}
                  onChange={(e) => setEditDraft({ ...editDraft, type: e.target.value })}
                  className="rounded-lg border px-2 py-1 text-sm"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                >
                  <option>cinematography</option>
                  <option>Graphic Design</option>
                  <option>Website</option>
                </select>
                <input
                  value={editDraft?.link || ""}
                  onChange={(e) => setEditDraft({ ...editDraft, link: e.target.value })}
                  className="rounded-lg border px-2 py-1 text-sm"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                />
                <textarea
                  value={editDraft?.description || ""}
                  onChange={(e) => setEditDraft({ ...editDraft, description: e.target.value })}
                  className="rounded-lg border px-2 py-1 text-sm"
                  rows={2}
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={saveEdit}
                    className="rounded-full px-3 py-1 text-xs font-semibold transition"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="rounded-full border px-3 py-1 text-xs font-semibold transition"
                    style={{ borderColor: "var(--border)", color: "var(--muted-foreground)", background: "var(--card)" }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
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
                  <button
                    onClick={() => startEdit(item)}
                    className="rounded-full border px-3 py-1 text-xs font-semibold transition"
                    style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                  >
                    Edit
                  </button>
                  <a
                    href={`/portfolio/${item.id}`}
                    className="rounded-full px-3 py-1 text-xs font-semibold transition hover:-translate-y-0.5"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                  >
                    View
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
        {editingId && editDraft && (
          <div
            className="border-t px-4 py-3 text-sm"
            style={{ borderColor: "var(--border)", background: "var(--card)" }}
          >
            <p className="text-xs font-semibold text-[color:var(--muted-foreground)]">Editing images</p>
            <div className="mt-2 grid gap-2 lg:grid-cols-3">
              <div
                className="rounded-xl border border-dashed p-4 text-sm"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, "edit")}
                style={{ borderColor: "var(--border)" }}
              >
                Drag & drop images here
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={editImageUrl}
                  onChange={(e) => setEditImageUrl(e.target.value)}
                  placeholder="Image URL"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
                />
                <button
                  type="button"
                  onClick={addEditImageFromUrl}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Add image
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {editDraft.images?.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 rounded-lg border px-2 py-1 text-xs"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="max-w-[120px] truncate">{src.startsWith("data:") ? "upload" : src}</span>
                    <button onClick={() => removeDraftImage(idx, "edit")} className="text-ember">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
