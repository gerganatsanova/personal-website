// ============================================================================
// MATERIALS — downloadable PDFs / free resources.
//
// HOW TO ADD A NEW MATERIAL:
//   1. Drop the BG and EN PDFs into `public/materials/`. Use ASCII names with
//      an `NN_` numeric prefix for ordering, e.g.
//        public/materials/02_my-guide-bg.pdf
//        public/materials/02_my-guide-en.pdf
//   2. Copy one of the entries below and paste it at the TOP of the array.
//   3. Fill in fields in both BG and EN. `file.bg` / `file.en` must point to
//      the public paths (leading slash, no `/public` prefix).
//   4. Save. /resources and /resources/materials pick it up automatically.
// ============================================================================

import type { Lang } from "@/lib/i18n";

export type Material = {
  slug: string;
  /** Short label above the title, e.g. "Мини-наръчник" / "Mini-guide". */
  type: { bg: string; en: string };
  title: { bg: string; en: string };
  description: { bg: string; en: string };
  /** Public paths to the PDFs (e.g. /materials/01_xxx-bg.pdf). */
  file: { bg: string; en: string };
};

// Display order — first entry shows first.
export const materials: Material[] = [
  {
    slug: "before-i-leave-on-the-inside",
    type: { bg: "МИНИ-НАРЪЧНИК", en: "MINI GUIDE" },
    title: {
      bg: "Преди да напусна вътрешно",
      en: "Before I Leave on the Inside",
    },
    description: {
      bg: "Кратък гайд за моментите, в които мотивацията започва да се отдръпва тихо, а ние търсим яснота и смисъл.",
      en: "A short reflection guide for the moments when motivation quietly fades and we start looking for clarity and meaning.",
    },
    file: {
      bg: "/materials/03_before-i-leave-on-the-inside-bg.pdf",
      en: "/materials/03_before-i-leave-on-the-inside-en.pdf",
    },
  },
  {
    slug: "first-aid-for-new-managers",
    type: { bg: "Мини-наръчник", en: "Mini-guide" },
    title: {
      bg: "Първа помощ за мениджъри",
      en: "First Aid for New Managers",
    },
    description: {
      bg: "За моментите, в които новата мениджърска роля носи повече напрежение, съмнение и самокритика, отколкото показваме отвън.",
      en: "For the moments when a new management role brings more pressure, doubt, and self-criticism than we show on the outside.",
    },
    file: {
      bg: "/materials/01_first-aid-for-new-managers-bg.pdf",
      en: "/materials/01_first-aid-for-new-managers-en.pdf",
    },
  },
  {
    slug: "giving-feedback-for-development",
    type: { bg: "Мини-наръчник", en: "Mini-guide" },
    title: {
      bg: "Даване на обратна връзка",
      en: "Giving feedback",
    },
    description: {
      bg: "Кратък практичен материал с 5 стъпки, които помагат на мениджърите да дават обратна връзка по-ясно, спокойно и с фокус върху развитие.",
      en: "A short practical guide with 5 steps to help managers give feedback more clearly, calmly, and with a focus on development.",
    },
    file: {
      bg: "/materials/02_giving-feedback-bg.pdf",
      en: "/materials/02_giving-feedback-en.pdf",
    },
  },
];

/** Case/diacritic-insensitive search across type + title + description. */
export function searchMaterials(query: string, lang: Lang): Material[] {
  const q = normalize(query);
  if (!q) return [];
  return materials.filter((m) => {
    const haystack = normalize(
      `${m.type[lang]} ${m.title[lang]} ${m.description[lang]}`,
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
