import type { Lang } from "@/lib/i18n";

type LocalizedText = Record<Lang, string>;

export type Testimonial = {
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
    quote: {
      bg: "Тук ще поставим точен откъс от реалния отзив — достатъчно кратък за началната страница и без да променяме думите на клиента.",
      en: "This space will hold an exact excerpt from a real testimonial — short enough for the homepage and faithful to the client’s own words.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    quote: {
      bg: "Втората карта ще показва различен поглед към съвместната работа и най-ценното, което човекът е получил от нея.",
      en: "The second card will offer another perspective on the work together and what the person found most valuable in it.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
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
    quote: {
      bg: "Тук ще поставим точен кратък откъс, който показва какво е било най-ценно в съвместната работа.",
      en: "An exact short excerpt will show what this person found most valuable about working together.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    quote: {
      bg: "Вторият подбран отзив може да даде различна гледна точка към процеса, подкрепата и начина на работа.",
      en: "A second selected testimonial can offer another perspective on the process, support, and way of working.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
    quote: {
      bg: "Този откъс може да насочи вниманието към промяната или резултата, описани със собствените думи на клиента.",
      en: "This excerpt can draw attention to the change or outcome, described in the client’s own words.",
    },
    name: clientName,
    context: fullContext,
  },
  {
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
    quote: {
      bg: "Кратък отзив може да остане само в един силен и ясен ред.",
      en: "A short testimonial can remain a single strong, clear line.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    quote: {
      bg: "Тук ще бъде поставен по-дълъг реален отзив, без да съкращаваме или променяме казаното от клиента. Кутията ще се разширява естествено според дължината на текста.\n\nТака ще можем да запазим и важния контекст, и личния тон, и конкретното преживяване от съвместната работа.",
      en: "A longer real testimonial will appear here without shortening or changing the client’s words. The box will grow naturally with the text.\n\nThis gives us room to preserve the important context, personal tone, and specific experience of working together.",
    },
    name: clientName,
    context: discreetContext,
  },
  {
    quote: {
      bg: "Някои отзиви могат да бъдат още по-подробни и да разказват цялата история — каква е била първоначалната ситуация, как е протекла работата и какво се е променило след нея.\n\nТози демонстрационен текст показва как по-дългият разказ ще заема повече вертикално пространство, без останалите кутии да бъдат принудени да имат същата височина. Всеки отзив ще запази собствен ритъм и ще се отличава визуално като отделна история.",
      en: "Some testimonials can be more detailed and tell the whole story — the initial situation, what the work together was like, and what changed afterwards.\n\nThis demonstration shows how a longer story takes up more vertical space without forcing the other boxes to match its height. Each testimonial keeps its own rhythm and remains visually distinct as an individual story.",
    },
    name: clientName,
    context: fullContext,
  },
  {
    quote: {
      bg: "Още един отзив със средна дължина ще ни помогне да видим ритъма на секцията, когато кратки и по-подробни коментари се редуват.",
      en: "One more medium-length testimonial helps show the rhythm of the section when concise and more detailed comments alternate.",
    },
    name: clientName,
    context: discreetContext,
  },
];
