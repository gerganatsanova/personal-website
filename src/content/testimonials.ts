import type { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

export type Testimonial = {
  id: string;
  quote: LocalizedText;
  name: LocalizedText;
  context: LocalizedText;
};

const clientName = { bg: "Име на клиент", en: "Client name" } as const;
const fullContext = {
  bg: "Длъжност · Организация · Вид услуга",
  en: "Role · Organization · Type of service",
} as const;
const discreetContext = {
  bg: "Професионален контекст · Вид услуга",
  en: "Professional context · Type of service",
} as const;

export const homepageTestimonials: readonly Testimonial[] = [
  {
    id: "elitsa",
    quote: {
      bg: "Започнах да вземам решения, да делегирам и да се справям със сложни ситуации по-осъзнато, без да губя от поглед хората зад тях.",
      en: "I became more intentional in my decision-making, delegation, and handling of complex situations without losing sight of the people behind them.",
    },
    name: { bg: "Елица", en: "Elitsa" },
    context: {
      bg: "Brand Activation & B2B Communication Manager Bulgaria",
      en: "Brand Activation & B2B Communication Manager Bulgaria",
    },
  },
  {
    id: "homepage-demo-2",
    quote: {
      bg: "Втората карта ще показва различен поглед към съвместната работа и най-ценното, което човекът е получил от нея.",
      en: "The second card will offer another perspective on the work together and what the person found most valuable in it.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
    id: "homepage-demo-3",
    quote: {
      bg: "Третият откъс може да насочи вниманието към промяната или резултата, описани със собствените думи на клиента.",
      en: "The third excerpt can draw attention to the change or outcome, described in the client’s own words.",
    },
    name: clientName,
    context: fullContext,
  },
];

export const workTestimonials: readonly Testimonial[] = [
  {
    id: "elitsa",
    quote: {
      bg: "Това, което особено ме впечатли, беше способността ѝ да създава пространство за размисъл, като същевременно запазва разговорите практични и насочени към действие.",
      en: "What stood out was her ability to create space for reflection while keeping the conversations practical and action-oriented.",
    },
    name: { bg: "Елица", en: "Elitsa" },
    context: {
      bg: "Brand Activation & B2B Communication Manager Bulgaria",
      en: "Brand Activation & B2B Communication Manager Bulgaria",
    },
  },
  {
    id: "testimonial-demo-2",
    quote: {
      bg: "Вторият подбран отзив може да даде различна гледна точка към процеса, подкрепата и начина на работа.",
      en: "A second selected testimonial can offer another perspective on the process, support, and way of working.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
    id: "testimonial-demo-3",
    quote: {
      bg: "Този откъс може да насочи вниманието към промяната или резултата, описани със собствените думи на клиента.",
      en: "This excerpt can draw attention to the change or outcome, described in the client’s own words.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    id: "testimonial-demo-4",
    quote: {
      bg: "Четвъртият глас допълва картината с още един тип услуга, ситуация или преживяване от съвместната работа.",
      en: "A fourth voice completes the picture with another type of service, situation, or experience of working together.",
    },
    name: clientName,
    context: discreetContext,
  },
];

export const fullTestimonials: readonly Testimonial[] = [
  {
    id: "elitsa",
    quote: {
      bg: "Имах възможността да работя с Гергана в труден период от професионалния ми път, когато трябваше да балансирам между управлението на екип, очакванията на различни заинтересовани страни и комуникацията на няколко пазара. Това, което особено ме впечатли, беше способността ѝ да създава пространство за размисъл, като същевременно запазва разговорите практични и насочени към действие. Вместо да предлага готови отговори, тя задаваше проницателни въпроси, които ми помогнаха да внеса повече яснота, да подреждам приоритетите си по-ефективно и да подхождам с повече увереност към трудните разговори.\n\nСъвместната ни работа укрепи не само лидерския ми подход, но и начина, по който общувам с екипа си и с колеги от различни функции. Започнах да вземам решения, да делегирам и да се справям със сложни ситуации по-осъзнато, без да губя от поглед хората зад тях.\n\nГорещо препоръчвам Гергана на мениджъри и професионалисти в областта на комуникациите, които търсят коуч, съчетаващ разбиране за бизнеса с емпатия и истински задълбочен подход към развитието на лидерски умения.",
      en: "I had the opportunity to work with Gergana while navigating a challenging period in my role, balancing team management, stakeholder expectations, and communication across multiple markets. What stood out was her ability to create space for reflection while keeping the conversations practical and action-oriented. Instead of offering ready-made answers, she asked insightful questions that helped me gain clarity, prioritize effectively, and approach difficult conversations with more confidence.\n\nOur work together strengthened not only my leadership approach but also the way I communicate with my team and cross-functional stakeholders. I became more intentional in my decision-making, delegation, and handling of complex situations without losing sight of the people behind them.\n\nI highly recommend Gergana to managers and communication professionals looking for a coach who combines business understanding with empathy and a genuinely thoughtful approach to leadership development.",
    },
    name: { bg: "Елица", en: "Elitsa" },
    context: {
      bg: "Brand Activation & B2B Communication Manager Bulgaria",
      en: "Brand Activation & B2B Communication Manager Bulgaria",
    },
  },
  {
    id: "testimonial-demo-2",
    quote: {
      bg: "Тук ще бъде поставен по-дълъг реален отзив, без да съкращаваме или променяме казаното от клиента. Кутията ще се разширява естествено според дължината на текста.\n\nТака ще можем да запазим и важния контекст, и личния тон, и конкретното преживяване от съвместната работа.",
      en: "A longer real testimonial will appear here without shortening or changing the client’s words. The box will grow naturally with the text.\n\nThis gives us room to preserve the important context, personal tone, and specific experience of working together.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
    id: "testimonial-demo-3",
    quote: {
      bg: "Някои отзиви могат да бъдат още по-подробни и да разказват цялата история — каква е била първоначалната ситуация, как е протекла работата и какво се е променило след нея.\n\nТози демонстрационен текст показва как по-дългият разказ ще заема повече вертикално пространство, без останалите кутии да бъдат принудени да имат същата височина. Всеки отзив ще запази собствен ритъм и ще се отличава визуално като отделна история.",
      en: "Some testimonials can be more detailed and tell the whole story — the initial situation, what the work together was like, and what changed afterwards.\n\nThis demonstration shows how a longer story takes up more vertical space without forcing the other boxes to match its height. Each testimonial keeps its own rhythm and remains visually distinct as an individual story.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    id: "testimonial-demo-4",
    quote: {
      bg: "Още един отзив със средна дължина ще ни помогне да видим ритъма на секцията, когато кратки и по-подробни коментари се редуват.",
      en: "One more medium-length testimonial helps show the rhythm of the section when concise and more detailed comments alternate.",
    },
    name: clientName,
    context: discreetContext,
  },
];
