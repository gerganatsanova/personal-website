// ============================================================================
// ARTICLES – single source of truth for every article on the site.
//
// HOW TO ADD A NEW ARTICLE:
//   1. Copy one of the entries below and paste it at the TOP of the array.
//   2. Fill in the fields: slug (url-friendly, no spaces), date (YYYY-MM-DD),
//      displayDate (what appears visually), cover (image URL), title, excerpt,
//      body – each in both BG and EN.
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
  /** ISO date (YYYY-MM-DD) – used for sorting. */
  date: string;
  /** Human-readable date shown in the UI. */
  displayDate: { bg: string; en: string };
  /** Cover image URL (absolute or /public path). */
  cover: string;
  title: { bg: string; en: string };
  excerpt: { bg: string; en: string };
  body: { bg: string; en: string };
  materialSlug?: string;
};

export const ARTICLES_PER_PAGE = 10;

// Newest first. When adding a new article, paste it at the top.
export const articles: Article[] = [
  {
    slug: "tihoto-napuskane-e-signal",
    date: "2026-06-01",
    displayDate: { bg: "Юни 2026", en: "June 2026" },
    cover:
      "https://images.unsplash.com/photo-1696123460860-db4ba71573b8?w=1400&q=80&auto=format&fit=crop",
    title: {
      bg: "Тихото напускане не е просто неангажираност. То е сигнал.",
      en: "Quiet quitting is not just disengagement. It is a signal.",
    },
    excerpt: {
      bg: "Понякога човек не спира да работи. Спира да вярва, че допълнителното усилие има смисъл. За тихото отдръпване, което често започва много преди реалното напускане.",
      en: "Sometimes people do not stop working. They stop believing that extra effort still makes sense. On the quiet withdrawal that often begins long before the actual resignation.",
    },
    materialSlug: "before-i-leave-on-the-inside",
    body: {
      bg: `Случвало ли ви се е човек от екипа ви постепенно да стане по-тих?

Не изведнъж. Не драматично. Не с конфликт или отказ да работи. Просто нещо се променя.

Преди е участвал повече в разговорите. Давал е идеи. Питал е, предлагал е, поемал е инициатива. А после малко по малко започва да се отдръпва. Отговаря по-кратко. Присъства на срещите, но не съвсем. Изпълнява задачите си, но вече не носи същата енергия.

Отстрани това лесно може да изглежда като неангажираност.

И понякога точно така го наричаме. Човекът вече не е толкова активен. Не проявява същия интерес. Не дава повече от необходимото. Все едно просто е изгубил желание.

Но според мен това е твърде бърз прочит.

Тихото напускане не е моментът, в който човек спира да работи. Често е моментът, в който вече е спрял да вярва, че допълнителното усилие има смисъл.

Казвам това не само като човек, който е наблюдавал подобни ситуации в работна среда. Казвам го и като човек, който познава това състояние отвътре. Не като теория, а като онова тихо вътрешно отдръпване, което понякога се случва много преди реалното напускане.

Защото човек рядко се отдръпва изведнъж.

Преди това обикновено е имало опити. Да каже нещо. Да предложи. Да даде повече. Да се справи, въпреки умората. Да повярва, че ситуацията ще се промени. Да остане ангажиран, дори когато нещо в него вече започва да се къса.

И точно там често се пропуска важният момент. Ние забелязваме отдръпването, но не винаги си даваме сметка какво е имало преди него.

Понякога преди тишината е имало идеи, които не са били чути. Понякога повече усилие, което постепенно се е превърнало в очакване. Понякога нужда от разговор, но насреща са стояли само нови задачи. Понякога човек е давал сигнали, че нещо не е наред, но тези сигнали са останали незабелязани.

И в един момент спира.

Не задължително да работи. Спира да влага себе си по същия начин.

Започва да пази енергията си. Да не предлага, когато вече не вярва, че ще има значение. Да не влиза в разговори, които преди са му били важни. Да прави необходимото, но да не дава онова допълнително присъствие, което никога не може да бъде поискано с длъжностна характеристика.

Затова, когато наречем това просто неангажираност, рискуваме да затворим разговора твърде рано.

Неангажираността описва как изглежда поведението отвън. Но не винаги обяснява какво се е случило отвътре.

И тук идват по-трудните въпроси.

Кога този човек започна да се отдръпва? Имаше ли момент, в който спря да говори? Имаше ли нещо, което не чухме навреме? Очаквахме ли твърде дълго сам да поддържа мотивацията си, без средата да му дава причина за това?

Това не означава, че всяко тихо напускане е вина на мениджъра. Работните отношения са по-сложни от това. Хората са различни, ситуациите също.

Но мениджърът често е първият човек, който може да забележи промяната. Не чрез повече контрол. Не чрез още един статус ъпдейт. А чрез внимание.

Понякога един по-смислен разговор може да започне съвсем просто:

> „Забелязвам, че напоследък си по-тих. Искам да разбера дали има нещо, което пропускаме.“

Такъв разговор няма да реши всичко. Понякога идва късно. Понякога доверието вече е прекъснато. Понякога човек вътрешно си е тръгнал и реалното напускане е само последната стъпка.

Но понякога точно такъв разговор може да отвори врата. Не непременно към мигновено връщане на мотивацията, защото мотивацията не се включва с бутон. А към разбиране. Към признание, че нещо се е променило. Към възможност човекът отново да бъде видян не само като изпълнител на задачи, а като човек.

Тихото напускане не винаги е отказ от работа. Понякога е отказ от безкрайно даване без смисъл. Понякога е самозащита. Понякога е последният тих начин човек да остане, преди окончателно да си тръгне.

И може би най-важният въпрос не е „как да го направим отново ангажиран“.

А какво трябва да се промени, за да има защо да бъде.

Защото преди човек да напусне компанията, често първо напуска вътрешно. И ако слушаме внимателно, тази тишина може да ни каже много.`,
      en: `Have you ever noticed someone in your team gradually becoming quieter?

Not suddenly. Not dramatically. Not through conflict or refusal to work. Something simply starts to change.

They used to participate more in conversations. They shared ideas. They asked questions, made suggestions, took initiative. Then, little by little, they start to pull back. Their answers become shorter. They are present in meetings, but not fully there. They still complete their tasks, but they no longer bring the same energy.

From the outside, this can easily look like disengagement.

And sometimes that is exactly what we call it. The person is no longer as active. They do not show the same interest. They no longer give more than what is necessary. It seems as if they have simply lost motivation.

But in my view, that is too quick a conclusion.

Quiet quitting is not the moment when a person stops working. Often, it is the moment when they have stopped believing that extra effort still makes sense.

I say this not only as someone who has observed similar situations in the workplace. I say it also as someone who knows this state from the inside. Not as a theory, but as that quiet internal withdrawal that sometimes happens long before the actual resignation.

Because people rarely withdraw all at once.

Before that, there have usually been attempts. To say something. To suggest something. To give more. To keep going despite the tiredness. To believe that the situation might change. To stay engaged, even when something inside has already started to break.

And this is often where the important part gets missed. We notice the withdrawal, but we do not always ask ourselves what came before it.

Sometimes, before the silence, there were ideas that were not heard. Sometimes, extra effort slowly turned into an expectation. Sometimes, there was a need for a real conversation, but what came in response was only more tasks. Sometimes, a person had been giving signals that something was not right, but those signals remained unnoticed.

And at some point, they stop.

Not necessarily working. They stop investing themselves in the same way.

They begin to protect their energy. They stop suggesting things when they no longer believe it will matter. They stop entering conversations that once felt important to them. They do what is necessary, but they no longer give that additional presence that can never truly be required in a job description.

That is why, when we call this simply disengagement, we risk closing the conversation too early.

Disengagement describes how the behaviour looks from the outside. But it does not always explain what has happened on the inside.

And this is where the more difficult questions begin.

When did this person start to pull back? Was there a moment when they stopped speaking up? Was there something we did not hear in time? Did we expect them to maintain their own motivation for too long, without the environment giving them a reason to do so?

This does not mean that every case of quiet quitting is the manager's fault. Work relationships are more complex than that. People are different, and so are situations.

But the manager is often the first person who can notice the change. Not through more control. Not through another status update. But through attention.

Sometimes, a more meaningful conversation can begin very simply:

> “I've noticed you seem quieter lately. I'd like to understand if there is something we are missing.”

That conversation will not solve everything. Sometimes, it comes too late. Sometimes, trust has already been broken. Sometimes, the person has already left internally, and the actual resignation is only the final step.

But sometimes, exactly this kind of conversation can open a door. Not necessarily to instantly “bringing motivation back”, because motivation is not something we switch on with a button. But to understanding. To acknowledging that something has changed. To giving the person a chance to be seen again, not only as someone who completes tasks, but as a human being.

Quiet quitting is not always a refusal to work. Sometimes, it is a refusal to keep giving endlessly without meaning. Sometimes, it is self-protection. Sometimes, it is the last quiet way a person stays before they leave for good.

And maybe the most important question is not “how do we make this person engaged again?”

But what needs to change, so that they have a reason to be.

Because before people leave a company, they often leave internally first. And if we listen carefully, that silence can tell us a lot.`,
    },
  },
  {
    slug: "mozakat-spira-da-se-trenira",
    date: "2026-01-21",
    displayDate: { bg: "Януари 2026", en: "January 2026" },
    cover:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&q=80",
    title: {
      bg: "Защо мозъкът спира да се тренира в ерата на AI",
      en: "Why the brain stops training in the age of AI",
    },
    excerpt: {
      bg: "Кога за последно мисли 20 минути, без да питаш Google или AI? Три прости упражнения, които да задържат ума ти буден, фокусиран и жив, дори когато машините правят почти всичко вместо нас.",
      en: "When was the last time you thought for 20 minutes without asking Google or AI? Three simple exercises to keep your mind awake, focused, and alive – even when machines do almost everything for us.",
    },
    body: {
      bg: `Кога за последно мисли 20 минути, без да питаш Google или AI?

Живеем във време, в което машините анализират, очакват и дори „разговарят" с нас, но нито една от тях не може да мисли вместо нас. Колкото повече се отказваме от „умствения труд" за сметка на удобството, толкова по-бързо започва да закърнява вътрешният ни потенциал, не изведнъж, а бавно, почти незабележимо. В свят, който ни залива с информация и ни предлага готови отговори, задачата ни вече не е просто да знаем, а да поддържаме ума си буден, фокусиран и жив.

Но как всъщност AI ни влияе и защо това е проблем?

Нека ви дам една простичка схема как се случваха нещата преди и как се случват днес. Нека си представим, че трябва да напишем текст. Преди нормалният процес включвашe:

пишеш текст → мислиш → бъркаш → поправяш се → учиш се.

Сега обаче нещата стоят по друг начин:

пишеш подсказка (prompt) → получаваш гладък отговор → приемаш го.

Проблемът не е в това, че отговорът е добър. Проблемът е в това, че мозъкът ни не преминава през процеса. Без грешка няма съмнение. Без съмнение няма проверка. Без проверка няма дълбоко разбиране. Получаваш резултат, но липсата на използване на нашия мозък за решаването на проблема всъщност не ни помага да учим, а напротив, спира нашето развитие.

Изследванията в областта на развитие на човешкия потенциал показват, че именно процесът на усилие, проба, грешка и корекция е това, което изгражда нови невронни връзки, а не само крайният отговор. Когато прескачаме този процес и оставим алгоритмите да мислят вместо нас, мозъкът постепенно забравя как да се справя в сложни ситуации и несигурност.

В тази статия ще ви дам няколко прости упражнения, които да ви помогнат да държите ума си буден, макар и с помощта на AI в ежедневието.

## Упражнение 1: Осъзнато учене – една трудна задача на ден

Най-простото упражнение за мозъка е да учим нещо ново, което леко ни затруднява. Проучванията свързват придобиването на нови умения (език, свирене на инструмент, сложен софтуер) с по-добри когнитивни функции и по-голяма устойчивост на когнитивния спад.

Как да го приложиш: Избери „основно предизвикателство на деня" – 20-30 минути нов език, онлайн курс, логически задачи, програмиране или друг тип целенасочено учене.

Поддържай състоянието на трудност леко над комфорта – не твърде лесно, за да не преминеш на автопилот, но и не много трудно, за да не се отказваш. Ключът е консистентност. Мозъкът обича ритъма: малки, но редовни усилия, които всеки ден му напомнят, че още има какво да открива и изучава.

## Упражнение 2: Дълбок фокус в свят на разсейване

Постоянното превключване между задачи и нотификации тренира мозъка да бъде тревожен и повърхностен, а не концентриран и задълбочен. За да поддържаме способността си за фокус, е необходимо съзнателно да я тренираме, както тренираме издръжливостта във фитнеса.

Как да го приложиш: Техниката на Помодоро е много подходяща за това. Тя включва „25 минути фокус" – избери една задача (писане, анализ, учене), изключи известията на телефона (най-добре го остави някъде далеч от теб) и работи само по избраната задача за 25 минути. Може да използваш таймер (има много инструменти в интернет, свързани с тази техника). Направи 5 минути активна почивка – раздвижване, вода, поглед далеч, но без телефон и скролване.

С времето можеш да увеличиш фокус-блоковете до 40-50 минути, ако задачата го позволява и/или изисква. Тази форма на дълбока работа тренира вниманието и функциите, свързани с изпълнение на нещо конкретно: планиране, самоконтрол, решаване на сложни задачи.

## Упражнение 3: „Първо мисля, след това питам"

Дигиталната хигиена в ерата на AI е изключително важна. Изкуственият интелект ни спестява време, но може тихо да ни отнеме навика да мислим в дълбочина, ако го използваме за всичко в ежедневието си. Признавам, че самата аз ползвам изкуствения интелект често, дори и да е за „какво да приготвя за вечеря днес"… Но по този начин мозъкът ни се променя спрямо това, което повтаряме ежедневно. Ако за всеки ежедневен въпрос се допитваме до AI и ако винаги приемаме първия готов отговор, постепенно губим търпението да мислим задълбочено.

Как да го промениш: Когато имаш въпрос или проблем, преди да отвориш търсачката или AI, опитай се да формираш сама минимум три свои идеи, отговора или хипотези. Може да ги напишеш или просто да направиш кратък диалог в главата си, но това ще ти помогне да поддържаш мозъка си буден.

Едва след това може да потърсиш съдействие от търсачката или изкуствения интелект за верификация или развитие на твоите идеи. Така преобразуваш AI от патерица в партньор – инструмент, който усилва мисленето ти, вместо да го заменя.

## Какво ще правим с естествения си интелект

AI ще става все по-бърз, по-точен и по-достъпен. Това е неизбежно.

Въпросът вече не е дали ще използваме изкуствен интелект, а какво ще правим с естествения си.

Защото удобството е прекрасно. Но мисленето е това, което ни прави хора.`,
      en: `When was the last time you thought for 20 minutes without asking Google or AI?

We live in a time when machines analyze, anticipate, and even "talk" to us, but none of them can think for us. The more we give up "mental labor" in exchange for convenience, the faster our inner potential begins to weaken, not suddenly, but slowly, almost imperceptibly. In a world that floods us with information and offers ready-made answers, our task is no longer simply to know, but to keep our mind awake, focused, and alive.

But how exactly does AI affect us, and why is this a problem?

Let me give you a simple outline of how things used to happen and how they happen today. Let's imagine we need to write a text. Before, the normal process looked like this:

write the text → think → make mistakes → correct yourself → learn.

Now things look different:

write a prompt → receive a polished answer → accept it.

The problem is not that the answer is good. The problem is that our brain does not go through the process. Without mistakes, there is no doubt. Without doubt, there is no checking. Without checking, there is no deep understanding. You get a result, but not using your own brain to solve the problem does not actually help you learn. On the contrary, it slows your development.

Research in the field of human potential development shows that it is the process of effort, trial, error, and correction that builds new neural connections, not only the final answer. When we skip this process and let algorithms think for us, the brain gradually forgets how to deal with complex situations and uncertainty.

In this article, I will share a few simple exercises to help you keep your mind awake, even with AI as part of everyday life.

## Exercise 1: Conscious learning – one difficult task a day

The simplest exercise for the brain is to learn something new that challenges us slightly. Studies link the acquisition of new skills, such as a language, playing an instrument, or using complex software, with better cognitive function and greater resilience against cognitive decline.

How to apply it: Choose your "main challenge of the day" – 20 to 30 minutes of a new language, an online course, logic problems, programming, or another form of focused learning.

Keep the level of difficulty just above your comfort zone – not too easy, so you do not switch to autopilot, but not too difficult, so you do not give up. The key is consistency. The brain likes rhythm: small but regular efforts that remind it every day that there is still more to discover and learn.

## Exercise 2: Deep focus in a world of distraction

Constantly switching between tasks and notifications trains the brain to be anxious and superficial, rather than focused and deep. To maintain our ability to focus, we need to train it consciously, just as we train endurance at the gym.

How to apply it: The Pomodoro technique is very useful for this. It involves "25 minutes of focus." Choose one task, such as writing, analysis, or studying, turn off phone notifications, ideally leaving your phone somewhere away from you, and work only on the chosen task for 25 minutes. You can use a timer, and there are many online tools related to this technique. Then take a 5-minute active break: move, drink water, look into the distance, but avoid your phone and scrolling.

Over time, you can increase your focus blocks to 40 or 50 minutes if the task allows or requires it. This form of deep work trains attention and the functions related to completing something specific: planning, self-control, and solving complex problems.

## Exercise 3: "I think first, then I ask"

Digital hygiene in the age of AI is extremely important. Artificial intelligence saves us time, but it can quietly take away our habit of thinking deeply if we use it for everything in our daily lives. I admit that I often use artificial intelligence myself, even for things like "what should I cook for dinner today?" But this is how our brain changes according to what we repeat every day. If we turn to AI for every everyday question, and if we always accept the first ready-made answer, we gradually lose the patience to think deeply.

How to change it: When you have a question or a problem, before opening a search engine or AI, try to form at least three ideas, answers, or hypotheses of your own. You can write them down or simply have a short dialogue in your head, but this will help you keep your brain awake.

Only after that should you seek help from a search engine or artificial intelligence to verify or develop your ideas. This way, you turn AI from a crutch into a partner, a tool that strengthens your thinking instead of replacing it.

## What will we do with our natural intelligence

AI will become faster, more accurate, and more accessible. That is inevitable.

The question is no longer whether we will use artificial intelligence, but what we will do with our natural intelligence.

Because convenience is wonderful. But thinking is what makes us human.`,
    },
  },
  {
    slug: "kogato-mashinite-mislyat",
    date: "2025-11-27",
    displayDate: { bg: "Ноември 2025", en: "November 2025" },
    cover:
      "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=1400&q=80",
    title: {
      bg: "Когато машините мислят, а ние забравяме да мечтаем",
      en: "When machines think and we forget to dream",
    },
    excerpt: {
      bg: "Първата вълна на изкуствения интелект промени бизнеса. Втората тихо променя начина, по който мислим. За невропластичността, дълбочината и единственото, което остава наше – способността да мечтаем.",
      en: "The first wave of AI changed business. The second is quietly changing the way we think. On neuroplasticity, depth, and the one thing that remains ours – the ability to dream.",
    },
    body: {
      bg: `Не успявам да остана безпристрастна към промяната, която самата аз усещам толкова силно. Ако първата вълна на изкуствения интелект преобърна начина, по който правим бизнес, то втората започва тихо да променя начина, по който мислим. Вече не е въпрос дали ще живеем редом с машините, а как ще се адаптираме към тях. Да, точно така! Как ние, хората, ще се адаптираме към тях, машините. Те се учат изключително бързо, но дали ние хората се учим редом с тях?

Темите, свързани с нашия мозък, винаги са представлявали интерес за мен. Вярвам, че повечето от вас ще се съгласите с твърдението, че нашият мозък е мускул. И като такъв той расте, когато го натоварваме, и закърнява, когато го оставим да бездейства. А днес изкуственият интелект прави толкова много вместо нас, че все по-често не се налага да натоварваме нашия мозък. Удобството е приятно, но може да ни направи лениви. А най-опасното е, че както се случва с останалите мускули в нашето тяло, когато спрем да тренираме, така и закърняването на нашия мозък ще стане толкова плавно, че няма да го усетим. Създаваме си навици да питаме, вместо да търсим, да получаваме готови отговори, вместо да си позволяваме да се чудим.

И точно в това се крие големият парадокс на времето ни: колкото повече технологии имаме, толкова по-рядко използваме пълния си умствен капацитет. Интелектът ни е като река. Ако я канализираме, дава сила и движение, но ако я оставим да тече хаотично, може да отнесе всичко по пътя си.

## Вниманието като валута

Ежедневно трябва да си припомняме, че живеем в епоха, в която вниманието се превърна в една от най-ценните валути. Залива ни толкова много информация, че според някои изследвания днес човек поема повече информация за един ден, отколкото преди половин век е приемал за цяла година. Това е не просто промяна в количеството, а в самата структура на ума ни. Мозъкът се учи да превключва и да реагира бързо, но губи навика да се задълбочава.

Става ни все по-трудно да останем „на едно място". Не физически, а с нашите мисли. Дигитализацията днес ни свързва с целия свят само с един клик, но в същото време ни прави несигурни, неуверени и изгубени. Колкото повече връзки създаваме онлайн, толкова по-рядко усещаме истинска близост с хората около нас. AI може да разговаря с нас, но не може да ни разбере истински. Може да имитира емпатия, но не може да почувства това, което един човек би могъл да съпреживее с нас. Доверяваме се все повече на разговори с AI, отколкото на разговорите с хората около нас. Звучи налудничаво, но е и самата истина. Истина, която може би все още дори самите ние не искаме да си признаем пред себе си.

## Какво можем да направим

И ако в думите ми има нотка на тревога, то не е защото вярвам, че всичко е изгубено. Напротив. Точно тук идва моментът да си зададем правилните въпроси. Какво можем да направим ние? Как можем да поддържаме мозъка си буден в свят, който постоянно се опитва да го приспи с удобство?

Истината е, че мозъкът ни притежава нещо, което нито един алгоритъм няма. Нарича се невропластичност. Това е способността му да се променя, да се адаптира, да създава нови пътища и мостове между идеите. На практика, мозъкът непрекъснато се изгражда наново. Всеки избор, който правим, всяко малко действие, всяка мисъл. Всичко оставя следа. Ние буквално моделираме себе си с навиците, които повтаряме.

Ако му даваме храна под формата на любопитство, творчество и осъзнато учене, той започва да се разширява. Става по-гъвкав, по-бърз, по-дълбок. Започва да вижда нови модели, да прави връзки, които преди са били невидими.

## Нашето предимство

Това е може би и големият урок на нашето време: не можем да спрем еволюцията на машините, но можем да се погрижим за собствената си. Да не оставим изкуствения интелект да ни направи небрежни към собственото ни развитие.

Защото AI може да пише, да анализира, да прогнозира, но все още не може да мечтае. Не може да почувства тишината след мисълта, нито онзи миг, в който идеята се ражда от нищото. Тази магия остава човешка. И може би точно в това се крие нашето предимство: не в скоростта, а в дълбочината. Не в алгоритмите, а в смисъла!`,
      en: `I cannot remain impartial toward a change I feel so strongly myself. If the first wave of artificial intelligence transformed the way we do business, the second is quietly beginning to change the way we think. It is no longer a question of whether we will live alongside machines, but how we will adapt to them. Yes, exactly. How we, humans, will adapt to them, the machines. They are learning incredibly fast, but are we learning alongside them?

Topics related to the human brain have always fascinated me. I believe most of you would agree that the brain is like a muscle. As such, it grows when we use it and weakens when we leave it idle. Today, artificial intelligence does so much for us that more and more often we do not need to stretch our minds. Convenience is pleasant, but it can make us lazy. And the most dangerous part is that, just like with the other muscles in our body, when we stop training, the weakening of our brain will happen so gradually that we may not even notice it. We are building habits of asking instead of searching, of receiving ready-made answers instead of allowing ourselves to wonder.

And this is where the great paradox of our time lies: the more technology we have, the less often we use our full mental capacity. Our intelligence is like a river. If we channel it, it gives power and movement, but if we let it flow chaotically, it can carry away everything in its path.

## Attention as currency

Every day, we need to remind ourselves that we live in an age where attention has become one of the most valuable currencies. We are flooded with so much information that, according to some studies, a person today takes in more information in a single day than someone half a century ago would take in over an entire year. This is not just a change in quantity, but a change in the very structure of our minds. The brain learns to switch and react quickly, but it loses the habit of going deep.

It is becoming harder and harder for us to stay "in one place." Not physically, but with our thoughts. Digitalization connects us to the whole world with a single click, but at the same time it makes us uncertain, insecure, and lost. The more connections we create online, the less often we feel true closeness with the people around us. AI can talk to us, but it cannot truly understand us. It can imitate empathy, but it cannot feel what another human being could share with us. We are placing more and more trust in conversations with AI than in conversations with the people around us. It sounds absurd, but it is also the truth. A truth that perhaps we are still not ready to admit even to ourselves.

## What we can do

And if there is a note of concern in my words, it is not because I believe everything is lost. On the contrary. This is exactly where we need to start asking the right questions. What can we do? How can we keep our brains awake in a world that is constantly trying to lull them to sleep with convenience?

The truth is that our brain has something no algorithm has. It is called neuroplasticity. This is its ability to change, adapt, and create new pathways and bridges between ideas. In practice, the brain is constantly rebuilding itself. Every choice we make, every small action, every thought. Everything leaves a trace. We literally shape ourselves through the habits we repeat.

If we feed the brain with curiosity, creativity, and conscious learning, it begins to expand. It becomes more flexible, faster, deeper. It starts to see new patterns and make connections that were previously invisible.

## Our advantage

This may be the great lesson of our time: we cannot stop the evolution of machines, but we can take care of our own. We must not allow artificial intelligence to make us careless toward our own development.

Because AI can write, analyze, and predict, but it still cannot dream. It cannot feel the silence after a thought, nor that moment when an idea is born from nothing. That magic remains human. And perhaps this is exactly where our advantage lies: not in speed, but in depth. Not in algorithms, but in meaning.`,
    },
  },
  {
    slug: "ai-promeni-sveta-na-biznesa",
    date: "2025-09-16",
    displayDate: { bg: "Септември 2025", en: "September 2025" },
    cover:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80",
    title: {
      bg: "Как изкуственият интелект промени света на бизнеса и защо това е само началото",
      en: "How artificial intelligence changed the world of business and why this is only the beginning",
    },
    excerpt: {
      bg: "AI вече не е технологията на бъдещето, а фонът, на който се случва бизнесът днес. За скоростта, данните, персонализацията и големия въпрос – ще се адаптираме ли навреме?",
      en: "AI is no longer the technology of the future – it's the backdrop against which business happens today. On speed, data, personalization, and the bigger question: will we adapt in time?",
    },
    body: {
      bg: `Ако преди десет години някой ни беше казал, че алгоритми ще пишат текстове, ще анализират пазари и ще водят разговори, вероятно щяхме да се усмихнем невярващо, нали? Но няма никакво съмнение, че живеем в нова ера. Това не е просто клише, а реалност, която усещаме всеки ден, дори без да я назоваваме. Ерата, в която изкуственият интелект вече не е технологията на бъдещето, а фонът, на който се случва бизнесът днес. Времето, в което иновациите не се появяват като бавни вълни, а като приливи, които буквално преобръщат цели индустрии.

Най-видимото, разбира се, е скоростта. Задачи, които някога отнемаха дни или седмици, вече могат да бъдат изпълнени за минути или секунди. Алгоритмите поемат тежестта на повтарящите се механични задачи, освобождавайки хората да се фокусират върху стратегията, върху това да създават и да управляват.

Обработването на данни може би е най-добрият пример за тази промяна. Толкова дълго време те ни заливаха без да имаме много ясна осъзнатост на къде ни водят. Сега, с помощта на AI, този потоци от информация започна да придобива форма – очертават се модели, тенденции, прогнози. Но тук идва и тънкият момент в цялата тази трансформация. Никой алгоритъм не може да замени човешкият потенциал. Напротив, колкото повече числа и сценарии имаме пред себе си, толкова по-важно става да имаме ясната логика и смелостта да тълкуваме, да вземаме решения и да поемаме отговорност. Машината може да изчисли всичко, но не може да види „защо" и „какво следва". Това остава наша задача.

И ако AI промени начина, по който работим отвътре, то той промени и начина, по който клиентите гледат на света отвън. Персонализацията вече не е приятна изненада, а основно очакване. Хората искат бизнесът да ги познава, да им говори на техния език и да им предлага решения, които имат смисъл за тях. Това не е просто промяна в маркетинга – това е промяна в културата на отношенията между компании и хора.

Нови бизнес модели изникват именно от пресичането между технологии и човешки нужди, между логика и креативност. И ако си припомним още едно време, когато Медичите във Флоренция са вярвали, че истинските иновации се раждат там, където се срещат различията, ние се намираме в същата тази точка, стига да намерим правилния начин да си взаимодействаме. Днес AI свързва науки и изкуства, числа и емоции, логика и въображение.

И тук идва големият въпрос: какво означава това за нас? Изкуственият интелект вече е тук. Не е въпрос на „дали", а на „как". Той вече промени начина, по който работим, учим, общуваме и вземаме решения. И няма да спре. Въпросът е един единствен. Ще се адаптираме ли навреме и ще намерим ли своето място в този нов свят, или ще оставим приливите да ни отнесат?`,
      en: `If someone had told us ten years ago that algorithms would write texts, analyze markets, and hold conversations, we would probably have smiled in disbelief, wouldn't we? But there is no doubt that we are living in a new era. This is not just a cliché, but a reality we feel every day, even when we do not name it. An era in which artificial intelligence is no longer the technology of the future, but the backdrop against which business happens today. A time when innovations no longer arrive as slow waves, but as tides that can literally overturn entire industries.

The most visible change, of course, is speed. Tasks that once took days or weeks can now be completed in minutes or seconds. Algorithms take on the weight of repetitive, mechanical work, freeing people to focus on strategy, creation, and management.

Data processing is perhaps the best example of this shift. For a long time, data flooded us without a clear sense of where it was leading. Now, with the help of AI, these streams of information are beginning to take shape — patterns, trends, and forecasts are emerging. But this is also where the subtle part of the transformation begins. No algorithm can replace human potential. On the contrary, the more numbers and scenarios we have in front of us, the more important it becomes to bring clear logic and the courage to interpret, make decisions, and take responsibility. The machine can calculate everything, but it cannot see the "why" or the "what comes next." That remains our task.

And if AI has changed the way we work from the inside, it has also changed the way customers see the world from the outside. Personalization is no longer a pleasant surprise; it is a basic expectation. People want businesses to know them, speak their language, and offer solutions that make sense for them. This is not simply a change in marketing. It is a shift in the culture of relationships between companies and people.

New business models are emerging precisely at the intersection of technology and human needs, between logic and creativity. And if we remember a time when the Medici in Florence believed that true innovation was born where differences meet, then we are standing at that same point today, as long as we find the right way to interact. Today, AI connects science and art, numbers and emotions, logic and imagination.

And here comes the bigger question: what does this mean for us? Artificial intelligence is already here. It is no longer a question of "if," but of "how." It has already changed the way we work, learn, communicate, and make decisions. And it will not stop. The question is only one: will we adapt in time and find our place in this new world, or will we let the tides carry us away?`,
    },
  },
  {
    slug: "naglasa-za-razvitie-i-rastezh",
    date: "2022-03-18",
    displayDate: { bg: "Март 2022", en: "March 2022" },
    cover:
      "https://images.unsplash.com/photo-1535231540604-72e8fbaf8cdb?w=1400&q=80",
    title: {
      bg: "Какво представлява нагласата за развитие и растеж и защо ни е необходима?",
      en: "What is a growth mindset and why do we need it?",
    },
    excerpt: {
      bg: "Защо едни хора постигат повече от други? Често отговорът е в начина, по който мозъкът ни сортира света. За ретикуларната активираща система и нагласата за растеж.",
      en: "Why do some people achieve more than others? Often the answer lies in how our brain sorts the world. On the Reticular Activating System and the growth mindset.",
    },
    body: {
      bg: `Всеки човек живее живота си с желанието да бъде успешен и да се чувства удовлетворен от онова, което прави. В света има много примери за успешни хора – било то защото са открили нещо ново и непознато, което ще е в полза на обществото, или са станали невероятни професионалисти в областта, в която работят, или пък са натрупали богатство, което им носи дивиденти. Каквато и да е причината, всички приемаме тези хора за успели и ги даваме за пример. Но на какво се дължат постиженията им? Какво правят по-различно от нас, за да постигнат успеха? А не можем ли и ние да се превърнем в успешни хора за пример?

Отговорите на тези въпроси са колкото лесни и прости, толкова и сложни. Проучвания на причините, довели до успехите на изследвани хора, потвърждават, че колкото и различни по своя характер и същност да са дадените постижения, има едно много важно и ключово нещо, което ги обединява. Това е начинът, по който успелите хора възприемат света и случващото се около себе си. Преди да ви разкажа повече за това обаче, искам да насоча вниманието ви към една ключова за функционирането на нашия мозък система.

## Ретикуларната активираща система

Тази система е много древна и изключително важна за нашия мозък, част e от мозъчния ствол (разположена в неговото протежение), достига до междинния мозък и служи за сортиране и предаване на информацията от заобикалящата ни среда. Тази ключова за нас част от мозъка се описва като ретикуларна активираща система (РАС). В разговорния език е много позната и като „врата на сортировка". Но защо е толкова специална и е необходимо да ѝ обръщаме внимание днес?

В ежедневието си сме залети от информационен поток, който обаче мозъкът ни няма капацитет да обработи. И тук не говоря само за това, което осъзнаваме. На помощ в тази сложна задача ни се притичва РАС, която помага на мозъка ни да подбере коя информация да продължи по веригата и да бъде обработена. С други думи, РАС определя какво ще достигне до нашето съзнание. В далечното минало, тази система е насочвала вниманието ни към опасности или възможности и ни е помогнала в оцеляването. Днес оцеляването ни може и да не зависи от нея, но нейното влияние е все така силно.

Както в миналото, така и днес, РАС сортира постъпващата информация от околната среда и препраща само това, което прецени, че работи в полза на нашето съзнание. Лично за мен, тази функция на мозъка е много добра, защото всъщност тя ни помага да не обръщаме внимание на много излишен шум около себе си – всяко прелитащо птиче, докато се разхождаме в парка, всяка дума на хората, с които се разминаваме, всяко ръмжене на двигател от профучала покрай нас кола, та дори мрънкането на партньора и детето вкъщи… И от друга страна, тази система може да насочи вниманието ни към нещата, които представляват интерес за нас.

## Как РАС избира какво да виждаме

Ето един пример. Автомобилът ни вече е поостарял и искаме да го заменим с по-нов модел. Отиваме в автокъщата и си харесваме модел на „Нисан" – не е най-новият, но предимствата му изведнъж започват да ни се струват очевидни. Има страхотни извивки, седалките са ергономични, таблото е много приятно за гледане, озвучаването е на изключително високо ниво и като цяло предлага комфортно пътуване, а шофирането е истинско удоволствие. Доволни да попаднем на автомобил, какъвто до момента не сме виждали, купуваме нисана и гордо се качваме зад волана. По пътя към вкъщи изведнъж забелязваме в огледалото за обратно виждане, че колата зад нас е същият модел. На следващото кръстовище се разминаваме с още един такъв автомобил. Малко преди да стигнете до вкъщи виждате друг паркиран автомобил, точно като нашия. Оказва се, че около нас е пълно с точно този модел на „Нисан". Но защо досега не сме ги забелязали? Та едва ли не всички ги карат! Отговорът е лесен – заради нашата РАС. Както вече ви казах, РАС е първият филтър на информацията, която постъпва в нашия мозък. До преди да харесаме този автомобил и да подскажем на РАС интереса си, системата просто е пренебрегвала тази информация и тя не е преминавала към нашето съзнание. Но сега, когато вече представлява интерес за нас, РАС е готова да ни покаже всички заобикалящи ни възможности.

## Когато РАС работи срещу нас

РАС обаче има и един много голям проблем. Тази система не може да прецени кое е добре за нас, кое ще ни помогне и кое всъщност ни пречи и би представлявало заплаха. Тя е толкова първична, че може да функционира само на ниво интерес. Ако трябва пак да дам пример, но този път неблагоприятен за нас, то бих го свързала с един много често срещан навик, който несъзнателно фокусира вниманието ни в негативна посока. Искам да ви попитам, случвало ли ви се е сутрин, когато станете и си направите първото кафе за деня, да включите телевизора и да пуснете сутрешния блок? Може би повечето от вас ще отговорят с „да". А случвало ли ви се е, докато гледате сутрешния блок, да чуете за броя заразени с корона вирус за изминалото денонощие, или за катастрофата, която е отнела живота на една жена, или за невинните жертви на войната? Тези от вас, които отговориха на първия ми въпрос с „да", може би и сега ще кимнат утвърдително.

Какъв обаче е проблемът тук? Като приемаме цялата тази негативна информация, върху която така или иначе не можем да повлияем положително (или поне не директно и не в момента), ние казваме на нашата РАС, че всички тези неща ни интересуват. Всички тези неприятности са фокус на нашето внимание и РАС си казва: „А, това ти харесва, ами има още много, което да ти покажа". След като сме си изпили кафето, заредили сме се с един куп негативна информация, докато се оправяме за работа, идва моментът, в който излизаме от вкъщи и се качваме в колата. Докато пътуваме към детската градина, попадаме в голямо задръстване и първото, което ни идва на ум е: „Как пък тези от Общината не се научиха, че тук стават задръствания, и не предприеха мерки". Оставяме детето в градината, но заради задръстването вече закъсняваме за работа. Пристигайки пред сградата, се оказва, че няма място за паркиране, а в главата ни изплува упрекът: „Все така става – никога няма място за паркиране". Влизайки в офиса, вече закъснели, установяваме, че клиентът, с когото работим, има много сериозен проблем и ще забави доставката на необходимото ни оборудване. Денят ни едва е започнал, а вече си мислим какви каръци сме и „как пък все на мен се случват тези неща"…

## Ключът към развитието

И може би сега се чудите защо ви разказвам всичко това и по какъв начин то влияе върху нашето развитие и нашите успехи? Разказвам го, защото ключът към успеха е именно настройката на нашия мозък. С правилната настройка, с правилното програмиране на нашата РАС, можем да се превърнем в хората, които постигат и са пример за другите. Веднъж настроили мозъка си да мисли за развитие и растеж във всяко наше ежедневно действие, резултатите са само въпрос на време. Приемем ли предизвикателствата в ежедневието си като възможности, които да ни развиват, които да ни правят по-добри с всеки следващ опит (например, докато сме в задръстването, да си пуснем аудиокнигата, за която никога не ни достига време, а ни е толкова важна в работното ежедневие), правим следващата крачка към крайната дестинация – причисляването ни към категорията на успешните личности.`,
      en: `Every person lives with the desire to be successful and to feel fulfilled by what they do. The world is full of examples of successful people — whether because they have discovered something new and unknown that benefits society, become exceptional professionals in their field, or built wealth that brings them returns. Whatever the reason, we see these people as successful and often hold them up as examples. But what are their achievements due to? What do they do differently from us in order to succeed? And can we also become successful people others look up to?

The answers to these questions are both simple and complex. Studies exploring the reasons behind people's success confirm that, however different their achievements may be in nature and substance, there is one very important thing that connects them: the way successful people perceive the world and what happens around them. Before I tell you more about that, I want to draw your attention to a system that is key to how our brain functions.

## The Reticular Activating System

This system is very ancient and extremely important for the brain. It is part of the brainstem, running through it and reaching the diencephalon, and it serves to sort and transmit information from the environment around us. This essential part of the brain is known as the Reticular Activating System, or RAS. In everyday language, it is often described as a "sorting gate." But why is it so special, and why should we pay attention to it today?

In our daily lives, we are flooded with information that our brain simply does not have the capacity to process. And I am not talking only about the things we consciously notice. This is where the RAS comes to our aid. It helps the brain select which information should move further along the chain and be processed. In other words, the RAS determines what reaches our conscious awareness. In the distant past, this system directed our attention toward dangers or opportunities and helped us survive. Today, our survival may not depend on it in the same way, but its influence remains just as strong.

Both in the past and today, the RAS sorts incoming information from the environment and passes on only what it determines serves our conscious mind. Personally, I find this function of the brain very useful, because it helps us ignore a great deal of unnecessary noise around us — every bird flying by as we walk in the park, every word spoken by the people we pass, every engine growl from a car speeding past us, even the grumbling of a partner or child at home. On the other hand, this system can also direct our attention toward the things that interest us.

## How the RAS chooses what we see

Here is an example. Our car is getting old, and we want to replace it with a newer model. We go to a car dealership and choose a Nissan model — it is not the newest one, but its advantages suddenly begin to seem obvious. It has beautiful curves, ergonomic seats, a dashboard that is pleasant to look at, an excellent sound system, and overall it offers a comfortable ride, while driving it feels like a real pleasure. Happy to have found a car unlike anything we had noticed before, we buy the Nissan and proudly get behind the wheel. On the way home, we suddenly notice in the rear-view mirror that the car behind us is the same model. At the next intersection, we pass another one just like it. Shortly before getting home, we see another parked car exactly like ours. It turns out that this exact Nissan model is everywhere around us. But why had we not noticed it before? It feels as if everyone is driving it. The answer is simple: because of our RAS. As I said earlier, the RAS is the first filter for the information entering our brain. Before we liked this car and signaled our interest to the RAS, the system simply ignored that information, and it did not reach our conscious awareness. But now that it matters to us, the RAS is ready to show us all the surrounding possibilities.

## When the RAS works against us

The RAS, however, has one major limitation. It cannot judge what is good for us, what will help us, or what may actually stand in our way and pose a threat. It is so primitive that it can function only at the level of interest. To give another example — this time one that works against us — I would connect it to a very common habit that unconsciously focuses our attention in a negative direction. Let me ask you: has it ever happened that in the morning, when you get up and make your first coffee of the day, you turn on the television and watch the morning news? Perhaps most of you would answer yes. And has it happened that while watching the morning news, you hear about the number of people infected with coronavirus in the past 24 hours, or about a car accident that took a woman's life, or about the innocent victims of war? Those of you who answered yes to my first question will probably nod again now.

So what is the problem here? By taking in all this negative information, which we cannot positively influence anyway — or at least not directly and not in that moment — we are telling our RAS that all these things interest us. All these troubles become the focus of our attention, and the RAS says, "Oh, so this is what you like? Well, there is plenty more I can show you." After we have finished our coffee, filled ourselves with negative information, and started getting ready for work, the moment comes when we leave home and get in the car. On the way to kindergarten, we get stuck in heavy traffic, and the first thought that comes to mind is: "How have the people at the municipality still not learned that traffic jams happen here, and why haven't they done something about it?" We drop the child off at kindergarten, but because of the traffic, we are already late for work. When we arrive in front of the building, it turns out there is nowhere to park, and the complaint comes up in our mind: "It's always like this — there is never anywhere to park." We walk into the office, already late, and find out that the client we are working with has a very serious problem and will delay the delivery of the equipment we need. The day has barely begun, and we are already thinking how unlucky we are and "why do these things always happen to me?"

## The key to development

And perhaps now you are wondering why I am telling you all this and how it affects our development and our success. I am telling you because the key to success lies precisely in the way our brain is tuned. With the right mindset, with the right programming of our RAS, we can become the kind of people who achieve things and become an example for others. Once we train our brain to think in terms of development and growth in every everyday action, the results are only a matter of time. When we accept the challenges in our daily lives as opportunities that develop us and make us better with every new attempt — for example, while sitting in traffic, listening to the audiobook we never seem to have time for, even though it matters so much in our working life — we take the next step toward the final destination: joining the category of successful people.`,
    },
  },
  {
    slug: "liderstvoto-zapochva-otvatre",
    date: "2021-05-17",
    displayDate: { bg: "Май 2021", en: "May 2021" },
    cover:
      "https://images.unsplash.com/photo-1569851325621-266c8332dcc6?w=1400&q=80",
    title: {
      bg: "Лидерството започва първо вътре в нас",
      en: "When leadership begins on the inside",
    },
    excerpt: {
      bg: "Когато човек стане мениджър за първи път, често очаква от себе си да бъде по-уверен, по-ясен и по-готов, отколкото реално се чувства. Но може би лидерството не започва с липсата на несигурност, а с начина, по който се учим да я разбираме и да водим през собствените си силни страни.",
      en: "When someone becomes a manager for the first time, they often expect themselves to feel more confident, more prepared, and more certain than they actually do. But maybe leadership does not begin with the absence of doubt. Maybe it begins with learning how to understand that doubt and how to lead through our own strengths.",
    },
    body: {
      bg: `Когато човек стане мениджър за първи път, отвън това често изглежда като признание. Нова роля, повече доверие, повече отговорност. Някой е видял потенциал в теб и ти е дал възможност да направиш следваща крачка.

Но отвътре понякога усещането е съвсем различно.

Не винаги идва увереност. Понякога първо идва шумът.

Дали ще се справя? Дали ще ме приемат? Дали ще знам какво да кажа, когато стане трудно? Дали ще успея да бъда едновременно човечен и ясен? Дали трябва да стана друг тип човек, за да бъда възприеман като лидер?

Мисля, че за тази част от прехода към лидерство не говорим достатъчно. Много по-често говорим за техниките. Как да делегираме. Как да даваме обратна връзка. Как да поставяме цели. Как да следим резултатите.

И всичко това е важно. Няма как да водим екип само с добри намерения. Нужни са структура, инструменти и умения. Но понякога, докато говорим за всички тези техники, забравяме човека, който трябва да ги използва.

А истината е, че новата роля не променя само задачите ни. Променя и тежестта на присъствието ни.

Думите ни започват да имат по-голямо значение. Реакциите ни се усещат по-силно. Мълчанието ни също се тълкува. Начинът, по който влизаме в напрежение, начинът, по който показваме доверие или съмнение, начинът, по който реагираме, когато не сме сигурни, започва да влияе не само на работата, а и на средата около нас.

И точно тук често се появява страхът.

Понякога той изглежда като контрол. Проверяваме повече, отколкото е нужно, защото вътрешно ни е страх да не се изпусне нещо.

Понякога изглежда като доказване. Говорим повече, обясняваме повече, опитваме се да покажем, че сме на мястото си.

Понякога изглежда като прекалено старание да бъдем харесвани. Омекотяваме трудните разговори, отлагаме яснотата, правим компромиси, които после тежат.

И това не означава, че не ставаме за лидери. Означава, че сме хора, които се учат да стоят в нова отговорност.

Може би първата по-зряла крачка не е да нямаме страх. А да започнем да го разпознаваме, преди той да започне да води вместо нас.

Има и още нещо, което ми се струва много важно. Много нови мениджъри се опитват да влязат в образ. Представят си как „трябва" да изглежда един лидер. По-уверен. По-категоричен. По-спокоен. По-твърд. По-различен.

И неусетно започват да се отдалечават от себе си.

А аз все повече вярвам, че лидерството не е да станеш някой друг. Не е да облечеш чужда кожа, защото така си мислиш, че трябва да изглежда човек на тази позиция.

Лидерството е да разбереш през кои свои силни страни можеш да водиш.

Някой води през спокойствие. Друг през яснота. Трети през емпатия. Четвърти през структура. Пети през способността да вижда потенциала в хората. Шести през смелостта да казва трудните неща по човешки начин.

Разбира се, това не означава да не се развиваме. Не можем просто да кажем „аз съм си такъв човек" и да очакваме това да е достатъчно. Адаптацията е част от лидерството.

Но адаптацията не е имитация.

Може да си чувствителен човек и пак да поставяш граници. Може да си по-мек като присъствие и пак да бъдеш ясен. Може да ти пука много за хората и пак да не носиш всичко вместо тях. Може да не си най-шумният човек в стаята и пак да имаш силно лидерско присъствие.

Може би не е нужно да ставаме други хора, за да бъдем лидери. Може би е нужно да изградим повече зрялост около човека, който вече сме.

Защото титлата може да дойде в един конкретен ден. Но лидерът в нас се изгражда по-бавно.

В начина, по който реагираме, когато ни е страх. В начина, по който използваме силните си страни, вместо да се преструваме на някой друг. В начина, по който се грижим за хората, без да забравяме себе си.

И може би един от най-важните въпроси в началото не е „как да бъда перфектен лидер".

А: Какъв лидер ставам, докато се уча да нося тази отговорност?`,
      en: `When someone becomes a manager for the first time, from the outside it often looks like recognition. A new role, more trust, more responsibility. Someone has seen potential in you and has given you the opportunity to take the next step.

But on the inside, it can feel very different.

Confidence does not always come first. Sometimes, the first thing that appears is the noise.

Will I manage? Will they accept me? Will I know what to say when things get difficult? Can I be both human and clear? Do I need to become a different kind of person in order to be seen as a leader?

I think we do not talk enough about this part of the transition into leadership. We usually talk much more about the techniques. How to delegate. How to give feedback. How to set goals. How to track results.

And all of that matters. Of course it does. We cannot lead a team with good intentions alone. We need structure, tools, and skills. But sometimes, while we talk so much about all these techniques, we forget the person who has to use them.

Because the truth is, a new leadership role does not change only our tasks. It also changes the weight of our presence.

Our words start to matter more. Our reactions are felt more strongly. Even our silence can be interpreted. The way we enter tense situations, the way we show trust or doubt, the way we react when we are not sure what to do, starts to influence not only the work, but also the environment around us.

And this is often where fear appears.

Sometimes it looks like control. We check more than we need to, because deep down we are afraid something might be missed.

Sometimes it looks like proving ourselves. We speak more, explain more, try harder to show that we deserve to be in this role.

Sometimes it looks like trying too hard to be liked. We soften difficult conversations, postpone clarity, make compromises that later become heavy.

And none of this means that we are not meant to be leaders. It means we are human beings learning how to stand in a new kind of responsibility.

Maybe the first more mature step is not to have no fear. Maybe it is to start recognizing fear before it starts leading on our behalf.

There is something else that feels very important to me. Many new managers try to step into an image. They imagine what a leader is "supposed" to look like. More confident. More decisive. More calm. More firm. More different.

And without noticing, they start moving away from themselves.

But I increasingly believe that leadership is not about becoming someone else. It is not about putting on someone else's skin because we think this is how a person in this position should look.

Leadership is about understanding which of our own strengths we can lead through.

Some people lead through calmness. Others through clarity. Some through empathy. Others through structure. Some through their ability to see potential in people. Others through the courage to say difficult things in a human way.

Of course, this does not mean we do not need to grow. We cannot simply say, "This is just who I am," and expect that to be enough. Adaptation is part of leadership.

But adaptation is not imitation.

You can be a sensitive person and still set boundaries. You can have a softer presence and still be clear. You can care deeply about people and still not carry everything for them. You can be not the loudest person in the room and still have a strong leadership presence.

Maybe we do not need to become different people in order to be leaders. Maybe we need to build more maturity around the person we already are.

Because the title may come on one specific day. But the leader within us is built more slowly.

In the way we respond when we are afraid. In the way we use our strengths instead of pretending to be someone else. In the way we care for people without forgetting ourselves.

And maybe one of the most important questions in the beginning is not, "How do I become the perfect leader?"

But: What kind of leader am I becoming while I am learning to carry this responsibility?`,
    },
  },
  {
    slug: "pohvala-koyato-ima-znachenie",
    date: "2020-08-31",
    displayDate: { bg: "Август 2020", en: "August 2020" },
    cover:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80",
    title: {
      bg: "Как да даваме похвала, която има значение",
      en: "How to give meaningful praise",
    },
    excerpt: {
      bg: "Похвалата е една от най-силните, но най-рядко използваните форми на обратна връзка. Кога да я даваме и какво да включва, за да наистина мотивира служителите.",
      en: "Praise is one of the most powerful – yet least used – forms of feedback. When to give it and what it should include to genuinely motivate employees.",
    },
    body: {
      bg: `Даването и получаването на обратна връзка е част от живота ни, особено в работен контекст, когато се изисква да се постигат резултати. Когато даваме на служителите обратна връзка, те могат да получат по-добра представа за това как мениджърът гледа на работата им и до каква степен се справят със задълженията си. Това им помага да разберат какво правят добре и какво биха могли да подобрят. Понякога обаче обратната връзка, която даваме или получаваме, нито е полезна, нито е значима (като например „Ти си мързелив"). За да бъде полезна дадената обратна връзка, тя трябва да носи стойност.

По своята същност, обратната връзка бива два вида: коригираща (тази, която цели да промени нещо в поведението или работата на служителя) и обратна връзка за похвала (тази, която потвърждава, че нещата се вършат по правилен начин). Всички сме се сблъсквали не веднъж с първият тип обратна връзка и я познаваме много добре. Похвалата обаче е нещо, което много по-рядко се дава, а е изключително важна за мотивацията на служителите. В днешната статия ще разгледаме кога е подходящо да даваме обратна връзка за похвала и няколко съвета за начина на даване на похвали.

## Защо е важно да даваме похвали на служителите?

Понякога изглежда, че се чувстваме неудобно, когато трябва да похвалим някого за извършената от него дейност. Възможно е да се почувстваме неловко, смутени или притеснени, че ще ни помислят за неискрени или лицемерни. Непосредственото и естествено даване на похвали не е вродено у нас, но е умение, което може да се развива. То е важно за мотивацията и ангажираността на всички служители в организацията.

Обратна връзка за похвала се дава, когато служителите отговарят или надвишават бизнес целите, преодоляват предизвикателство, надхвърлят очакванията или въвеждат новаторски идеи. Признанието за добри резултати е много силен и ефективен метод да покажете на служителите, че са ценени. То изгражда самочувствие и подобрява качеството на работа. Служителите, които получават ефективна обратна връзка за похвали обикновено са по-ангажирани, продуктивни и лоялни към бизнеса и към дейностите, които вършат.

## Кога трябва да даваме обратна връзка за похвала?

Когато служителят достигне или надмине целта. Когато служителят е работил усилено, за да постигне или надвиши целта, важно е да оцените неговото усилие като бъдете конкретни във Вашата обратна връзка. Не забравяйте да споменете как техният принос ще повлияе на общата цел и на бизнеса.

Когато служителят проявява инициатива. Благодарете на служителя, че е поел инициативата, като изброите как действията му влияят положително на поставените цели.

Когато служителят надхвърля очакванията. В този случай обратната Ви връзка трябва да включва конкретика за това как допълнителните усилия на човека ще повлияят положително на бизнес целите.

Когато служителят се нуждае от повишаване на доверието. Бъдете конкретни по отношение на уменията на служителя, на които се възхищавате, и дайте пример за това, как техните положителни действия подкрепят бизнес целите.

Когато служителят преодолее предизвикателство. Вашата обратна връзка трябва да подчертават какви умения е демонстрирал служителя, за да преодолее предизвикателството.

Когато служителят споделя нови идеи. Ако идеите са резонни, не забравяйте да включите в обратната си връзка как новите идеи ще повлияят на общата бизнес цел.

## Какви елементи включва обратната връзка за похвала?

Бъдете конкретни. Служителите имат по-голям шанс да учат и да израстват на работното място, когато получат подробна обратна връзка. Избягвайте неясни похвали като „добре свършена работа" или „добра работа". Ако е възможно, посочете конкретен пример за извършената работа.

Давайте обратната връзка на момента. Ако изчакате да изкажете похвала, служителят може да почувства, че упоритият му труд е неоценен. Вместо да чакате насрочена среща, дайте похвалата веднага след като той свърши добра работа.

Признайте усилията. Вашата обратна връзка не трябва да е насочена само към тяхната личност. Включете положителна обратна връзка, която признава усилията на човека. Това помага да подхраните неговата решителност и самоувереност.

Давайте чести похвали. Бъдете възможно най-щедри със своите похвали. Добре е да отправяте похвали не само за големите постижения, а и за по-малките. Внимавайте обаче да не прекрачите граница, в която обратната Ви връзка губи своята достоверност. Просто бъдете избирателни и искрени.

Направете похвалата публично достояние. Когато давате на някого положителна обратна връзка, добре е това да се случва в присъствието и на останалите служители. Понякога може да е необходимо да похвалите само пред екипа на отдела, друг път обаче може да бъде необходимо да похвалите човека пред цялата компания. Използвайте преценката си.`,
      en: `Giving and receiving feedback is part of our lives, especially in a work context where results are expected. When we give employees feedback, they gain a clearer understanding of how their manager sees their work and how well they are meeting their responsibilities. It helps them understand what they are doing well and what they could improve. Sometimes, however, the feedback we give or receive is neither useful nor meaningful — for example, "You are lazy." For feedback to be helpful, it needs to bring value.

By nature, feedback comes in two forms: corrective feedback, which aims to change something in an employee's behavior or work, and praise-based feedback, which confirms that things are being done in the right way. We have all encountered the first type of feedback more than once, and we know it well. Praise, however, is given much less often, even though it is extremely important for employee motivation. In this article, we will look at when it is appropriate to give praise-based feedback and share a few tips on how to give praise well.

## Why is it important to praise employees?

Sometimes it seems that we feel uncomfortable when we need to praise someone for the work they have done. We may feel awkward, embarrassed, or worried that we will come across as insincere or hypocritical. Giving praise in an immediate and natural way does not always come naturally, but it is a skill that can be developed. It matters for the motivation and engagement of employees across the organization.

Praise-based feedback is given when employees meet or exceed business goals, overcome a challenge, go beyond expectations, or introduce innovative ideas. Recognizing good results is a powerful and effective way to show employees that they are valued. It builds confidence and improves the quality of work. Employees who receive effective praise-based feedback are usually more engaged, productive, and loyal to the business and to the work they do.

## When should we give praise-based feedback?

When an employee reaches or exceeds a goal. When an employee has worked hard to reach or exceed a goal, it is important to acknowledge their effort by being specific in your feedback. Remember to mention how their contribution will affect the broader goal and the business.

When an employee shows initiative. Thank the employee for taking initiative by pointing out how their actions positively affect the goals that have been set.

When an employee goes beyond expectations. In this case, your feedback should include specifics about how the person's additional effort will positively affect the business goals.

When an employee needs a confidence boost. Be specific about the employee's skills that you admire, and give an example of how their positive actions support the business goals.

When an employee overcomes a challenge. Your feedback should highlight the skills the employee demonstrated in order to overcome the challenge.

When an employee shares new ideas. If the ideas are relevant, remember to include in your feedback how those new ideas will affect the broader business goal.

## What should praise-based feedback include?

Be specific. Employees have a greater chance to learn and grow at work when they receive detailed feedback. Avoid vague praise such as "well done" or "good job." Whenever possible, point to a specific example of the work completed.

Give feedback in the moment. If you wait too long to express praise, the employee may feel that their hard work has gone unnoticed. Instead of waiting for a scheduled meeting, give praise soon after they have done good work.

Recognize the effort. Your feedback should not focus only on the person's personality. Include positive feedback that recognizes their effort. This helps nurture their determination and self-confidence.

Give praise often. Be as generous as possible with your praise. It is good to offer praise not only for major achievements, but also for smaller ones. Be careful, however, not to cross the line where your feedback loses credibility. Simply be selective and sincere.

Make praise public. When you give someone positive feedback, it is often good to do it in the presence of other employees. Sometimes it may be enough to praise someone in front of their department team; other times, it may be appropriate to praise them in front of the whole company. Use your judgment.`,
    },
  },
  {
    slug: "pandemia-promiana-biznesa",
    date: "2020-05-20",
    displayDate: { bg: "Май 2020", en: "May 2020" },
    cover:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=1400&q=80",
    title: {
      bg: "Една пандемия, неочаквана промяна, неизбежна криза, но и много възможности – как ще се промени бизнесът в бъдещето",
      en: "A pandemic, an unexpected change, an inevitable crisis – and many opportunities: how business will change in the future",
    },
    excerpt: {
      bg: "Пандемията промени изцяло начина, по който функционира бизнесът – от каналите за продажби, през управлението, до изживяването на клиента. Поглед към промяната през три гледни точки: организацията, мениджмънта и продажбите.",
      en: "The pandemic has completely changed how business works – from sales channels and management to the customer experience. A look at change from three perspectives: organizations, management, and sales.",
    },
    body: {
      bg: `Дарвин твърди, че оцеляват тези индивиди, които се адаптират най-бързо към променящата се среда. Същото важи и за организациите.

Днешната ситуацията наподобява тази от преди десетина години и кризата, която избухна в САЩ и се трансформира от ипотечна във световна финансово-икономическа, но има едно много голямо различие – в днешната ситуация хората не могат да работят на обичайните си места и се налага да останат затворени вкъщи. Появата на корона вируса и пандемията, която причини, със сигурност ще променят света и ще оставят отпечатък в историята. Но тази пандемия води със себе си не само икономическа криза от световен мащаб. Ситуацията промени изцяло функционирането на бизнеса до момента и управлението като такова. Наложените мерки подтикнаха трансформирането на компаниите в редица направления:

намериха се нови канали за продукти и услуги; голяма част от компаниите преминаха към дистанционен режим на работа и разбраха, че това е възможно; от друга страна служителите, които работят от вкъщи доказаха, че могат да вършат работата си пълноценно, дори от домовете си; видеоконференциите станаха ежедневие и мениджърите успяха успешно да делегират и проследяват резултатите дори от дистанция.

Всичко това е доказателство, че въпреки нуждата от много бърза адаптация, голямата безработица, която се появява, и спадът в търсенето и предлагането, ситуацията предоставя и редица възможности.

В тази статия ще разгледаме промяната през три гледни точки: организацията, мениджмънта и продажбите.

## Промяната за организациите

Наред с тежката здравна и хуманитарна криза, ръководството на компаниите по целия свят е изправено пред огромни бизнес предизвикателства като: срив в потребителското търсене; значителни изменения в регулациите; прекъсване на веригата на доставки, породено от социалната дистанция; безработица; икономическа рецесия и повишена несигурност на пазара.

По тази причина, бизнесът има нужда от план за възстановяване и временното отлагане на съставянето му, няма да работи за дълго. Компаниите трябва да взема мерки още сега.

Ще бъде много важно за организацията да има ясна и конкретна цел, която да бъде припозната от всички в организацията. Анализът на ситуацията, в която се намира компанията, и средата, в която оперира, е от голямо значение за изграждането на план за действие. Понякога е необходимо да се направят само малки подобрения, които да окажат значителен ефект върху резултатите. Фактори, които ще повлияят на успеха, ще са: съсредоточаване на усилията на хората, върху това, което може да се направи сега, въпреки трудната и тежка ситуация; фокусът върху клиентите и техните нужди.

Компаниите имат нужда от бърза адаптация на стратегията в променената обстановка. От ключово значение ще бъде оценяването на текущите резултати и приоритизирането на дейностите спрямо най-важните двигатели за стойност на компанията. Привличането на правилните клиенти и удовлетворяването на техните нужди ще доведат до оптимизиране на ресурсите и справяне с трудностите.

## Промяната за мениджмънта

Компаниите се променят и стандартизираните до момента модели няма да работят толкова ефективно в новата ситуация. Свикнали сме управлението да се основава на изисквания и контрол, на строго определена йерархия и разделение между хората с власт и изпълнителите. Този модел се основава на много ясно разграничаване на дейностите на всеки един служител в компанията. Понякога това може да ограничава служителите, но от друга страна – стандартите създават ефективност и това беше много добър модел в свят, в който нещата бяха предвидими. Ефективността обаче не означава непременно устойчивост. Да си устойчив означава да се приспособяваш, а приспособимостта изисква свобода за хората да бъдат себе си.

Индивидуалността и персонализацията може да изглеждат хаотични, а ние сме склонни погрешно да смятаме, че хаотичността е лоша. Стандартизацията от своя страна изглежда ефективна и ние смятаме погрешно, че тя е най-успешният избор. Промяната от стандартизирано управление към управление чрез персонализация би било едно от нещата, с които да започнем адаптацията си.

Днес ще бъде много важно лидерите да са достатъчно смели да бъдат състрадателни. Да позволяват на всеки един да влияе по свой начин. Да слуша чрез действията. Лидерите трябва да са тези, които премахват бариерите. Да предоставят свобода на хората да създават невиждани досега обстоятелства за повишаване на собствения си капацитет и капацитета на организацията. Важно е те да бъдат достатъчно смели да оставят настрана показателите (KPI's), които вече не са уместни, дори ако това означава да изглеждат неуспешни в очите на хората, които продължават да следват тези показатели.

В разгара на криза като тази, организациите имат нужда от лидери, които могат да действат бързо, да се адаптират към промяната и да водят екипите без страх. От друга страна компаниите имат нужда и от хора, които се доверяват един на друг и дават всичко от себе си, за успеха ѝ. Фокусът на лидерите често е върху свършената работа, но никога не трябва да забравят за хората, които са я свършили.

## Как се отразява промяната на продажбите

Появилата се пандемия оказва голяма влияние и върху продажбите. Въпреки, че много от нещата, които важаха преди, ще са валидни и в бъдещето, промяната в основните канали за продажби е неоспорим факт. Много бързо преминахме от директна продажба лице в лице към онлайн магазини, видео разговори и продажби по телефона. И под „продажби" не говорим само и единствено за работата на хората на първа линия, които имат първия директен контакт с клиента. Разбира се, тяхната роля е важна, но от ключово значение за бизнеса е удовлетвореността на клиента след като е избрал нашия продукт или услуга. Във всяка организация клиентите поемат по уникален „път", който наричаме „пътуване на клиента". Това пътешествие включва: процеса на осъзнаване на клиентската нужда; избора да приеме нашата оферта и обслужването, което получава след това.

В този променлив свят обаче едно нещо е сигурно – положителното изживяване на клиентите е връзката между растящите продажби и конкурентоспособността.

Клиентското пътуване има множество допирни точки между клиента и организацията. Проучванията в областта твърдят, че най-важното в този процес е въздействието от взаимодействието помежду им. Предвид дистанцията, всички в процеса на обслужване на клиента трябва да имат по-голяма чувствителност и към случващото се, и към емоциите на клиентите. Данни от международно проучване сред 5500 потребители показват, че повече от половината съобщават, че се чувстват раздразнени, когато не са говорили с жив човек по телефона, постоянно ги прехвърлят от една линия на друга или са на изчакване твърде дълго. Повечето от тях споделят, че предпочитат личния контакт, но днешната ситуация е такава, че дистанционната комуникация е водеща. Това, което можем да направим, е да подобрим уменията на служители си. Емоционалната интелигентност ще бъде много важна при цялостната комуникация с клиента, особено, ако той има някакви колебания, притеснения или по някакъв начин е разочарован. Ключови умения от страна на служителите при обслужването ще са и задаването на въпроси и активното слуша с разбиране към нуждите на клиента.

Тъй като няма два еднакви клиента, то и обслужването на клиентите трябва да бъде индивидуално. Това е по-трудно да се случи от разстояние, но въпреки това, организациите трябва да насочат усилията си в посока на индивидуалното отношение. Този индивидуален подход трябва да бъде приложен към всички канали на дистанционна комуникация – видео разговори, телефонни разговори или имейли. Не трябва да се пренебрегва обаче факта, че дистанционния начин на изграждане на лоялност е труден и неподходящ за изграждане на дългосрочни лоялни клиенти.

## Заключение

Ако се обърнем назад във времето, ще видим, че промяната е неспирен процес. Имало я е в миналото, има я в момента, ще я има и в бъдеще. Тя се случва по различен начин, носи със себе си различни предизвикателства и изисква различни методи за справяне. От нас зависи да я приемем и да се опитаме да се адаптираме. Тази криза все пак ще има и своя край. Проучванията показват, че по-голямата част от организациите успяват да се справят с предизвикателствата и се отнасят с уважение към своите служители, клиенти, доставчици и партньори. Въпреки това, те трябва да продължат да наблюдават ситуацията и да гарантират, че ще проявяват високи нива на интегритет не само днес, но и в бъдеще.

Сега е моментът да се вгледаме на дълбоко и да се опитаме да поддържаме високи стандарти, да разпознаем потенциалните нови заплахи, които тази ситуация поражда, и да положим основите за нов растеж на бизнеса.`,
      en: `Darwin argued that the individuals who survive are those who adapt most quickly to a changing environment. The same applies to organizations.

Today's situation resembles the crisis from about a decade ago, which began in the United States as a mortgage crisis and turned into a global financial and economic one. But there is one major difference: today, people cannot work from their usual workplaces and have had to stay at home. The emergence of the coronavirus and the pandemic it caused will certainly change the world and leave a mark on history.

But this pandemic has brought more than a global economic crisis. It has completely changed how businesses function and how management operates. The measures introduced have pushed companies to transform in several directions: new channels for products and services have emerged; many companies moved to remote work and realized it was possible; employees working from home proved that they could do their jobs fully, even from their own homes; video conferences became part of everyday life, and managers learned to delegate and track results successfully from a distance.

All of this proves that despite the need for rapid adaptation, the rising unemployment, and the decline in supply and demand, the situation also creates a number of opportunities.

In this article, we will look at change from three perspectives: organizations, management, and sales.

## Change for organizations

Alongside the severe health and humanitarian crisis, company leaders around the world are facing major business challenges, including: a collapse in consumer demand; significant regulatory changes; disruption of supply chains caused by social distancing; unemployment; economic recession; and increased market uncertainty.

For this reason, businesses need a recovery plan, and postponing it temporarily will not work for long. Companies need to take action now.

It will be very important for organizations to have a clear and specific goal that is recognized and shared by everyone in the company. Analyzing the situation the company is in, as well as the environment in which it operates, is essential for building an action plan. Sometimes, only small improvements are needed to create a significant effect on results. Factors that will influence success include: focusing people's efforts on what can be done now, despite the difficult and challenging situation; focusing on customers and their needs.

Companies need to adapt their strategy quickly to the changed environment. Assessing current results and prioritizing activities according to the most important drivers of company value will be key. Attracting the right customers and meeting their needs will lead to better use of resources and help companies deal with difficulties.

## Change for management

Companies are changing, and the models that have been standardized so far will not work as effectively in the new situation. We are used to management being based on requirements and control, on a clearly defined hierarchy, and on a division between those with authority and those who execute. This model is built on a very clear separation of each employee's activities within the company. At times, this can limit employees, but on the other hand, standards create efficiency – and this was a very good model in a world where things were predictable.

Efficiency, however, does not necessarily mean resilience. To be resilient means to adapt, and adaptability requires giving people the freedom to be themselves.

Individuality and personalization may look chaotic, and we tend to believe, mistakenly, that chaos is bad. Standardization, on the other hand, looks efficient, and we also tend to believe, mistakenly, that it is the most successful choice. Moving from standardized management toward management through personalization may be one of the first steps in adapting.

Today, it will be very important for leaders to be brave enough to be compassionate. To allow each person to have an impact in their own way. To listen through action. Leaders need to be the ones who remove barriers. They need to give people the freedom to create new conditions for expanding both their own capacity and the capacity of the organization. It is important for them to be brave enough to set aside KPIs that are no longer relevant, even if that means appearing unsuccessful in the eyes of those who still continue to follow those indicators.

In the midst of a crisis like this, organizations need leaders who can act quickly, adapt to change, and lead their teams without fear. At the same time, companies also need people who trust one another and give their best for the organization's success. Leaders often focus on the work that has been done, but they should never forget the people who did it.

## How change affects sales

The pandemic has also had a major impact on sales. Although many of the things that mattered before will continue to matter in the future, the change in the main sales channels is undeniable. Very quickly, we moved from direct face-to-face sales to online stores, video calls, and phone sales.

And when we talk about "sales," we are not referring only to the work of frontline employees who have the first direct contact with the customer. Their role is, of course, important. But what is key for the business is customer satisfaction after someone has chosen our product or service. In every organization, customers follow a unique path – what we call the customer journey. This journey includes: the process of recognizing the customer need; the decision to accept our offer; and the service the customer receives afterwards.

In this changing world, however, one thing is certain: a positive customer experience is the link between growing sales and competitiveness.

The customer journey has many touchpoints between the customer and the organization. Research in the field suggests that what matters most in this process is the impact of the interaction between them. Given the distance, everyone involved in customer service needs to be more sensitive both to what is happening and to customers' emotions.

Data from an international study among 5,500 consumers shows that more than half report feeling irritated when they have not spoken to a real person on the phone, have been transferred from one line to another, or have been left on hold for too long. Most of them say they prefer personal contact, but the current situation means that remote communication is dominant.

What we can do is improve employees' skills. Emotional intelligence will be very important in overall communication with customers, especially when they have doubts, concerns, or feel disappointed in some way. Key customer service skills will also include asking questions and active listening with real understanding of the customer's needs.

Because no two customers are the same, customer service also needs to be individual. This is harder to achieve from a distance, but organizations still need to direct their efforts toward a more personalized approach. This individual approach should be applied across all remote communication channels – video calls, phone calls, and emails. At the same time, we should not overlook the fact that building loyalty remotely is difficult and not always suitable for creating long-term loyal customers.

## In closing

If we look back in time, we will see that change is a continuous process. It existed in the past, it exists now, and it will continue to exist in the future. It happens in different ways, brings different challenges, and requires different methods of response. It is up to us to accept it and try to adapt. This crisis, after all, will also come to an end.

Research shows that most organizations are managing to cope with the challenges and are treating their employees, customers, suppliers, and partners with respect. Nevertheless, they need to continue monitoring the situation and ensure that they maintain high levels of integrity not only today, but also in the future.

Now is the time to look deeper, to try to maintain high standards, to recognize the potential new threats this situation creates, and to lay the foundations for new business growth.`,
    },
  },
  {
    slug: "shtastie-na-rabotnoto-myasto",
    date: "2020-01-06",
    displayDate: { bg: "Януари 2020", en: "January 2020" },
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
    title: {
      bg: "Обикни работното си място и ще имаш щастлив живот – 7 фактора, които влияят върху щастието на работното място",
      en: "Love your workplace and you'll live a happier life – 7 factors that shape happiness at work",
    },
    excerpt: {
      bg: "Все по-често говорим за щастието на работното място. Изследванията сочат едно и също – щастливите хора постигат по-добри резултати. Седем фактора, които влияят на това дали обичаме мястото, на което работим.",
      en: "Happiness at work is increasingly part of the conversation, and research is clear: happier people perform better. Seven factors that shape how we feel about the place where we spend so much of our time.",
    },
    body: {
      bg: `> „Хората цяла седмица чакат да стане петък, цяла година – да стане лято, и цял живот – да са щастливи." – Умберто Еко

Защо да отлагаме, като може да бъдем щастливи още сега?

Все по-често се говори за щастието и влиянието му върху трудовия живот. Направени са много изследвания в тази област и всички те са категорични – щастливите хора постигат много по-високи резултати от нещастните. А в бизнеса всеки се стреми да постига възможно най-високи резултати всеки час, ден, седмица, месец, година. В тази статия ще ви представя седем фактора, които влияят върху щастието на работното място.

## 1. Организационен климат

Организационният климат е в основата на създаването на щастливо работно място за всеки служител. Той е неписаното правило, което всеки следва, просто защото „така го правят всички". Затова е много важно да бъдеш на място с такава организационна култура, която подпомага изграждането на щастлив живот на всеки служител в нея. Разбира се, хората са различни и няма едно решение каква да бъде тази култура. Важното обаче е всеки служител да се чувства добре на работното си място, за да бъде готов да даде най-доброто от себе си в изпълнението на задълженията си.

## 2. Възможност за лично въздействие

Повечето хора предпочитат да работят на място, където чувстват, че работата им има смисъл и оказва влияние. Бизнесът е пълен с различни компании – и като основна дейност, и като големина. Някои хора например предпочитат да работят в големи корпорации, където има възможност за йерархично израстване или географска смяна на работата. Други от своя страна предпочитат да работят в малки или стартиращи компании, където всеки оказва много пряко въздействие върху резултата на компанията. Каквото и да е твоето предпочитание, просто намери своето място – там, където имаш възможност да се отличиш и да покажеш своите възможности и силни страни. По този начин ще се чувстваш много по-щастлив и мотивиран да дадеш най-доброто от себе си в работата си.

## 3. Свобода на действието

Последното нещо, което искаш да чуеш на работното си място, е някой през рамо постоянно да ти казва „промени това" или „направи това по друг начин". Свободата е сред основните фактори за щастието на работното място – не само защото си възрастен и не искаш да се чувстваш отново като в училище, но и защото всеки иска да почувства, че някой има доверие към него, към изпълняваните от него задачи и че компанията вярва в неговите компетенции.

Даването на свобода да вършиш задачите, за които знаеш, че си компетентен и с които би могъл да се справиш, без да бъдеш подлаган на съмнение на всяка стъпка от изпълнението им, ти дава увереност в способностите ти и те кара да се чувстваш по-добре. Свободата е ключ към щастието във всеки аспект от живота и работата не прави изключение.

## 4. Приемане на работата като лично призвание

Трудно е да бъдеш щастлив и да прикриваш недоволството си от работата, ако вярваш, че тя противоречи на твоето призвание в живота. Да последваш интуицията да правиш нещата, които чувстваш със сърцето си, че са правилните, непременно ще те направи по-щастлив, вместо да приемаш, че позицията ти е „просто работа". Ако повярваш, че работата ти е твоето призвание, че си предназначен да правиш точно това, не само ще се чувстваш щастлив на работното място, но и ще изпиташ дълбоко чувство на смисъл – два много важни фактора, които ще те направят по-щастлив.

Това, че виждаш работата си като призвание, не означава непременно, че трябва да станеш астронавт или професионален баскетболист. Ако виждаш положителното въздействие, което създаваш чрез нея, и начина, по който тя помага на света около теб, тогава всеки вид работа може да се разглежда като призвание и нещо, от което да получиш усещане за смисъл и щастие.

## 5. Добри взаимоотношения

Всеки ден отиваш на работа и общуваш с хората. Тези връзки са неизбежни и затова съвсем естествено е, че качеството им оказва значително влияние върху щастието на работното място.

Взаимоотношенията, които имаш с мениджъра си, със сигурност са едни от най-важните взаимоотношения, които изграждаш в работата и които влияят на щастието ти на работното място. Твоят мениджър има очаквания към теб и наблюдения за резултатите ти и може да бъде един от най-големите ти поддръжници, особено когато става въпрос за кариерно развитие и промотиране.

От своя страна, предвид големия брой часове, които прекарваш с колегите си, има смисъл ежедневните взаимодействия с тях да оказват влияние върху цялостната удовлетвореност от работата ти. Независимо дали обичаш разговорите с колеги за това как са изкарали уикенда или да си поговорите за техния любим спортен отбор, тези взаимоотношения могат да ти помогнат да се почувстваш като част от екип и по-свързан в работата си.

Проучване, направено от Virgin Pulse, гласи, че близо 40% от анкетираните определят своите колеги като основната причина за любовта си към компанията, в която работят. В допълнение към това, 66% твърдят, че тези взаимоотношения оказват положително влияние върху техния фокус на работа и производителността им на работното място, а 55% казват, че тези отношения влияят положително върху нивата на стрес от работата. Ако се радваш на колегите си, особено ако работиш с приятели, ще си щастлив да ходиш на работа всеки ден и времето, което прекарваш там, ще бъде радостно и възнаграждаващо. Това от своя страна допринася за по-добри резултати в работата.

## 6. Обучение и развитие

Колкото и странно да ти звучи, обучението и развитието оказват голямо влияние върху щастието на работното място. Не само че инвестицията на компанията в теб те прави по-щастлив и оценен на работа, но развитието е ключът към дългосрочния ти успех. Независимо дали ти предстои смяна на работата или имаш възможност за смяна на позицията във вашата компания, степента, в която можеш да придобиеш нови умения и опит, ще повлияе значително върху удовлетвореността ти от работата и личния ти успех. А колкото по-успешен се чувстваш, толкова по-щастлив ще бъдеш във всички аспекти от живота си.

## 7. Баланс „работа – личен живот"

Без съмнение, това, което правиш извън работа, има голямо влияние върху това дали си щастлив или не. Ако личният или семейният ти живот е труден, това ще окаже влияние на целия ти живот, включително и на работата. Няма граница между работата и останалия живот. Ако мислиш, че когато отидеш на работа, „битката" от тази сутрин просто ще изчезне, то се самозаблуждаваш.

Често носиш отрицателна емоционална енергия от едно място на друго – от работа вкъщи, от вкъщи на работа и навсякъде другаде, където отидеш. Но това не означава, че си обречен! Това просто означава, че не можеш да пренебрегнеш нито една част от живота си, мислейки, че едната ще компенсира недостатъците в другата. Работи върху себе си, върху собствения си мир и щастие в „извънработното" си време и ще намериш по-голямо щастие и на работното място.

## Заключение

Това са само част от факторите, които оказват влияние на щастието на работното място. Когато става въпрос за моето щастие, винаги си припомням думите на Аристотел:

> „Щастието зависи от нас самите.“

Може би най-лесният начин да преоткрием това блаженство е да осъзнаем, че то зависи изцяло от нас.`,
      en: `> "People wait all week for Friday, all year for summer, and all their lives for happiness." – Umberto Eco

Why keep postponing it when we can choose to be happier now?

Happiness and its effect on working life have become increasingly common topics of conversation. A great deal of research has explored this connection, and the conclusion is consistent: happier people tend to perform better than unhappy ones. In business, where results are always in focus, that matters. In this article, we look at seven factors that influence happiness at work.

## 1. Organizational climate

Organizational climate is at the core of creating a happy workplace. It is the unwritten rule people follow simply because "that's how things are done here." That is why it matters to work in an environment whose culture supports employees' wellbeing and sense of fulfillment. Of course, people are different, and there is no single model for what that culture should be. What matters is that employees feel well in their workplace so they can contribute fully and feel engaged in what they do.

## 2. The opportunity to make an impact

Most people want to work in a place where they feel their work matters and has a real effect. The business world is made up of all kinds of companies, varying in size, structure, and purpose. Some people prefer large corporations, where there may be more room for career progression or geographic mobility. Others are drawn to smaller or start-up environments, where each individual has a more direct effect on the company's results. Whatever your preference, the important thing is to find a place where you have room to stand out and use your strengths. That is often what leads to greater motivation and a stronger sense of satisfaction at work.

## 3. Freedom to act

One of the last things anyone wants at work is someone constantly looking over their shoulder saying, "Change this," or "Do it differently." Freedom is one of the key ingredients of happiness at work – not only because no one wants to feel like they are back in school, but also because people want to feel trusted. They want to know that others believe in their abilities, in the tasks they are handling, and in their competence to do the job well.

Being given the freedom to manage tasks you are qualified for, without having every step questioned, builds confidence and makes work feel more satisfying. Freedom matters in every area of life, and work is no exception.

## 4. Seeing work as a calling

It is difficult to feel happy – or to hide your dissatisfaction – if you believe your work goes against what you are meant to do in life. Following your intuition and doing what genuinely feels right for you can bring far more satisfaction than seeing your role as "just a job." If you come to see your work as a calling, as something you are truly meant to do, you are likely to experience not only more happiness at work but also a deeper sense of meaning – two important parts of a fulfilling life.

Seeing work as a calling does not necessarily mean becoming an astronaut or a professional basketball player. If you can recognize the positive impact your work creates and the way it contributes to the world around you, then almost any kind of work can be experienced as meaningful and connected to a sense of happiness.

## 5. Good relationships

Every day, you go to work and interact with other people. These relationships are inevitable, so it is only natural that their quality has a strong influence on happiness in the workplace.

The relationship you have with your manager is certainly one of the most important ones at work and can have a major effect on how happy you feel there. Your manager has expectations of you, sees your performance up close, and can become one of your strongest supporters, especially when it comes to career development and advancement.

At the same time, given how many hours you spend with your colleagues, it makes sense that your daily interactions with them also shape your overall satisfaction at work. Whether you enjoy talking with coworkers about their weekend or chatting about a favorite sports team, these relationships can help you feel part of a team and more connected to what you do.

A study by Virgin Pulse found that nearly 40% of respondents see their colleagues as the main reason they love the company they work for. In addition, 66% say these relationships have a positive effect on their focus and productivity at work, while 55% report that they help reduce workplace stress. If you genuinely enjoy the people you work with – especially if some of them become friends – going to work each day becomes a more positive and rewarding experience. And that, in turn, contributes to better results.

## 6. Learning and development

As surprising as it may sound, learning and development have a strong influence on happiness at work. Not only does a company's investment in your growth make you feel more valued, but development is also an important part of long-term success. Whether you are preparing for a job change or have the opportunity to move into a different role within your current company, your ability to gain new skills and experience will strongly affect both your job satisfaction and your personal sense of progress. And the more successful you feel, the more that sense of happiness tends to spill over into other parts of life as well.

## 7. Work–life balance

Without a doubt, what happens outside of work has a major influence on whether you feel happy or not. If your personal or family life is difficult, it will affect your whole life, including your work. There is no clear line between work and the rest of life. If you think that once you arrive at the office, the "battle" from that morning will simply disappear, you are probably fooling yourself.

We often carry negative emotional energy from one place to another – from work to home, from home to work, and everywhere else in between. But that does not mean you are doomed. It simply means that you cannot neglect one part of your life and expect another part to make up for it. When you work on yourself, your inner peace, and your happiness outside of work, you are far more likely to experience greater happiness at work as well.

## In closing

These are only some of the factors that shape happiness in the workplace. When it comes to my own happiness, I often return to Aristotle's words:

> "Happiness depends upon ourselves."

Perhaps the easiest way to reconnect with that truth is to remember that happiness depends, to a great extent, on us.`,
    },
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

Данните трябва да послужат като мотиватор за компаниите да продължат да влагат усилията си за увеличаване на ангажираността и по този начин – да увеличават и бизнес резултатите. Според Gallup:

> „Организациите, които имат най-високата ангажираност от страна на своите служители, постигат ръст на печалбата четири пъти по-голям от този на своите конкуренти. Топ компаниите в класацията реализират значително по-висока ангажираност на клиентите, по-висока производителност, по-висока степен на задържане на служителите, по-малко инциденти и 21% по-висока доходност. Ангажираните служители също така имат и по-добри здравословни показатели.“

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
