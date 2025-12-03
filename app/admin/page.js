import AdminLoginForm from "./AdminLoginForm";

export const metadata = {
  title: "Admin Login | Midonet Portfolio",
  description: "Authenticate to access the portfolio dashboard."
};

export default function AdminLoginPage() {
  return (
    <div className="rounded-2xl border shadow-sm" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
      <AdminLoginForm />
    </div>
  );
}
