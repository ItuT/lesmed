"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-trimmed.jpg"
            alt="Lesmed Community Health Centre logo"
            width={640}
            height={560}
            priority
            className="h-11 w-auto"
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "bg-brand-100 text-brand-800"
                  : "text-brand-700 hover:bg-brand-50 hover:text-brand-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            Book Appointment
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded-md p-2 text-brand-800 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-100 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base font-medium ${
                pathname === l.href ? "bg-brand-100 text-brand-800" : "text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-brand-700 px-5 py-3 text-center text-base font-semibold text-white"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
