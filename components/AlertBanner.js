export default function AlertBanner({ alert, onClose }) {
  if (!alert) return null;

  const palette = {
    success: "bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]",
    info: "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]",
    error: "bg-[color:var(--destructive)] text-[color:var(--destructive-foreground)]",
    warning: "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
  };

  return (
    <div
      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm shadow-md ${palette[alert.type] || palette.info}`}
    >
      <span>{alert.message}</span>
      <button onClick={onClose} className="text-xs font-semibold underline">
        Close
      </button>
    </div>
  );
}
