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
    <header className="sticky top-0 z-30 bg-mist/90 backdrop-blur dark:bg-[color:oklch(0.12_0_0)]/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 md:px-10">
        <Link href="/" className="flex items-center gap-2 text-lg font-display font-semibold text-ink dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-ink text-white dark:bg-primary">
            MP
          </span>
          Midonet Portfolio
        </Link>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:bg-slate-200 dark:text-white dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
