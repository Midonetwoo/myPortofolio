import GalleryGrid from "../../components/GalleryGrid";
import SectionHeader from "../../components/SectionHeader";
import { portfolioItems } from "../../data/portfolio";

export const metadata = {
  title: "Gallery | Midonet Portfolio",
  description: "Photo stills and visuals from recent portfolio entries."
};

export default function GalleryPage() {
  const images = portfolioItems.flatMap((item) =>
    item.images.map((image, idx) => ({
      id: `${item.id}-${idx}`,
      image,
      title: item.title,
      subtitle: item.type,
      type: item.type
    }))
  );

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Gallery"
        title="Frames, stills, and visual pulls"
        description="A curated stream of visuals captured from cinematography cuts, poster studies, and website hero images."
      />
      <GalleryGrid items={images} />
    </div>
  );
}
