import Link from "next/link";
import { data } from "@/lib/data";

export default function Header() {
  return (
    <header className="classic-header" role="banner">
      <div className="classic-container flex min-h-16 items-center justify-between gap-6">
        <Link
          className="text-lg font-bold tracking-tight text-ink"
          href="/"
          aria-label={`${data.profile.name} home`}
        >
          {data.profile.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-5 text-sm font-semibold text-forest md:gap-8"
        >
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
