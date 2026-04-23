// ============================================================================
// ARTICLES — single source of truth for every article on the site.
//
// HOW TO ADD A NEW ARTICLE:
//   1. Copy one of the entries below and paste it at the TOP of the array.
//   2. Fill in the fields: slug (url-friendly, no spaces), date (YYYY-MM-DD),
//      displayDate (what appears visually), cover (image URL), title, excerpt,
//      body — each in both BG and EN.
//   3. Save. The article appears automatically on /articles sorted by date
//      (newest first), and is picked up by the homepage preview and search.
//
// BODY FORMAT: paragraphs are separated by a blank line (two line breaks).
// ============================================================================

import type { Lang } from "@/lib/i18n";

export type Article = {
  slug: string;
  /** ISO date (YYYY-MM-DD) — used for sorting. */
  date: string;
  /** Human-readable date shown in the UI. */
  displayDate: { bg: string; en: string };
  /** Cover image URL (absolute or /public path). */
  cover: string;
  title: { bg: string; en: string };
  excerpt: { bg: string; en: string };
  body: { bg: string; en: string };
};

export const ARTICLES_PER_PAGE = 10;

// Newest first. When adding a new article, paste it at the top.
export const articles: Article[] = [
  {
    slug: "uverenost-i-deystvieto",
    date: "2026-03-15",
    displayDate: { bg: "Март 2026", en: "March 2026" },
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80",
    title: {
      bg: "Защо увереността не идва преди действието",
      en: "Why confidence doesn't come before action",
    },
    excerpt: {
      bg: "Чакаме да се почувстваме готови, преди да направим крачка. Истината е, че увереността не е предпоставка — тя е резултат. Кратко есе за това как се формира вътрешната сигурност и защо повечето хора я търсят на грешното място.",
      en: "We wait to feel ready before taking a step. The truth is, confidence isn't a prerequisite — it's a result. A short essay on how inner certainty forms and why most people look for it in the wrong place.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "leadership-vs-management",
    date: "2026-02-15",
    displayDate: { bg: "Февруари 2026", en: "February 2026" },
    cover:
      "https://images.unsplash.com/photo-1554774853-719586ee6f64?w=1400&q=80",
    title: {
      bg: "Разликата между да ръководиш и да управляваш",
      en: "The difference between leading and managing",
    },
    excerpt: {
      bg: "Двете не са синоними, но рядко говорим за това. Ръководенето е за хора и посока. Управлението е за процеси и резултати. Кратко за разликите, които променят всичко.",
      en: "The two aren't synonyms, though we rarely talk about it. Leading is about people and direction. Managing is about processes and outcomes. A short take on the differences that change everything.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "petteto-vaprosa",
    date: "2026-01-15",
    displayDate: { bg: "Януари 2026", en: "January 2026" },
    cover:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1400&q=80",
    title: {
      bg: "Петте въпроса, които задавам на всеки нов клиент",
      en: "The five questions I ask every new client",
    },
    excerpt: {
      bg: "Преди да започнем работа, питам едни и същи пет неща. Не са случайни и не са любопитство — те задават рамката на всичко, което следва.",
      en: "Before we start working, I ask the same five things. They're not random and they're not curiosity — they set the frame for everything that follows.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "chesten-sas-sebe-si",
    date: "2025-12-15",
    displayDate: { bg: "Декември 2025", en: "December 2025" },
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80",
    title: {
      bg: "Какво означава „да си честен със себе си\" на практика",
      en: "What \"being honest with yourself\" means in practice",
    },
    excerpt: {
      bg: "Всички говорим за това, малко от нас го правим. Какво всъщност значи да бъдеш честен със себе си — и какво не значи.",
      en: "We all talk about it; few of us actually do it. What it really means to be honest with yourself — and what it doesn't.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "granitsi-v-rabotata",
    date: "2025-11-15",
    displayDate: { bg: "Ноември 2025", en: "November 2025" },
    cover:
      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=1400&q=80",
    title: {
      bg: "Как се поставят граници в работата без да звучиш студено",
      en: "How to set boundaries at work without sounding cold",
    },
    excerpt: {
      bg: "Границите не са стени. Те са начин да останеш себе си, когато всички около теб искат нещо от теб.",
      en: "Boundaries aren't walls. They're how you stay yourself when everyone around you wants something from you.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "koucing-i-konsultirane",
    date: "2025-10-15",
    displayDate: { bg: "Октомври 2025", en: "October 2025" },
    cover:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80",
    title: {
      bg: "Коучинг или консултиране — какво ти трябва в момента",
      en: "Coaching or consulting — which one do you need right now",
    },
    excerpt: {
      bg: "Понякога ти трябват въпроси. Друг път — отговори. Как да разбереш кое от двете е за теб сега.",
      en: "Sometimes you need questions. Other times — answers. How to tell which of the two is for you right now.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "tiho-napuskane",
    date: "2025-09-15",
    displayDate: { bg: "Септември 2025", en: "September 2025" },
    cover:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80",
    title: {
      bg: "„Тихото напускане\" не е мързел — то е сигнал",
      en: "\"Quiet quitting\" isn't laziness — it's a signal",
    },
    excerpt: {
      bg: "Когато хората спрат да се стараят, това рядко е лична история. Почти винаги е системна. Защо го виждам все по-често в организациите, с които работя.",
      en: "When people stop trying, it's rarely a personal story. It's almost always systemic. Why I see it more and more in the organizations I work with.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "obratna-vrazka",
    date: "2025-08-15",
    displayDate: { bg: "Август 2025", en: "August 2025" },
    cover:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&q=80",
    title: {
      bg: "Обратната връзка, която наистина променя нещо",
      en: "The kind of feedback that actually changes something",
    },
    excerpt: {
      bg: "Повечето обратни връзки са за този, който ги дава — не за този, който ги получава. Как да обърнем посоката.",
      en: "Most feedback is for the person giving it — not the person receiving it. How to flip the direction.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "pravilni-tseli",
    date: "2025-07-15",
    displayDate: { bg: "Юли 2025", en: "July 2025" },
    cover:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80",
    title: {
      bg: "Защо повечето цели не се случват",
      en: "Why most goals don't happen",
    },
    excerpt: {
      bg: "Не защото хората са мързеливи. А защото целта е поставена на грешното ниво — твърде далеч или твърде неясна.",
      en: "Not because people are lazy. But because the goal is set at the wrong level — too far, or too vague.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "emotsionalna-inteligentnost",
    date: "2025-06-15",
    displayDate: { bg: "Юни 2025", en: "June 2025" },
    cover:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1400&q=80",
    title: {
      bg: "Емоционалната интелигентност не е мекота",
      en: "Emotional intelligence isn't softness",
    },
    excerpt: {
      bg: "Често я бъркат с това да си приятен. Всъщност е умение да виждаш това, което другите пропускат — включително в себе си.",
      en: "People often confuse it with being pleasant. It's actually the skill of seeing what others miss — including in yourself.",
    },
    body: { bg: "", en: "" },
  },
  {
    slug: "vreme-za-razmisal",
    date: "2025-05-15",
    displayDate: { bg: "Май 2025", en: "May 2025" },
    cover:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80",
    title: {
      bg: "Защо ни е страх да останем сами с мислите си",
      en: "Why we're afraid to be alone with our thoughts",
    },
    excerpt: {
      bg: "Заети сме, защото е по-лесно от това да мислим. Кратко за тишината, която повечето от нас избягват.",
      en: "We stay busy because it's easier than thinking. A short note on the silence most of us avoid.",
    },
    body: { bg: "", en: "" },
  },
];

// ---------------- helpers ----------------

/** Articles sorted newest first (already the source order, but enforced here). */
export const sortedArticles = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function totalPages(perPage = ARTICLES_PER_PAGE): number {
  return Math.max(1, Math.ceil(sortedArticles.length / perPage));
}

export function getPageSlice(
  page: number,
  perPage = ARTICLES_PER_PAGE,
): Article[] {
  const start = (page - 1) * perPage;
  return sortedArticles.slice(start, start + perPage);
}

/** Case/diacritic-insensitive search across title + excerpt + body. */
export function searchArticles(query: string, lang: Lang): Article[] {
  const q = normalize(query);
  if (!q) return [];
  return sortedArticles.filter((a) => {
    const haystack = normalize(
      `${a.title[lang]} ${a.excerpt[lang]} ${a.body[lang]}`,
    );
    return haystack.includes(q);
  });
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}
