import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ items }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
}
