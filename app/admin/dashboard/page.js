'use client';

import { useRouter } from "next/navigation";
import SectionHeader from "../../../components/SectionHeader";
import AdminTable from "../../../components/AdminTable";
import { portfolioItems } from "../../../data/portfolio";

export const metadata = {
  title: "Admin Dashboard | Midonet Portfolio",
  description: "Manage portfolio entries from a simple dashboard."
};

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "admin-auth=; Max-Age=0; path=/";
    router.push("/admin");
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Dashboard"
        title="Portfolio admin"
        description="Only authenticated admins can view this page. Use the login at /admin to get access."
        action={
          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-slate-100"
          >
            Logout
          </button>
        }
      />
      <AdminTable initialData={portfolioItems} />
    </div>
  );
}
