export default function Badge({ children, tone = "accent" }) {
  const palette = {
    accent: "bg-accent/10 text-accent border-accent/30",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    ember: "bg-ember/10 text-ember border-ember/30"
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${palette[tone]}`}>
      {children}
    </span>
  );
}
