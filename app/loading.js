"use client";

import ShinyText from "../components/ShinyText";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <ShinyText text="Loading your portfolio..." speed={3} className="text-2xl font-semibold" />
    </div>
  );
}
