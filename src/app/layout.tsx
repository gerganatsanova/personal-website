import type { Metadata } from "next";
import { Fraunces, Lora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { LanguageProvider } from "@/lib/i18n";

// Latin serif — original display face for English.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

// Cyrillic fallback — used automatically for glyphs Fraunces doesn't have.
const lora = Lora({
  variable: "--font-lora",
  subsets: ["cyrillic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gergana Tsanova — Coach, Facilitator, Consultant",
  description:
    "1:1 коучинг, фасилитация и обучения за хора, които искат да растат осъзнато — в кариерата и в живота си.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      suppressHydrationWarning
      className={`${fraunces.variable} ${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
