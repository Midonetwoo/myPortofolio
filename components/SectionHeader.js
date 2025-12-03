export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
        <h2 className="text-2xl font-display font-semibold text-ink sm:text-3xl">{title}</h2>
        {description && <p className="max-w-3xl text-sm text-slate-600 sm:text-base">{description}</p>}
      </div>
      {action && <div className="mt-2 sm:mt-0">{action}</div>}
    </div>
  );
}
