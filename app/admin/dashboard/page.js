import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Admin Dashboard | Midonet Portfolio",
  description: "Manage portfolio entries from a simple dashboard."
};

export default function AdminDashboardPage() {
  return <DashboardClient />;
}
