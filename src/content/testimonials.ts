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
    id: "homepage-demo-1",
    quote: {
      bg: "Тук ще поставим точен откъс от реалния отзив — достатъчно кратък за началната страница и без да променяме думите на клиента.",
      en: "This space will hold an exact excerpt from a real testimonial — short enough for the homepage and faithful to the client’s own words.",
    },
    name: clientName,
    context: fullContext,
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
      bg: "What stood out was her ability to create space for reflection while keeping the conversations practical and action-oriented.",
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
      bg: "I had the opportunity to work with Gergana while navigating a challenging period in my role, balancing team management, stakeholder expectations, and communication across multiple markets. What stood out was her ability to create space for reflection while keeping the conversations practical and action-oriented. Instead of offering ready-made answers, she asked insightful questions that helped me gain clarity, prioritize effectively, and approach difficult conversations with more confidence.\n\nOur work together strengthened not only my leadership approach but also the way I communicate with my team and cross-functional stakeholders. I became more intentional in my decision-making, delegation, and handling of complex situations without losing sight of the people behind them.\n\nI highly recommend Gergana to managers and communication professionals looking for a coach who combines business understanding with empathy and a genuinely thoughtful approach to leadership development.",
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
