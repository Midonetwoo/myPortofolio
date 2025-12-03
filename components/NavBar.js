'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/admin", label: "Admin" }
];

export default function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header className="sticky top-0 z-30 bg-[color:var(--background)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-display font-semibold text-[color:var(--foreground)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-[color:var(--primary-foreground)]">
            MP
          </span>
          Midonet Portfolio
        </Link>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] transition hover:bg-[color:var(--muted)]"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            style={{ borderColor: "var(--border)" }}
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
