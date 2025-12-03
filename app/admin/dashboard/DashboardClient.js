'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import AdminTable from "../../../components/AdminTable";
import AlertBanner from "../../../components/AlertBanner";

export default function DashboardClient({ initialData }) {
  const router = useRouter();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return undefined;
    const timer = setTimeout(() => setAlert(null), 2500);
    return () => clearTimeout(timer);
  }, [alert]);

  const handleLogout = () => {
    document.cookie = "admin-auth=; Max-Age=0; path=/";
    setAlert({ type: "info", message: "Logged out. Redirecting to login..." });
    setTimeout(() => router.push("/admin"), 800);
  };

  return (
    <div className="space-y-8">
      <AlertBanner alert={alert} onClose={() => setAlert(null)} />
      <SectionHeader
        eyebrow="Dashboard"
        title="Portfolio admin"
        description="Only authenticated admins can view this page. Use the login at /admin to get access."
        action={
          <button
            onClick={handleLogout}
            className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--card)" }}
          >
            Logout
          </button>
        }
      />
      <AdminTable initialData={initialData || []} />
    </div>
  );
}
