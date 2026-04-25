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
  /** ISO date (YYYY-MM-DD) — used for sorting, newest first. */
  date: string;
  /** Short label above the title, e.g. "Книга" / "Наръчник". */
  type: { bg: string; en: string };
  title: { bg: string; en: string };
  description: { bg: string; en: string };
  /** Cover image URL (absolute or /public path). */
  cover: string;
  /** External purchase link — opens in a new tab. */
  externalUrl: string;
};

// Newest first. When adding a new book, paste it at the top.
export const books: Book[] = [
  {
    slug: "sreshti-sas-sebe-si",
    date: "2024-09-01",
    type: { bg: "Книга", en: "Book" },
    title: {
      bg: "Срещи със себе си",
      en: "Meetings with yourself",
    },
    description: {
      bg: "Книга за вътрешните разговори, които отлагаме, и за стъпките, които започват, когато спрем да бягаме от тях. Кратки глави, въпроси за размисъл и честни наблюдения от работата с хора.",
      en: "A book about the inner conversations we keep postponing, and the steps that begin when we stop running from them. Short chapters, reflection questions, and honest observations from working with people.",
    },
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
    externalUrl: "https://example.com/sreshti-sas-sebe-si",
  },
  {
    slug: "kogato-dumite-vodyat",
    date: "2023-05-10",
    type: { bg: "Наръчник", en: "Guide" },
    title: {
      bg: "Когато думите водят",
      en: "When words lead",
    },
    description: {
      bg: "Практически наръчник за лидери и фасилитатори, които искат да говорят по-ясно, по-човешки и по-вдъхновяващо. За това как се строи история, която хората искат да следват.",
      en: "A practical guide for leaders and facilitators who want to speak more clearly, more humanly, and more inspiringly. About building a story people actually want to follow.",
    },
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=900&q=80",
    externalUrl: "https://example.com/kogato-dumite-vodyat",
  },
  {
    slug: "tiha-posoka",
    date: "2022-11-20",
    type: { bg: "Книга", en: "Book" },
    title: {
      bg: "Тиха посока",
      en: "Quiet direction",
    },
    description: {
      bg: "За вътрешния компас, който често знае повече от плановете ни. Книга за това как да се вслушаш в по-тихите сигнали на собствения си живот и да вземеш решения, които наистина са твои.",
      en: "About the inner compass that often knows more than our plans do. A book about how to listen to the quieter signals of your own life and make decisions that are truly your own.",
    },
    cover:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80",
    externalUrl: "https://example.com/tiha-posoka",
  },
];

export const sortedBooks = [...books].sort((a, b) =>
  b.date.localeCompare(a.date),
);
