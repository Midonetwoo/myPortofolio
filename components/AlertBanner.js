export default function AlertBanner({ alert, onClose }) {
  if (!alert) return null;

  const palette = {
    success: "bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]",
    info: "bg-[color:var(--primary)] text-[color:var(--primary-foreground)]",
    error: "bg-[color:var(--destructive)] text-[color:var(--destructive-foreground)]",
    warning: "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
  };

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-2 sm:right-6 sm:top-6">
      <div
        className={`toast-card flex items-start gap-3 rounded-xl px-4 py-3 text-sm shadow-xl ${palette[alert.type] || palette.info}`}
      >
        <div className="flex-1">
          <p className="font-semibold">Notification</p>
          <p className="text-xs leading-relaxed opacity-90">{alert.message}</p>
        </div>
        <button onClick={onClose} className="text-xs font-semibold underline">
          Close
        </button>
      </div>
    </div>
  );
}
