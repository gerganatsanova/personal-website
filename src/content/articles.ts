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
      bg: "Чакаме да се почувстваме готови, преди да направим крачка. Истината е, че увереността не е предпоставка – тя е резултат. Кратко есе за това как се формира вътрешната сигурност и защо повечето хора я търсят на грешното място.",
      en: "We wait to feel ready before taking a step. The truth is, confidence isn't a prerequisite – it's a result. A short essay on how inner certainty forms and why most people look for it in the wrong place.",
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
      bg: "Преди да започнем работа, питам едни и същи пет неща. Не са случайни и не са любопитство – те задават рамката на всичко, което следва.",
      en: "Before we start working, I ask the same five things. They're not random and they're not curiosity – they set the frame for everything that follows.",
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
      bg: "Всички говорим за това, малко от нас го правим. Какво всъщност значи да бъдеш честен със себе си – и какво не значи.",
      en: "We all talk about it; few of us actually do it. What it really means to be honest with yourself – and what it doesn't.",
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
      bg: "Коучинг или консултиране – какво ти трябва в момента",
      en: "Coaching or consulting – which one do you need right now",
    },
    excerpt: {
      bg: "Понякога ти трябват въпроси. Друг път – отговори. Как да разбереш кое от двете е за теб сега.",
      en: "Sometimes you need questions. Other times – answers. How to tell which of the two is for you right now.",
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
      bg: "„Тихото напускане\" не е мързел – то е сигнал",
      en: "\"Quiet quitting\" isn't laziness – it's a signal",
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
      bg: "Повечето обратни връзки са за този, който ги дава – не за този, който ги получава. Как да обърнем посоката.",
      en: "Most feedback is for the person giving it – not the person receiving it. How to flip the direction.",
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
      bg: "Не защото хората са мързеливи. А защото целта е поставена на грешното ниво – твърде далеч или твърде неясна.",
      en: "Not because people are lazy. But because the goal is set at the wrong level – too far, or too vague.",
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
      bg: "Често я бъркат с това да си приятен. Всъщност е умение да виждаш това, което другите пропускат – включително в себе си.",
      en: "People often confuse it with being pleasant. It's actually the skill of seeing what others miss – including in yourself.",
    },
    body: { bg: "", en: "" },
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

> „Щастието зависи от нас самите."

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
