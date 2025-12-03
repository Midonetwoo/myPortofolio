export const metadata = {
  title: "Admin Login | Midonet Portfolio",
  description: "Authenticate to access the portfolio dashboard."
};

export default function AdminLogin() {
  return (
    <div className="mx-auto max-w-lg space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Admin</p>
        <h1 className="text-2xl font-display font-semibold text-ink">Sign in to manage portfolio</h1>
        <p className="text-sm text-slate-600">Demo form only — wire up your auth provider or middleware.</p>
      </div>
      <form className="space-y-3">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-ink">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="admin@example.com"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-ink">Password</label>
          <input
            type="password"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Login
        </button>
        <p className="text-center text-xs text-slate-500">This is a static demo. Connect real auth to protect admin.</p>
      </form>
    </div>
  );
}
