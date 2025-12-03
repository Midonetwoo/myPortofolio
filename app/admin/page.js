import SectionHeader from "../../components/SectionHeader";
import AdminTable from "../../components/AdminTable";
import { portfolioItems } from "../../data/portfolio";

export const metadata = {
  title: "Admin Dashboard | Midonet Portfolio",
  description: "Manage portfolio entries from a simple dashboard."
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Dashboard"
        title="Portfolio admin"
        description="Review entries, add quick drafts, and link out to detail pages. Hook this up to your API or CMS to persist changes."
      />
      <AdminTable initialData={portfolioItems} />
    </div>
  );
}
