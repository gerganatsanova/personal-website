"use client";

import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getThemeServerSnapshot,
  );

  function toggle() {
    const current = getThemeSnapshot();
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Смени тема"
      className="flex h-7 w-7 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
    >
      {theme === "dark" ? (
        <SunIcon className="h-3.5 w-3.5" />
      ) : (
        <MoonIcon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

function subscribeToTheme(onStoreChange: () => void) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const desktopViewport = window.matchMedia("(min-width: 1024px)");

  function getDefaultTheme(): "light" | "dark" {
    return (desktopViewport.matches || systemTheme.matches) ? "dark" : "light";
  }

  function handleStorage(event: StorageEvent) {
    if (event.key !== "theme") return;

    const stored = event.newValue;
    const next = stored === "light" || stored === "dark"
      ? stored
      : getDefaultTheme();
    applyTheme(next);
    onStoreChange();
  }

  function handleDefaultThemeChange() {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return;
    } catch {}

    applyTheme(getDefaultTheme());
    onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener("theme-change", onStoreChange);
  systemTheme.addEventListener("change", handleDefaultThemeChange);
  desktopViewport.addEventListener("change", handleDefaultThemeChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("theme-change", onStoreChange);
    systemTheme.removeEventListener("change", handleDefaultThemeChange);
    desktopViewport.removeEventListener("change", handleDefaultThemeChange);
  };
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getThemeServerSnapshot(): "light" | "dark" | null {
  return null;
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
