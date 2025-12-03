import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-10">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Midonet • Portfolio system draft.</p>
        <div className="flex gap-3 text-sm font-semibold text-accent">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/admin/login" className="hover:underline">
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
