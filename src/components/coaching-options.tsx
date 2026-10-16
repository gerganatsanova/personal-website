"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import styles from "./coaching-options.module.css";

const content = {
  bg: {
    optionsLabel: "Възможности за коучинг срещи",
    showLabel: "Покажи",
    meetingLabel: "среща",
    meetingsLabel: "срещи",
    shortDuration: "По 50 минути",
    detailsLabel: "Виж повече",
    previousLabel: "Предишен вариант",
    nextLabel: "Следващ вариант",
    ofLabel: "от",
    title: "Пространство за твоята следваща стъпка",
    intro: "Понякога имаш нужда от един разговор, за да подредиш мислите си. Друг път от време и последователност, за да преминеш от разбиране към действие.",
    meetTitle: "Нека първо се запознаем",
    meetDuration: "20 минути",
    meetFreeLabel: "Безплатно",
    meetText: "Кратък разговор за това какво те води тук, каква подкрепа търсиш и дали моят подход е подходящ за теб. Без ангажимент да продължиш.",
    button: "Запази среща за опознаване",
    note: "Не е нужно предварително да знаеш кой вариант е за теб. Можем да го обсъдим в срещата за опознаване.",
    cards: [
      {
        meetingCount: 1,
        title: "Един разговор. Ясна следваща стъпка.",
        duration: "1 среща · 50 минути",
        description: "Когато конкретна ситуация, въпрос или решение заема мислите ти и искаш пространство да го разгледаш от друга перспектива.",
        highlights: [
          "Да подредиш мислите и приоритетите си.",
          "Да разгледаш възможните посоки.",
          "Да определиш конкретна следваща стъпка.",
        ],
      },
      {
        meetingCount: 4,
        title: "От яснота към действие",
        duration: "4 срещи · По 50 минути",
        description: "Когато искаш да работиш по определена тема или цел и да имаш пространство да опитваш, да обсъждаш случващото се и да коригираш посоката.",
        highlights: [
          "Да изясниш целта и това, което те спира.",
          "Да приложиш нови подходи между срещите.",
          "Да проследиш какво работи за теб.",
        ],
      },
      {
        meetingCount: 10,
        title: "Време за по-дълбока работа",
        duration: "10 срещи · По 50 минути",
        description: "Когато темата не се изчерпва с едно решение и искаш да разгледаш свързани въпроси, повтарящи се модели и промените, които са важни за теб.",
        highlights: [
          "Да изследваш вярванията и моделите зад изборите си.",
          "Да експериментираш с различни начини на действие.",
          "Да имаш последователна подкрепа и време за осмисляне.",
        ],
      },
    ],
  },
  en: {
    optionsLabel: "Coaching meeting options",
    showLabel: "Show",
    meetingLabel: "meeting",
    meetingsLabel: "meetings",
    shortDuration: "50 minutes each",
    detailsLabel: "View details",
    previousLabel: "Previous option",
    nextLabel: "Next option",
    ofLabel: "of",
    title: "Space for your next step",
    intro: "Sometimes you need one conversation to put your thoughts in order. Other times, you need time and consistency to move from understanding to action.",
    meetTitle: "Let’s get to know each other first",
    meetDuration: "20 minutes",
    meetFreeLabel: "Free",
    meetText: "A short conversation about what brings you here, the support you are looking for, and whether my approach is right for you. No commitment to continue.",
    button: "Book an introductory meeting",
    note: "You don’t need to know which option is right for you in advance. We can discuss it during the introductory meeting.",
    cards: [
      {
        meetingCount: 1,
        title: "One conversation. A clear next step.",
        duration: "1 meeting · 50 minutes",
        description: "When a specific situation, question, or decision is on your mind and you want space to explore it from another perspective.",
        highlights: [
          "Organise your thoughts and priorities.",
          "Explore possible directions.",
          "Identify a concrete next step.",
        ],
      },
      {
        meetingCount: 4,
        title: "From clarity to action",
        duration: "4 meetings · 50 minutes each",
        description: "When you want to work on a particular topic or goal, with space to try things, discuss what happens, and adjust your direction.",
        highlights: [
          "Clarify your goal and what is holding you back.",
          "Apply new approaches between meetings.",
          "Track what works for you.",
        ],
      },
      {
        meetingCount: 10,
        title: "Time for deeper work",
        duration: "10 meetings · 50 minutes each",
        description: "When a topic goes beyond a single decision and you want to explore connected questions, recurring patterns, and changes that matter to you.",
        highlights: [
          "Explore the beliefs and patterns behind your choices.",
          "Experiment with different ways of taking action.",
          "Have consistent support and time to reflect.",
        ],
      },
    ],
  },
};

const BOOKING_URL = "https://cal.com/tsanova-consulting/intro";
const CONTROL_CLASS = "inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-background text-xl text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function CoachingOptions() {
  const { lang } = useLanguage();
  const copy = content[lang];
  const [active, setActive] = useState(0);
  const backgroundCards = copy.cards.map((_, index) => index).filter((index) => index !== active);

  function changeCard(direction: -1 | 1) {
    setActive((current) => (current + direction + copy.cards.length) % copy.cards.length);
  }

  return (
    <section id="coaching-options" aria-labelledby="coaching-options-title" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <span aria-hidden className="mb-6 block h-px w-10 bg-accent" />
          <h2 id="coaching-options-title" className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-muted md:text-base">{copy.intro}</p>
        </div>

        <div
          className={`${styles.introMeeting} mt-10 grid gap-7 rounded-sm p-7 md:mt-12 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10`}
        >
          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">{copy.meetTitle}</h3>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm font-medium text-foreground">
              <span>{copy.meetDuration}</span>
              <span className="rounded-full border border-accent/70 px-3 py-1 text-xs tracking-wide">
                {copy.meetFreeLabel}
              </span>
            </p>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.8] text-muted">{copy.meetText}</p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 justify-self-start rounded-full border border-foreground bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition-colors hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {copy.button}
            <span aria-hidden className="shrink-0 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div
          className="mt-10"
          role="region"
          aria-label={copy.optionsLabel}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              changeCard(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <div className={styles.deck}>
            {copy.cards.map((card, index) => (
              <article
                key={card.meetingCount}
                data-active={index === active}
                data-side={index === backgroundCards[0] ? "left" : "right"}
                className={`${styles.card} rounded-sm p-7 lg:p-10`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`${copy.showLabel}: ${card.duration}`}
                  aria-pressed={index === active}
                  tabIndex={index === active ? -1 : 0}
                  className={styles.selectCard}
                >
                  <span className="font-serif text-3xl text-foreground">{card.meetingCount}</span>
                  <span className="mt-2 text-sm text-foreground">{card.meetingCount === 1 ? copy.meetingLabel : copy.meetingsLabel}</span>
                  <span className="mt-4 text-sm text-accent">{copy.shortDuration}</span>
                  <span className="mt-6 text-xs text-muted">{copy.detailsLabel} <span aria-hidden>→</span></span>
                </button>
                <div className={styles.details} aria-hidden={index !== active}>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground lg:text-3xl">{card.title}</h3>
                  <p className="mt-4 text-sm font-medium text-accent">{card.duration}</p>
                  <p className="mt-5 text-[15px] leading-[1.8] text-muted">{card.description}</p>
                  <ul className="mt-6 space-y-4 border-t border-border/70 pt-6">
                    {card.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-[14px] leading-[1.7] text-foreground/90">
                        <span aria-hidden className="mt-[0.8em] h-px w-3 shrink-0 bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 flex items-center justify-center gap-6">
            <button type="button" onClick={() => changeCard(-1)} aria-label={copy.previousLabel} className={CONTROL_CLASS}>←</button>
            <p aria-live="polite" aria-atomic="true" className="min-w-16 text-center text-sm text-muted">
              <span className="font-medium text-foreground">{active + 1}</span> {copy.ofLabel} {copy.cards.length}
              <span className="sr-only"> · {copy.cards[active].duration}</span>
            </p>
            <button type="button" onClick={() => changeCard(1)} aria-label={copy.nextLabel} className={CONTROL_CLASS}>→</button>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] italic leading-[1.8] text-muted">{copy.note}</p>
      </div>
    </section>
  );
}
