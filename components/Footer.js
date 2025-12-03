import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-[color:var(--card)]" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">
        <p className="text-sm text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} Midonet • Portfolio system draft.
        </p>
        <div className="flex gap-3 text-sm font-semibold text-[color:var(--primary)]">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/admin" className="hover:underline">
            Admin
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
        </div>
      </div>
    </footer>
  );
}
