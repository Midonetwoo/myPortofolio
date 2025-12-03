import Image from "next/image";
import Badge from "./Badge";

export default function GalleryGrid({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((entry, index) => (
        <div
          key={`${entry.id}-${index}`}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
            <Image
              src={`${entry.image}?auto=format&fit=crop&w=900&q=80`}
              alt={entry.title}
              fill
              sizes="(min-width: 1024px) 30vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-ink">{entry.title}</p>
              <p className="text-xs text-slate-500">{entry.subtitle}</p>
            </div>
            <Badge tone="neutral">{entry.type}</Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
