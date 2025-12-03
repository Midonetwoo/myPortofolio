import SectionHeader from "../../components/SectionHeader";
import { portfolioItems } from "../../data/portfolio";
import MasonryGallery from "./MasonryGallery";

export const metadata = {
  title: "Gallery | Midonet Portfolio",
  description: "Photo stills and visuals from recent portfolio entries."
};

export default function GalleryPage() {
  const heights = [340, 280, 420, 360, 300, 380, 440, 320];
  const items = portfolioItems.flatMap((item, index) =>
    item.images.map((image, idx) => ({
      id: `${item.id}-${idx}`,
      img: `${image}?auto=format&fit=crop&w=1200&q=80`,
      url: `/portfolio/${item.id}`,
      height: heights[(index + idx) % heights.length]
    }))
  );

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Gallery"
        title="Frames, stills, and visual pulls"
        description="A curated stream of visuals captured from cinematography cuts, poster studies, and website hero images."
      />
      <MasonryGallery items={items} />
    </div>
  );
}
