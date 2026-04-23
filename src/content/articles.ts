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
// BODY FORMAT:
//   - Paragraphs: separated by a blank line (two line breaks).
//   - Subheadings: start the line with "## " (two hashes + space).
//   - Quotes: start the line with "> " (one angle bracket + space).
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
  {
    slug: "hr-tendencii-2019",
    date: "2019-02-19",
    displayDate: { bg: "Февруари 2019", en: "February 2019" },
    cover:
      "https://images.unsplash.com/photo-1631203928521-bde1e727e8b7?w=1400&q=80",
    title: {
      bg: "3 HR тенденции, които ще променят организациите през 2019 г.",
      en: "3 HR trends that will reshape organizations in 2019",
    },
    excerpt: {
      bg: "Бизнесът се променя и то с много динамични темпове, а това носи със себе си нови предизвикателства пред компаниите. Запознайте се с най-актуалните HR тенденции, които да очакваме през 2019 година.",
      en: "Business is changing rapidly, and that brings new challenges for companies. Here are some of the key HR trends to watch in 2019.",
    },
    body: {
      bg: `Навярно сте чували поговорката „Нова година – нов късмет"? Е, 2019 година вече е тук и със сигурност носи със себе си нови предизвикателства. Нека видим кои са част от най-обсъжданите HR тенденции през 2019 година.

Без значение в коя индустрия се намират, компаниите, които остават конкурентни, са тези, които се развиват и адаптират. Компаниите, които се развиват и адаптират, по-лесно отговарят на новите очаквания на пазара и на хората в организациите си. Според международни наблюдения в сферата на лидерството и човешките ресурси, трите тенденции, върху които компаниите да се фокусират през 2019 г., са: ориентация към клиентите; лидерството, ориентирано към хората и ангажираност на служителите.

## Ориентация на компанията към клиентите

Все повече компании насочват усилията си към подобряване на „преживяването на клиента". Докладът на компанията за проучвания Econsultancy гласи, че повечето организации посочват „преживяването на клиента" като най-важното конкурентно предимство за предстоящата година и подчертават няколко важни причини, поради които лидерството не трябва да пренебрегва това. Докладът показва, че организациите, които са наистина ориентирани към клиентите, имат почти два пъти по-голяма вероятност да надхвърлят своите бизнес цели с голям марж.

Ясно е, че изграждането на култура, ориентирана към клиентите, води до голяма възвръщаемост. В доклада се посочва обаче, че „Чудесното преживяване на клиентите не се случва случайно. То се нуждае от добра координация в цялата организация, като първо най-високите нива на управление трябва да се ангажират и да поставят клиентите в центъра при вземането на решения." Изграждането на такава култура започва от топ мениджмънта, но се нуждае от активното участие на всеки един служител в компанията. Мениджмънтът трябва да се ангажира да постави клиента в центъра, но трябва и да моделира такива поведения, които да подкрепят това, за да може и всички останали да последват примера им.

## Лидерство, ориентирано към хората

Служителите съвсем естествено искат да работят с лидери, които имат съпричастност, убеденост и автентичност. За съжаление, според проф. Дахер Келтнер, преподавател от Калифорнийския университет в Бъркли, много лидери изпитват „парадокса на властта". Тоест колкото по-високо се изкачват по стълбата на властта, толкова по-лошо става тяхното поведение. В своето изследване професор Келтнер установява, че лидерите в организациите са три пъти по-склонни да прекъсват или обиждат други, да управляват повече от една задача в срещите и да повишават тон, в сравнение с подчинените си.

Ролята на мениджърите обаче е ключово и те трябва да успяват ефективно да се справят с двете си основни роли – от една страна да познават много добре финансовите показатели, бизнес стратегията и уменията да управляват, но в същото време трябва да умеят да комуникират по правилния начин, да вдъхновяват и хората да са готови да ги следват във всяка една инициатива. Важна е връзката между това, което лидерите доставят като резултати, и начина, по който го постигат.

## Ангажираност на служителите

Според проучването на Gallup за Ангажираността на служителите през 2018 г., данните категорично потвърждават, че тя е нараснала. Докладът показва, че 34% от служителите в световен мащаб са ангажирани, което е най-високият показател, наблюдаван някога. Броят на служителите, които са в активна възраст, но по една или друга причина са откъснати от трудовия живот, също е на рекорден минимум от 13%. Това са страхотни новини за работодателите и това не е случайно. Последните години организациите инвестират много ресурси в подобряването на ангажираността на служителите и сега виждат положителния резултат от тези усилия.

Данните трябва да послужат като мотиватор за компаниите да продължат да влагат усилията си за увеличаване на ангажираността и по този начин — да увеличават и бизнес резултатите. Според Gallup:

> „Организациите, които имат най-високата ангажираност от страна на своите служители, постигат ръст на печалбата четири пъти по-голям от този на своите конкуренти. Топ компаниите в класацията реализират значително по-висока ангажираност на клиентите, по-висока производителност, по-висока степен на задържане на служителите, по-малко инциденти и 21% по-висока доходност. Ангажираните служители също така имат и по-добри здравословни показатели."

Важен елемент, който засилва ангажираността, е обучението и развитието, особено на високо потенциалните служители. Това изисква от ръководството да разработва и да прилага солидни програми, с които да помогне на служителите си да постигнат своите кариерни цели.

## Рецепта за успех

Не е изненада, че тези тенденции представляват три от най-важните компоненти на успешния бизнес: клиенти, лидери и служители. Важно е също така да се признае, че фокусирането върху само една от тези области не е достатъчно. Необходим е всеобхватен стратегически подход, който наистина да пожъне успех през настоящата година. Разгледайте внимателно състоянието на бизнеса си и преценете колко добре се справяте с всяка една от тези три тенденции. Идентифицирайте областите, които се нуждаят от развитие и инвестирайте в тях, за да осигурите успех и на трите сцени.`,
      en: `You have probably heard the phrase, "New year, new luck." Well, 2019 is already here, and it certainly comes with a new set of challenges. Let's look at some of the HR trends that are shaping conversations this year.

No matter the industry, the companies that stay competitive are the ones that keep evolving and adapting. Those that do are better positioned to respond both to changing market expectations and to the needs of the people within their organizations. Based on broader observations in leadership and human resources, three trends stand out in 2019: customer centricity, people-oriented leadership, and employee engagement.

## Customer centricity

More and more companies are focusing on improving the customer experience. A report by research company Econsultancy found that many organizations see customer experience as their most important competitive advantage for the year ahead, and it highlights several reasons why leadership should not overlook it. The report also shows that organizations that are truly customer-centric are nearly twice as likely to exceed their business goals by a significant margin.

Building a customer-centric culture can bring strong returns. At the same time, the report points out that "great customer experiences don't happen by accident. They require well-coordinated efforts across the entire organization, starting with senior leadership's commitment to putting the customer at the center of decision-making." Building this kind of culture starts at the top, but it also depends on the active involvement of every employee. Management needs to commit to putting the customer first and to model the behaviors that support that commitment so others can follow.

## People-oriented leadership

Employees naturally want to work with leaders who show empathy, conviction, and authenticity. Unfortunately, according to Professor Dacher Keltner of the University of California, Berkeley, many leaders experience what he calls "the power paradox." In other words, the higher they climb, the more likely their behavior is to worsen. In his research, Professor Keltner found that leaders are three times more likely than their subordinates to interrupt or insult others, multitask during meetings, and raise their voices.

At the same time, the role of managers remains critical. They need to balance two core responsibilities effectively. On the one hand, they need a strong understanding of financial indicators, business strategy, and management. On the other, they need to communicate well, inspire people, and lead in a way that others are willing to follow. What matters is the connection between the results leaders deliver and the way they achieve them.

## Employee engagement

According to Gallup's 2018 employee engagement study, engagement has increased. The report found that 34% of employees worldwide are engaged, the highest level ever recorded. The share of working-age people who are disconnected from work for one reason or another has also dropped to a record low of 13%. These are encouraging figures for employers, and they are not accidental. In recent years, organizations have invested significant resources in improving employee engagement, and they are now seeing the results of those efforts.

The data should encourage companies to continue investing in engagement and, as a result, improve business performance. According to Gallup:

> "Organizations with the highest levels of employee engagement achieve earnings-per-share growth that is more than four times higher than that of their competitors. Top-performing companies report significantly stronger customer engagement, higher productivity, better employee retention, fewer incidents, and 21% higher profitability. Engaged employees also show better health outcomes."

One of the important factors behind stronger engagement is learning and development, especially for high-potential employees. This requires leadership teams to create and implement strong programs that support employees in reaching their career goals.

## Looking at the bigger picture

It is no surprise that these trends reflect three of the most important parts of a successful business: customers, leaders, and employees. It is also worth recognizing that focusing on only one of these areas is not enough. What is needed is a broader strategic approach that can make a real difference in the year ahead. Take a close look at where your business stands and assess how well you are addressing each of these three trends. Identify the areas that need development and invest in them to support progress across all three.`,
    },
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

export function getArticleBySlug(slug: string): Article | undefined {
  return sortedArticles.find((a) => a.slug === slug);
}
