import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import SpotlightCard from "./SpotlightCard";

export default function PortfolioCard({ item }) {
  const cover = item.images?.[0];
  const imageSrc = cover ? `${cover}${cover.startsWith("data:") ? "" : "?auto=format&fit=crop&w=800&q=80"}` : null;

  return (
    <Link href={`/portfolio/${item.id}`} className="group block h-full">
      <SpotlightCard spotlightColor="var(--primary)" className="h-full border border-[var(--card-foreground)] bg-[var(--card)] shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500">No image</div>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Badge tone="accent">{item.type}</Badge>
            {/* <span className="text-xs uppercase tracking-[0.2em] text-slate-400">#{item.id}</span> */}
          </div>
          <h3 className="text-lg font-semibold text-[var(--secondary)]">{item.title}</h3>
          <p className="line-clamp-2 text-sm text-[var(--secondary)]">{item.description}</p>
          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3">
            More
            <span aria-hidden>→</span>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
