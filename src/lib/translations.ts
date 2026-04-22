import type { Lang } from "./i18n";

export const contact = {
  email: "gergana.tsanova.bs@gmail.com",
  linkedin: "https://www.linkedin.com/in/gerganatsanova/",
};

export const t = {
  nav: {
    home: { bg: "Начало", en: "Home" },
    about: { bg: "За мен", en: "About" },
    workWithMe: { bg: "Работи с мен", en: "Work with me" },
    articles: { bg: "Статии", en: "Articles" },
    guides: { bg: "Наръчници", en: "Guides" },
    contact: { bg: "Контакт", en: "Contact" },
    openMenu: { bg: "Отвори меню", en: "Open menu" },
    closeMenu: { bg: "Затвори меню", en: "Close menu" },
    navigationLabel: { bg: "Навигация", en: "Navigation" },
    connectLabel: { bg: "Свържи се", en: "Connect" },
  },
  hero: {
    kicker: {
      bg: "Коуч · Консултант · Фасилитатор",
      en: "Coach · Consultant · Facilitator",
    },
    headlineLine1: {
      bg: "Растеж в живота.",
      en: "Growth in life.",
    },
    headlineAccent: {
      bg: "Растеж",
      en: "Growth",
    },
    headlineLine2Rest: {
      bg: " в работата.",
      en: " at work.",
    },
    paragraph: {
      bg: "Работя с хора, които искат повече яснота, увереност и посока в живота и в работата си. Не вярвам в празните фрази. Вярвам в честния разговор, смисъла и реалните следващи стъпки.",
      en: "I work with people who want more clarity, confidence, and direction in life and at work. I do not believe in empty phrases. I believe in honest conversation, meaningful work, and real next steps.",
    },
    ctaPrimary: {
      bg: "Работи с мен",
      en: "Work with me",
    },
    ctaSecondary: {
      bg: "Запознай се с мен",
      en: "Get to know me",
    },
    watermark: {
      bg: "Израстване.",
      en: "Becoming.",
    },
  },
} as const;

export function pick<T extends Record<Lang, string>>(
  entry: T,
  lang: Lang,
): string {
  return entry[lang];
}
