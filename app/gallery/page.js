import SectionHeader from "../../components/SectionHeader";
import MasonryGallery from "./MasonryGallery";
import { readStore } from "../../lib/portfolioStore";

export const metadata = {
  title: "Gallery | Midonet Portfolio",
  description: "Photo stills and visuals from recent portfolio entries."
};

export default async function GalleryPage() {
  const portfolioItems = await readStore();
  const heights = [340, 280, 420, 360, 300, 380, 440, 320];
  const items = portfolioItems.flatMap((item, index) =>
    item.images.map((image, idx) => ({
      id: `${item.id}-${idx}`,
      img: `${image}${image.startsWith("data:") ? "" : "?auto=format&fit=crop&w=1200&q=80"}`,
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
