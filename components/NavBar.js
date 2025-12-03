import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/admin", label: "Admin" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 bg-mist/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-lg font-display font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-white">MP</span>
          Midonet Portfolio
        </Link>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:bg-slate-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
