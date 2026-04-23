import Link from "next/link";
import { contact } from "@/lib/translations";

const navLinks = [
  { href: "/", label: "Начало" },
  { href: "/about", label: "За мен" },
  { href: "/work-with-me", label: "Работи с мен" },
  { href: "/articles", label: "Статии" },
  { href: "/guides", label: "Наръчници" },
  { href: "/contact", label: "Контакт" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:px-10 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-[1.75rem]">
              Гергана <span className="italic text-accent">Цанова</span>
            </p>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.8] text-muted">
              Коуч и консултант за растеж — в работата и в живота.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
              Навигация
            </p>
            <ul className="space-y-3 text-[14px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
              Свържи се
            </p>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn
                  <span
                    aria-hidden
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-[12px] text-subtle md:flex-row md:items-center">
          <p>
            © {year} Гергана Цанова. Всички права запазени.
          </p>
          <p className="italic">Направено с внимание.</p>
        </div>
      </div>
    </footer>
  );
}
