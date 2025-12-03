import DashboardClient from "./DashboardClient";
import { readStore } from "../../../lib/portfolioStore";

export const metadata = {
  title: "Admin Dashboard | Midonet Portfolio",
  description: "Manage portfolio entries from a simple dashboard."
};

export default async function AdminDashboardPage() {
  const items = await readStore();
  return <DashboardClient initialData={items} />;
}
