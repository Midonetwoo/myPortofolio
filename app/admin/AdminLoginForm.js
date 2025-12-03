'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AlertBanner from "../../components/AlertBanner";

const DEMO_EMAIL = "admin@example.com";
const DEMO_PASSWORD = "admin123";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!alert) return undefined;
    const timer = setTimeout(() => setAlert(null), 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      document.cookie = "admin-auth=true; path=/";
      setAlert({ type: "success", message: "Login success. Redirecting to dashboard..." });
      setTimeout(() => router.push("/admin/dashboard"), 600);
    } else {
      setAlert({ type: "error", message: "Invalid credentials. Use the demo admin below." });
    }
  };

  return (
    <div
      className="mx-auto max-w-lg space-y-6 rounded-2xl border p-8 shadow-sm"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
    >
      <AlertBanner alert={alert} onClose={() => setAlert(null)} />
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Admin</p>
        <h1 className="text-2xl font-display font-semibold text-ink">Sign in to manage portfolio</h1>
        <p className="text-sm text-slate-600">Login is required to access the dashboard at /admin/dashboard.</p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-ink">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-ink">Password</label>
          <input
            type="password"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <button
          type="submit"
          className="w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Login
        </button>
        <p className="text-xs text-slate-500">
          Demo credentials — Email: {DEMO_EMAIL}, Password: {DEMO_PASSWORD}
        </p>
      </form>
    </div>
  );
}
