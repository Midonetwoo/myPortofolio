'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/admin", label: "Admin" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
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
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-5 px-10 py-2 sm:px-8 md:px-10">
        <PillNav
          items={links}
          activeHref={pathname}
          baseColor="var(--foreground)"
          pillColor="var(--card)"
          hoveredPillTextColor="var(--primary-foreground)"
          pillTextColor="var(--foreground)"
          className="w-full"
          initialLoadAnimation={true}
        />
        <button
          type="button"
          onClick={toggleTheme}
          className="hidden rounded-full border px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
          style={{ borderColor: "var(--border)" }}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
