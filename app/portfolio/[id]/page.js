import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "../../../components/Badge";
import SectionHeader from "../../../components/SectionHeader";
import { portfolioItems } from "../../../data/portfolio";

const findItem = (id) => portfolioItems.find((entry) => entry.id === id);

export async function generateMetadata({ params }) {
  const item = findItem(params.id);
  return {
    title: item ? `${item.title} | Portfolio` : "Project not found",
    description: item?.description || "Portfolio detail"
  };
}

export default function PortfolioDetail({ params }) {
  const item = findItem(params.id);
  if (!item) return notFound();

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow={item.type}
        title={item.title}
        description={item.description}
        action={<Badge tone="neutral">ID: {item.id}</Badge>}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-4 p-4 sm:grid-cols-2">
              {item.images.map((src, idx) => {
                const isData = src.startsWith("data:");
                const finalSrc = isData ? src : `${src}?auto=format&fit=crop&w=1200&q=80`;
                return (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    {isData ? (
                      <img src={finalSrc} alt={`${item.title} visual ${idx + 1}`} className="h-full w-full object-cover" />
                    ) : (
                      <Image
                        src={finalSrc}
                        alt={`${item.title} visual ${idx + 1}`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-ink">Links</p>
            <div className="mt-3 space-y-2 text-sm text-accent">
              {item.links.website && (
                <Link href={item.links.website} className="block hover:underline">
                  Website
                </Link>
              )}
              {item.links.video && (
                <Link href={item.links.video} className="block hover:underline">
                  Video
                </Link>
              )}
              {item.links.github && (
                <Link href={item.links.github} className="block hover:underline">
                  GitHub
                </Link>
              )}
              {!item.links.website && !item.links.video && !item.links.github && <p>No external links yet.</p>}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-ink">Overview</p>
            <p className="mt-2 text-sm text-slate-600">
              Each project includes cinematography, design assets, or a digital experience. Use the admin dashboard to
              change metadata or append links as the work evolves.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
