"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-[11px] font-medium tracking-[0.12em] uppercase text-muted">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-1.5 py-1 transition-colors ${
          lang === "en" ? "text-foreground" : "hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-subtle" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("bg")}
        className={`px-1.5 py-1 transition-colors ${
          lang === "bg" ? "text-foreground" : "hover:text-foreground"
        }`}
        aria-pressed={lang === "bg"}
      >
        BG
      </button>
    </div>
  );
}
