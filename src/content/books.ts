// ============================================================================
// BOOKS — single source of truth for every book / paid resource on the site.
//
// HOW TO ADD A NEW BOOK:
//   1. Copy one of the entries below and paste it at the TOP of the array.
//   2. Fill in the fields in both BG and EN.
//   3. Replace `cover` with a real image path (e.g. /images/book-my-title.jpg)
//      or keep an Unsplash URL for placeholder.
//   4. Replace `externalUrl` with the real purchase link on the sales platform.
//   5. Save. /resources paginates one book at a time; /resources/books lists all.
// ============================================================================

export type Book = {
  slug: string;
  /** Short label above the title, e.g. "Книга" / "Наръчник". */
  type: { bg: string; en: string };
  title: { bg: string; en: string };
  description: { bg: string; en: string };
  /** Cover image URL (absolute or /public path). */
  cover: string;
  /** External purchase link — opens in a new tab. */
  externalUrl: string;
};

// Display order — first entry shows first.
export const books: Book[] = [
  {
    slug: "razbirash-angliyski-zashto-ne-go-govorish",
    type: { bg: "Наръчник", en: "Guide" },
    title: {
      bg: "Разбираш английски език? Тогава защо все още не го говориш",
      en: "You understand English. So why don't you speak it yet?",
    },
    description: {
      bg: "Практическо ръководство за хора, които разбират английски, но не могат да го използват в говорене. Ако превеждаш наум, колебаеш се или не казваш това, което искаш – тук ще намериш начин да го промениш. Кратки ежедневни упражнения и ясна система, която превръща знанието в реално говорене.",
      en: "A practical guide for people who understand English, but struggle to speak it. If you find yourself translating in your head, hesitating, or not saying what you really want – this will help you change that. Simple daily exercises, real speaking practice, and a clear system to turn passive knowledge into confident communication.",
    },
    cover: "/images/book-english-speaking.jpg",
    externalUrl: "https://gerrynova.gumroad.com/l/nxkugs",
  },
];

export const sortedBooks = books;
