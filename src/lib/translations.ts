// NOTE: the email address is intentionally NOT stored here as a plain string —
// it is character-code-encoded inside `obfuscated-email.tsx` so it never
// appears in the SSR HTML or the static JS bundle (anti-scraper).
export const contact = {
  linkedin: "https://www.linkedin.com/in/gerganatsanova/",
  x: "https://x.com/GerganaTsanova",
  instagram: "https://www.instagram.com/tsanova.gergana/",
};

export const t = {
  nav: {
    home: { bg: "Начало", en: "Home" },
    about: { bg: "За мен", en: "About" },
    workWithMe: { bg: "Работи с мен", en: "Work with me" },
    articles: { bg: "Статии", en: "Articles" },
    resources: { bg: "Ресурси", en: "Resources" },
    contact: { bg: "Контакт", en: "Contact" },
    openMenu: { bg: "Отвори меню", en: "Open menu" },
    closeMenu: { bg: "Затвори меню", en: "Close menu" },
    navigationLabel: { bg: "Навигация", en: "Navigation" },
    connectLabel: { bg: "Свържи се", en: "Connect" },
    emailCopied: { bg: "Имейлът е копиран", en: "Email copied" },
  },
  footer: {
    brandFirst: { bg: "Гергана", en: "Gergana" },
    brandLast: { bg: "Цанова", en: "Tsanova" },
    tagline: {
      bg: "Коучинг и менторство · Обучения и фасилитация",
      en: "Coaching and mentoring · Training and facilitation",
    },
    rights: {
      bg: "Всички права запазени.",
      en: "All rights reserved.",
    },
    madeWithCare: {
      bg: "Направено с внимание.",
      en: "Made with care.",
    },
  },
  hero: {
    kicker: {
      bg: "Коуч · Ментор · Обучител · Фасилитатор",
      en: "Coach · Mentor · Trainer · Facilitator",
    },
    headlineLine1: {
      bg: "Растеж в живота.",
      en: "Growth in life.",
    },
    headlineAccent: {
      bg: "Растеж",
      en: "Growth",
    },
    headlineLine2Rest: {
      bg: " в работата.",
      en: " at work.",
    },
    paragraph: {
      bg: "Помагам на хора и екипи да намират повече яснота, увереност и посока чрез коучинг, менторство, обучения и фасилитирани разговори.",
      en: "I help people and teams find more clarity, confidence, and direction through coaching, mentoring, training, and facilitated conversations.",
    },
    ctaPrimary: {
      bg: "Свържи се с мен",
      en: "Contact me",
    },
    ctaSecondary: {
      bg: "Запознай се с мен",
      en: "Get to know me",
    },
    ctaTertiary: {
      bg: "Как работя",
      en: "How I work",
    },
    watermark: {
      bg: "Израстване.",
      en: "Becoming.",
    },
  },
  // Homepage recognition section — short situations before services.
  recognition: {
    titleLead: {
      bg: "Може би",
      en: "You might",
    },
    titleAccent: {
      bg: "си тук",
      en: "be here",
    },
    titleRest: {
      bg: "ако...",
      en: "if...",
    },
    subtitle: {
      bg: "Понякога първата стъпка е просто да разпознаеш ситуацията, в която се намираш.",
      en: "Sometimes the first step is simply recognizing the situation you are in.",
    },
    items: {
      bg: [
        "Искаш да развиеш лидерските си умения и да водиш хората с повече увереност, яснота и последователност.",
        "Поемаш нова роля или повече отговорност и искаш да изградиш собствен начин да водиш, общуваш и вземаш решения.",
        "Имаш цел, идея или посока, но ти е нужна структура, за да я превърнеш в конкретни и реалистични действия.",
        "Искаш да общуваш по-ясно в работата, да даваш обратна връзка, да поставяш граници и да водиш трудните разговори по конструктивен начин.",
        "Екипът ти има нужда да развие практически умения в комуникацията, лидерството, сътрудничеството или работата с хора.",
        "Предстои важна среща, дискусия или екипен процес и имате нужда от неутрална фасилитация, ясна структура и конкретни следващи стъпки.",
      ],
      en: [
        "You want to develop your leadership skills and lead people with greater confidence, clarity, and consistency.",
        "You are stepping into a new role or taking on greater responsibility and want to develop your own way of leading, communicating, and making decisions.",
        "You have a goal, an idea, or a direction, but need structure to turn it into concrete and realistic action.",
        "You want to communicate more clearly at work, give feedback, set boundaries, and approach difficult conversations constructively.",
        "Your team needs to develop practical skills in communication, leadership, collaboration, or working with people.",
        "An important meeting, discussion, or team process is coming up and you need neutral facilitation, clear structure, and concrete next steps.",
      ],
    },
  },
  workWithMe: {
    kicker: {
      bg: "Работи с мен",
      en: "Work with me",
    },
    practicalHeadline: {
      bg: "Развитие, което започва от",
      en: "Development that starts with",
    },
    practicalHeadlineAccent: {
      bg: "реалната ситуация.",
      en: "the real situation.",
    },
    practicalIntro: {
      bg: "Работя с хора и екипи, които искат да развият себе си, професионалната си роля или начина, по който общуват и работят с другите. Темата може да бъде свързана с живота като цяло или с конкретна ситуация от работата.",
      en: "I work with people and teams who want to develop themselves, their professional role, or the way they communicate and work with others. The topic may be connected to life as a whole or to a specific situation at work.",
    },
    practicalNote: {
      bg: "Личното и професионалното често се срещат в един и същи разговор. Затова започваме от конкретната нужда, без да поставяме човека или ситуацията в предварително определена рамка.",
      en: "Personal and professional themes often meet in the same conversation. That is why we begin with the specific need, without placing the person or situation into a predetermined framework.",
    },
    introCta: {
      bg: "Запази начален разговор",
      en: "Book an introductory conversation",
    },
    directionsKicker: {
      bg: "Посоки на работа",
      en: "Directions for our work",
    },
    directionsTitleLead: {
      bg: "Темата може да бъде свързана с живота",
      en: "The topic may be connected to life",
    },
    directionsTitleAccent: {
      bg: "или с работата.",
      en: "or work.",
    },
    directionsIntro: {
      bg: "Това не са две отделни услуги, а два контекста, от които може да започне разговорът. Някои теми естествено присъстват и в двата.",
      en: "These are not two separate services, but two contexts from which the conversation may begin. Some themes naturally belong to both.",
    },
    directionsMore: {
      bg: "Това са част от темите, с които можем да работим. Разговорът винаги започва от конкретната ситуация.",
      en: "These are some of the themes we can work with. The conversation always begins with the specific situation.",
    },
    // Direction 1 — Life
    lifeTitle: {
      bg: "Растеж в живота.",
      en: "Growth in life.",
    },
    lifePracticalDescription: {
      bg: "Когато искаш повече яснота, увереност или последователност в начина, по който живееш, общуваш и правиш избори.",
      en: "When you want greater clarity, confidence, or consistency in the way you live, communicate, and make choices.",
    },
    lifePracticalTopics: {
      bg: [
        "По-ясна комуникация и по-здрави взаимоотношения",
        "Изграждане на навици и повече последователност",
        "Увереност и поставяне на лични граници",
        "Яснота при избор или важна следваща стъпка",
        "Преминаване през период на промяна или колебание",
      ],
      en: [
        "Clearer communication and healthier relationships",
        "Building habits and greater consistency",
        "Confidence and setting personal boundaries",
        "Clarity around a choice or important next step",
        "Moving through a period of change or uncertainty",
      ],
    },
    // Direction 2 — Work
    workTitle: {
      bg: "Растеж в работата.",
      en: "Growth at work.",
    },
    workPracticalDescription: {
      bg: "Когато искаш да развиеш професионалната си роля, лидерското си присъствие или начина, по който работиш с хора.",
      en: "When you want to develop your professional role, leadership presence, or the way you work with people.",
    },
    workPracticalTopics: {
      bg: [
        "Развитие на лидерски умения и собствен стил на водене",
        "Повече увереност, присъствие и влияние",
        "Мотивиране и ангажиране на хора",
        "Подготовка за труден разговор или обратна връзка",
        "Преминаване към нова роля или повече отговорност",
      ],
      en: [
        "Developing leadership skills and your own way of leading",
        "Greater confidence, presence, and influence",
        "Motivating and engaging people",
        "Preparing for a difficult conversation or feedback",
        "Moving into a new role or greater responsibility",
      ],
    },
    // Formats
    formatsKicker: {
      bg: "Начини за работа",
      en: "Ways of working",
    },
    formatsTitleLead: {
      bg: "Подход, съобразен с",
      en: "An approach shaped around",
    },
    formatsTitleAccent: {
      bg: "конкретната нужда.",
      en: "the specific need.",
    },
    formatsIntro: {
      bg: "Не е необходимо предварително да знаеш кой формат или подход е най-подходящ. Началният разговор ни помага да го определим заедно.",
      en: "You do not need to know in advance which format or approach is the best fit. The introductory conversation helps us identify it together.",
    },
    primaryFormatDescription: {
      bg: "Разговори с фокус върху конкретна тема, промяна или умение, което искаш да развиеш. Работата може да включва въпроси, изследване на различни гледни точки, упражнения и практически насоки. Целта е да достигнеш до повече яснота и до следващи стъпки, които можеш да приложиш в своя контекст.",
      en: "Conversations focused on a specific topic, change, or skill you want to develop. The work may include questions, exploring different perspectives, exercises, and practical guidance. The aim is to reach greater clarity and next steps that you can apply in your own context.",
    },
    primaryFormatNote: {
      bg: "Според темата работата може да бъде по-коучингова или да включва повече менторство и споделяне на опит. Подходът се определя в процеса.",
      en: "Depending on the topic, the work may be more coaching-led or include more mentoring and shared experience. The approach is shaped throughout the process.",
    },
    additionalFormatDescription: {
      bg: "Работя и с групи и екипи, когато има нужда от развитие на конкретни умения, по-ясна комуникация или структуриран разговор по важна тема. Обученията и фасилитираните процеси се създават според конкретната аудитория, целта и реалния работен контекст.",
      en: "I also work with groups and teams when there is a need to develop specific skills, improve communication, or create a structured conversation around an important topic. Training and facilitated processes are shaped around the specific audience, the purpose, and the real working context.",
    },
    additionalFormatNote: {
      bg: "Според целта форматът може да бъде обучение, фасилитирана среща или по-дълъг процес с конкретни следващи стъпки.",
      en: "Depending on the purpose, the format may be a training session, a facilitated meeting, or a longer process with clear next steps.",
    },
    service1Numeral: { bg: "I.", en: "I." },
    service1Title: {
      bg: "Коучинг и\nменторство",
      en: "Coaching and\nmentoring",
    },
    service2Numeral: { bg: "II.", en: "II." },
    service2Title: {
      bg: "Обучения и\nфасилитация",
      en: "Training and\nfacilitation",
    },
    service3Numeral: { bg: "III.", en: "III." },
    service3Title: {
      bg: "Дизайн на обучения и материали",
      en: "Learning design and materials",
    },
    // Process
    processKicker: {
      bg: "Как започваме",
      en: "How we begin",
    },
    processTitleLead: {
      bg: "Ясна рамка с място за",
      en: "A clear framework with room for",
    },
    processTitleAccent: {
      bg: "индивидуален подход.",
      en: "an individual approach.",
    },
    processIntro: {
      bg: "Всяка работа протича различно според хората, темата и контекста. Все пак началото следва проста рамка, която създава яснота и спокойствие.",
      en: "Each engagement develops differently depending on the people, topic, and context. The beginning still follows a simple framework that creates clarity and ease.",
    },
    processSteps: {
      bg: [
        {
          title: "Начален разговор",
          text: "Запознаваме се с темата, ситуацията и това, което искаш да промениш или развиеш.",
        },
        {
          title: "Подходяща посока",
          text: "Уточняваме фокуса и преценяваме какъв формат и подход биха били най-полезни.",
        },
        {
          title: "Съвместна работа",
          text: "Процесът се адаптира спрямо нуждите, развитието на темата и конкретния контекст.",
        },
      ],
      en: [
        {
          title: "Introductory conversation",
          text: "We explore the topic, the situation, and what you want to change or develop.",
        },
        {
          title: "A suitable direction",
          text: "We clarify the focus and consider which format and approach would be most useful.",
        },
        {
          title: "Working together",
          text: "The process adapts to the needs, the way the topic develops, and the specific context.",
        },
      ],
    },
    // Questions
    questionsKicker: {
      bg: "Практическа информация",
      en: "Practical information",
    },
    questionsTitle: {
      bg: "Имаш въпрос преди да се свържеш?",
      en: "Have a question before getting in touch?",
    },
    questionsText: {
      bg: "В страницата за контакт ще намериш информация за началния разговор, формата на срещите и други често задавани въпроси.",
      en: "The contact page includes information about the introductory conversation, meeting formats, and other frequently asked questions.",
    },
    questionsLink: {
      bg: "Виж въпросите и отговорите",
      en: "View questions and answers",
    },
    // Final CTA
    ctaKicker: {
      bg: "Следваща стъпка",
      en: "Next step",
    },
    ctaTitle: {
      bg: "Да започнем с",
      en: "Let's start with a",
    },
    ctaTitleAccent: {
      bg: "разговор.",
      en: "conversation.",
    },
    ctaParagraph: {
      bg: "Ако разпознаваш себе си в нещо от написаното тук, пиши ми. Първата стъпка е кратък разговор, в който да разберем какво искаш да промениш и дали мога да бъда полезна.",
      en: "If you see yourself in anything written here, reach out. The first step is a short conversation to understand what you want to change and whether I can be helpful.",
    },
    ctaPrimary: {
      bg: "Свържи се с мен",
      en: "Get in touch",
    },
  },
  // About page — personal story, philosophy, experience, credentials.
  about: {
    // 1. Intro / Hero
    kicker: { bg: "За мен", en: "About" },
    introHeadlineLead: {
      bg: "Помагам на хора и екипи да продължат напред",
      en: "I help people and teams move forward",
    },
    introHeadlineAccent: {
      bg: "с повече увереност.",
      en: "with greater confidence.",
    },
    introParagraphs: {
      bg: [
        "Казвам се Гергана Цанова, но повечето хора ме познават като Гери. Работя като обучител, фасилитатор и ментор с хора и организации, които искат да разберат по-добре какво ги спира, да общуват по-ефективно и да създадат смислена промяна в начина, по който мислят, общуват и работят заедно.",
        "Работата ми в различни роли ми даде по-широк поглед върху това как се случва развитието на практика. Видях, че напредъкът рядко идва от един разговор, едно обучение или една добра идея. Той се случва, когато хората имат пространство да погледнат честно към ситуацията, да разберат какво е важно и да намерят начин да го приложат в ежедневието си.",
        "Тази гледна точка определя и начина, по който работя. Фокусирам се върху онова, което е смислено, честно и полезно за конкретния човек или екип.",
      ],
      en: [
        "My name is Gergana Tsanova, though most people know me as Geri. I work as a trainer, facilitator, and mentor with people and organizations who want to understand what is holding them back, communicate more effectively, and create meaningful change in the way they think, communicate, and work together.",
        "Working across different roles has given me a broader view of how development happens in practice. I have seen that progress rarely comes from one conversation, one training session, or one good idea. It happens when people have the space to look honestly at their situation, understand what matters, and find a way to apply it in everyday life.",
        "This perspective shapes the way I work. I focus on what is meaningful, honest, and useful for the person or team in front of me.",
      ],
    },
    portraitAlt: {
      bg: "Портрет на Гергана Цанова",
      en: "Portrait of Gergana Tsanova",
    },
    // 2. Story
    storyKicker: { bg: "Моят път", en: "My path" },
    storyTitleLead: {
      bg: "Последователен избор в посока",
      en: "A consistent choice in the direction of",
    },
    storyTitleAccent: { bg: "развитие.", en: "growth." },
    storyParagraphs: {
      bg: [
        "Професионалният ми път започна с бакалавърска и магистърска степен по управление на човешките ресурси. През годините натрупах опит в обучение и развитие, консултиране, фасилитиране, работа с клиенти, координация, управление на екип и управление на знанието.",
        "Създавала и водила съм обучения, анализирала съм нуждите на клиенти и екипи, разработвала съм обучително съдържание, подкрепяла съм работата на други фасилитатори и съм координирала комплексни проекти. Управлявала съм екип и съм изграждала вътрешни процеси и системи за организиране и споделяне на знание.",
        "Работата по различни позиции ми помогна да развия умения, на които разчитам и днес. Научих се да чувам какво стои зад първоначалната заявка, да свързвам нуждите на бизнеса с човешкото поведение и да превръщам сложната информация в нещо ясно и приложимо. Помогна ми и да създавам структура, без да губя човешкия елемент.",
        "Този опит ме научи да гледам на процеса като на едно цяло. Това, което се случва преди и след една среща или обучение, е също толкова важно, колкото самото преживяване. Истинската стойност често се вижда в онова, което остава и се прилага след него.",
      ],
      en: [
        "My professional path began with a Bachelor's and a Master's degree in Human Resource Management. Over the years, I have gained experience in learning and development, consulting, facilitation, client work, coordination, team management, and knowledge management.",
        "I have designed and delivered training programs, explored the needs of clients and teams, developed learning content, supported other facilitators, and coordinated complex projects. I have also managed a team and built internal processes and systems for organizing and sharing knowledge.",
        "Working in different positions helped me develop skills that I still rely on today. I learned to listen beyond the initial request, connect business needs with human behaviour, and turn complex information into something clear and practical. It also taught me how to create structure without losing the human element.",
        "This experience helped me see the process as a whole. What happens before and after a conversation or training session matters just as much as the experience itself. The real value often becomes visible in what people remember, use, and continue doing afterwards.",
      ],
    },
    storyPullQuote: {
      bg: "Промяната не започва с готов отговор.\nЗапочва с честен поглед към това, което наистина се случва.",
      en: "Change does not begin with a ready-made answer.\nIt begins with an honest look at what is really happening.",
    },
    storyImageAlt: {
      bg: "Работен момент",
      en: "A moment at work",
    },
    // 3. How I understand development
    developmentKicker: {
      bg: "Как разбирам развитието",
      en: "How I see development",
    },
    developmentTitleLead: {
      bg: "Човекът в живота и човекът в работата",
      en: "Who we are in life and who we are at work",
    },
    developmentTitleAccent: {
      bg: "са едно цяло.",
      en: "are part of the same whole.",
    },
    developmentPullQuote: {
      bg: "Носим себе си навсякъде.",
      en: "We carry ourselves everywhere.",
    },
    developmentParagraphs: {
      bg: [
        "Често говорим за личностното и професионалното развитие като за две отделни посоки. Но начинът, по който общуваме, вземаме решения, поставяме граници, поемаме отговорност и реагираме под напрежение, не се сменя с ролята ни. Носим себе си навсякъде, както в отношенията и работата, така и в трудните моменти между тях.",
        "Затова за мен развитието не е само придобиване на умения, постигане на резултати или движение към следваща позиция. То включва и повече яснота за това какво е важно, по-добро разбиране на вътрешните механизми, които ни движат, и по-зрял начин да присъстваме в собствения си живот. Ценностите, нагласата и вътрешното усещане за посока имат съвсем практично отражение върху изборите и действията ни.",
        "Когато човек расте отвътре, това естествено се отразява и в работата му. А смисленото професионално развитие често променя и начина, по който живее. Виждам ги като различни проявления на един и същи процес, в който ставаме по-осъзнати, уверени и цялостни. Работата е важна част от живота, но не е негов заместител.",
      ],
      en: [
        "We often talk about personal and professional development as two separate paths. Yet the way we communicate, make decisions, set boundaries, take responsibility, and respond under pressure does not change with our role. We carry ourselves into our relationships, our work, and the difficult moments in between.",
        "That is why I do not see development only as gaining skills, achieving results, or moving towards a new position. It also includes greater clarity about what matters, a better understanding of the inner patterns that drive us, and a more mature way of being present in our own lives. Our values, mindset, and inner sense of direction have a very practical effect on the choices we make and the actions we take.",
        "When a person grows inwardly, it naturally affects their work. And meaningful professional development often changes the way they live as well. I see them as different expressions of the same process through which we become more self-aware, confident, and whole. Work is an important part of life, but it is not a replacement for it.",
      ],
    },
    // 4. Philosophy
    philosophyKicker: { bg: "В какво вярвам", en: "What I believe" },
    philosophyTitleLead: { bg: "Три неща, които", en: "Three things that" },
    philosophyTitleAccent: {
      bg: "създават посока.",
      en: "create direction.",
    },
    principle1Title: {
      bg: "Яснота",
      en: "Clarity",
    },
    principle1Text: {
      bg: "Преди да търсим решение, е важно да разберем какво всъщност се случва. Яснотата помага да видим ситуацията, нуждите и възможните следващи стъпки.",
      en: "Before looking for a solution, it is important to understand what is really happening. Clarity helps us see the situation, the needs, and the possible next steps.",
    },
    principle2Title: {
      bg: "Човешки подход",
      en: "A human approach",
    },
    principle2Text: {
      bg: "Развитието не означава да поправяме хората. То започва с уважение към човека отсреща и с достатъчно честност, за да бъде възможна промяната.",
      en: "Development is not about fixing people. It begins with respect for the person in front of us and enough honesty to make meaningful change possible.",
    },
    principle3Title: {
      bg: "Приложимост",
      en: "Practical application",
    },
    principle3Text: {
      bg: "Една идея има стойност, когато може да бъде използвана в реалния живот. Търся решения, които водят до конкретно действие, избор или различен начин на поведение.",
      en: "An idea has value when it can be used in real life. I look for approaches that lead to a concrete action, decision, or change in behaviour.",
    },
    // 4. Experience & numbers
    experienceKicker: { bg: "Опит", en: "Experience" },
    experienceTitleLead: { bg: "Години на", en: "Years of" },
    experienceTitleAccent: {
      bg: "практика.",
      en: "practice.",
    },
    experienceParagraph: {
      bg: "Зад работата ми стоят години опит в корпоративна среда, в работа с екипи от различни култури и в обучения на стотици професионалисти.",
      en: "Behind my work are years of experience in corporate environments, working with teams from different cultures, and training hundreds of professionals.",
    },
    // 5. Credentials
    credentialsKicker: {
      bg: "Квалификация",
      en: "Background",
    },
    credentialsTitleLead: { bg: "Образование и", en: "Education and" },
    credentialsTitleAccent: {
      bg: "професионално развитие.",
      en: "professional development.",
    },
    credentials: {
      bg: [
        "Бакалавърска степен по управление на човешките ресурси",
        "Магистърска степен по управление на човешките ресурси",
        "Сертифициран обучител по групово-динамичен тренинг",
        "Обучение по графична фасилитация",
        "Train-the-trainer програми",
      ],
      en: [
        "Bachelor's degree in Human Resource Management",
        "Master's degree in Human Resource Management",
        "Certified trainer in group-dynamic training",
        "Training in graphic facilitation",
        "Train-the-trainer programs",
      ],
    },
    // 6. Beyond work
    beyondKicker: { bg: "Отвъд работата", en: "Beyond work" },
    beyondTitleLead: {
      bg: "Движение, любопитство и",
      en: "Movement, curiosity, and",
    },
    beyondTitleAccent: {
      bg: "смислени разговори.",
      en: "meaningful conversations.",
    },
    beyondParagraphs: {
      bg: [
        "Извън работата движението и спортът са важна част от живота ми. Те ми носят енергия, предизвикват ме да излизам от зоната си на комфорт и продължават да ме учат на търпение, постоянство, сила и баланс. Харесва ми да откривам нови начини да се движа, да развивам уменията си и да виждам докъде мога да стигна.",
        "Обичам да пътувам, да откривам нови места, култури и начини на живот. Харесвам и усещането за адреналин. Сред най-смелите ми преживявания досега са плуването с акули и делфини в Индийския океан и скокът с бънджи от скалите на остров Нуса Пенида. Пътуванията ми дават по-широка перспектива и ми напомнят, че светът е много по-голям от собствените ни навици, представи и гледни точки. До момента Бали е мястото, което е оставило най-силен отпечатък в мен.",
        "Ценя времето с близки хора, вкусната храна, рисуването, смислените разговори и темите, които ме карат да погледна по различен начин на познати неща. А понякога пея сама вкъщи или в колата, достатъчно уверено, за да ми е хубаво, и достатъчно насаме, за да е безопасно за околните.",
      ],
      en: [
        "Outside of work, movement and sport are an important part of my life. They give me energy, challenge me to step outside my comfort zone, and continue to teach me patience, consistency, strength, and balance. I enjoy discovering new ways to move, developing my skills, and seeing how far I can go.",
        "I love travelling, discovering new places, cultures, and ways of life. I also enjoy the feeling of adrenaline. Some of my boldest experiences so far include swimming with sharks and dolphins in the Indian Ocean and bungee jumping from the cliffs of Nusa Penida. Travelling gives me a broader perspective and reminds me that the world is much bigger than our own habits, assumptions, and ways of seeing things. So far, Bali is the place that has left the strongest impression on me.",
        "I value time with the people close to me, good food, drawing, meaningful conversations, and topics that make me look at familiar things differently. And sometimes I sing alone at home or in the car, with enough confidence to enjoy it and enough privacy to keep everyone around me safe.",
      ],
    },
    beyondImage1Alt: {
      bg: "Личен момент",
      en: "A personal moment",
    },
    beyondImage2Alt: {
      bg: "Тих момент",
      en: "A quiet moment",
    },
  },
  // Homepage "Services" section (reuses workWithMe.service* for the three
  // service cards; only the kicker, title, subtitle, and the homepage-specific
  // tail of service 1 differ).
  homeServices: {
    kicker: { bg: "Услуги", en: "Services" },
    titleLead: { bg: "Как работим", en: "How we work" },
    titleAccent: { bg: "заедно.", en: "together." },
    subtitle: {
      bg: "Две посоки, една философия с фокус върху растеж, който отговаря на твоя живот и на реалните нужди на екипа.",
      en: "Two directions, one philosophy, focused on growth that responds to your life and the real needs of the team.",
    },
    subtitleWithLearningDesign: {
      bg: "Три формата, една философия с фокус върху растеж, който отговаря на твоя живот, не на нечий чужд модел.",
      en: "Three formats, one philosophy, with a focus on growth that responds to your life, not to someone else's model.",
    },
    service1Description: {
      bg: "Когато си в период на промяна, колебание или вътрешно напрежение и имаш нужда да подредиш мислите си, да чуеш себе си по-ясно или да получиш практическа насока за следващата стъпка.",
      en: "When you are moving through change, uncertainty, or inner tension and need space to sort through your thoughts, hear yourself more clearly, or receive practical guidance for the next step.",
    },
    service2Description: {
      bg: "Когато екипът има нужда от по-ясна комуникация, повече участие и разговор, който води до обща посока и конкретни следващи стъпки.",
      en: "When a team needs clearer communication, more active participation, and a conversation that leads to shared direction and concrete next steps.",
    },
    service3Description: {
      bg: "Когато имаш тема, програма или идея за обучение, но ѝ липсва ясна структура, логика и материали, които хората могат реално да използват.",
      en: "When you have a topic, program, or training idea, but it needs clearer structure, stronger logic, and materials people can actually use.",
    },
  },
  // Homepage "Articles preview" section — featured + list.
  articles: {
    kicker: { bg: "Статии", en: "Articles" },
    titleLead: { bg: "Мисли, записани", en: "Thoughts made" },
    titleAccent: { bg: "на глас.", en: "visible" },
    viewAll: { bg: "Виж всички", en: "View all" },
    viewAllMobile: {
      bg: "Виж всички статии",
      en: "View all articles",
    },
    readCta: { bg: "Прочети", en: "Read" },
    // Intro paragraph on the /articles listing page.
    pageIntro: {
      bg: "Лични размисли и наблюдения от работата ми с хора. Пиша за видимото, но и за онова, което често остава неизказано, а всъщност движи много от процесите ни.",
      en: "Personal reflections and observations from my work with people. I write about what can be seen, but also about what often remains unspoken and yet drives so many of our processes.",
    },
    // Search UI on the /articles listing page.
    searchPlaceholder: {
      bg: "Търси по заглавие или ключова дума",
      en: "Search by title or keyword",
    },
    searchPlaceholderHint: {
      bg: "(напр.: лидерство, комуникация, увереност)",
      en: "(e.g. leadership, communication, confidence)",
    },
    searchClear: { bg: "Изчисти търсенето", en: "Clear search" },
    searchResultsFor: {
      bg: "Резултати за",
      en: "Results for",
    },
    searchNoResults: {
      bg: "Няма намерени статии. Опитай с друга дума.",
      en: "No articles found. Try a different word.",
    },
    searchResultsCountOne: {
      bg: "статия",
      en: "article",
    },
    searchResultsCountMany: {
      bg: "статии",
      en: "articles",
    },
    // Pagination
    paginationPrev: { bg: "Предишна", en: "Previous" },
    paginationNext: { bg: "Следваща", en: "Next" },
    paginationPageLabel: { bg: "Страница", en: "Page" },
    paginationOf: { bg: "от", en: "of" },
    // Article detail page
    backToArticles: {
      bg: "Обратно към статии",
      en: "Back to articles",
    },
    moreArticles: {
      bg: "Още статии",
      en: "More articles",
    },
  },
  // Homepage "Metrics" section — experience numbers.
  metrics: {
    kicker: { bg: "Опит", en: "Experience" },
    titleLead: { bg: "Зад думите стои", en: "Behind the words is" },
    titleAccent: { bg: "практика", en: "practice" },
    intro: {
      bg: "Практиката ми съчетава обучение и развитие, фасилитиране и коучинг с хора, екипи и организации от различни сектори.",
      en: "My work brings together learning and development, facilitation, and coaching with people, teams, and organizations across different sectors.",
    },
    featuredValue: { bg: "10+", en: "10+" },
    featuredLabel: {
      bg: "години опит",
      en: "years of experience",
    },
    participantsValue: { bg: "600+", en: "600+" },
    participantsLabel: {
      bg: "участници в програми",
      en: "participants in programs",
    },
    projectsValue: { bg: "1 000+", en: "1,000+" },
    projectsLabel: {
      bg: "корпоративни проекта",
      en: "corporate projects",
    },
    trainingsValue: { bg: "60+", en: "60+" },
    trainingsLabel: {
      bg: "проведени обучения",
      en: "training sessions delivered",
    },
    modulesValue: { bg: "30+", en: "30+" },
    modulesLabel: {
      bg: "обучителни модула",
      en: "learning modules",
    },
    coachingValue: { bg: "20+", en: "20+" },
    coachingLabel: {
      bg: "индивидуални коучинг сесии",
      en: "individual coaching sessions",
    },
  },
  // Homepage testimonials — temporary copy for layout review.
  testimonials: {
    kicker: { bg: "Отзиви", en: "Testimonials" },
    titleLead: { bg: "Думи след", en: "Words after" },
    titleAccent: { bg: "съвместната работа", en: "working together" },
    readAll: {
      bg: "Прочети всички коментари тук",
      en: "Read all testimonials here",
    },
    fullKicker: { bg: "Клиентски отзиви", en: "Client testimonials" },
    fullTitleLead: {
      bg: "Какво споделят хората,",
      en: "What people share",
    },
    fullTitleAccent: {
      bg: "с които съм работила",
      en: "after working with me",
    },
    workTitleLead: {
      bg: "Опитът от",
      en: "The experience of",
    },
    workTitleAccent: {
      bg: "съвместната работа",
      en: "working together",
    },
    workIntro: {
      bg: "Няколко подбрани гласа за начина, по който протича работата ни. Пълните отзиви са събрани на отделна страница.",
      en: "A few selected voices on what working together feels like. The full testimonials are collected on a dedicated page.",
    },
  },
  // Homepage "Directions" section — two-column intro to the two growth paths.
  directions: {
    // Intro sentence (line 1 + line 2 with two inline accent words).
    introLine1: {
      bg: "Растежът не се случва на парче.",
      en: "Growth does not happen in separate parts.",
    },
    introLine2Pre: { bg: "В", en: "In" },
    introLine2AccentA: { bg: "кариерата", en: "work" },
    introLine2Mid: { bg: "и в", en: "and in" },
    introLine2AccentB: { bg: "живота", en: "life" },
    introLine2Post: {
      bg: "това е една и съща посока.",
      en: "it is the same direction.",
    },
    // Life column
    lifeTitleLead: { bg: "Растеж", en: "Growth" },
    lifeTitlePrep: { bg: "в", en: "in" },
    lifeTitleAccent: { bg: "живота", en: "life" },
    lifeParagraph: {
      bg: "Личностният растеж започва отвътре. В начина, по който мислиш, усещаш, избираш и минаваш през трудните моменти. Когато развиваш повече осъзнатост, яснота и вътрешна увереност, започваш да живееш по-свързано със себе си и по-малко на автопилот.",
      en: "Personal growth begins within. In the way you think, feel, choose, and move through difficult moments. When you develop more self awareness, clarity, and inner confidence, you begin to live more connected to yourself and less on autopilot.",
    },
    // Work column
    workTitleLead: { bg: "Растеж", en: "Growth" },
    workTitlePrep: { bg: "в", en: "at" },
    workTitleAccent: { bg: "работата", en: "work" },
    workParagraph: {
      bg: "Професионалното развитие е повече от кариера. То е начин да изградиш повече увереност, яснота и устойчивост в работата си. А когато това се случи, промяната се усеща не само в офиса, а и в начина, по който минаваш през деня.",
      en: "Professional growth is more than a career. It is a way to build more confidence, clarity, and resilience in your work. And when that happens, the change is felt not only in the office, but also in the way you move through your day and in the choices you make along the way.",
    },
    learnMore: { bg: "Научи повече", en: "Learn more" },
    unifier: {
      bg: "Не можеш да растеш истински в едното без да растеш и в другото.",
      en: "You cannot truly grow in one without growing in the other.",
    },
  },
  // Homepage scrolling band — independent from workWithMe topic lists.
  // Order here is intentionally mixed (not grouped by direction).
  topicsMarquee: {
    ariaLabel: {
      bg: "Теми, по които работя",
      en: "Topics I work on",
    },
    items: {
      bg: [
        "Нагласа за растеж",
        "Лидерство",
        "Ясна комуникация",
        "Създаване на вдъхновяващи истории",
        "Вътрешна мотивация",
        "Професионално присъствие",
        "Изграждане на взаимоотношения",
        "Лична ефективност",
        "Вътрешна яснота и посока",
        "Управление на хора",
        "Ограничаващи убеждения",
        "Управление чрез вдъхновение",
        "Управление на стреса",
        "Изграждане на увереност",
      ],
      en: [
        "Growth mindset",
        "Leadership",
        "Clear communication",
        "Storytelling",
        "Inner motivation",
        "Professional presence",
        "Building relationships",
        "Personal effectiveness",
        "Inner clarity and direction",
        "People management",
        "Limiting beliefs",
        "Leading through inspiration",
        "Stress management",
        "Building confidence",
      ],
    },
  },
  // Resources page — books, guides, future subscription materials.
  resources: {
    kicker: { bg: "Ресурси", en: "Resources" },
    titleLead: { bg: "Материали, които", en: "Resources that" },
    titleAccent: { bg: "остават с теб.", en: "stay with you." },
    intro: {
      bg: "Тук ще намираш книги, наръчници и кратки материали по темите, с които работя. Някои са вече в продажба.",
      en: "Here you'll find books, guides, and shorter materials exploring the topics I work with. Some are already available for purchase.",
    },
    // Section 1 — paid / available
    paidKicker: { bg: "В продажба", en: "Available" },
    paidTitleLead: { bg: "Книги и", en: "Books and" },
    paidTitleAccent: { bg: "наръчници.", en: "guides." },
    // Shared book card labels — used by every book on /resources and /resources/books.
    bookCta: { bg: "Купи от платформата", en: "Buy from the platform" },
    bookCoverAlt: { bg: "Корица на книгата", en: "Book cover" },
    bookOrderCta: { bg: "Поръчай", en: "Order" },
    // View-all link on /resources (shown when more books exist than featured).
    viewAll: { bg: "Виж всички", en: "View all" },
    viewAllMobile: { bg: "Виж всички книги", en: "View all books" },
    // /resources/books subpage
    booksPageKicker: { bg: "Всички книги", en: "All books" },
    booksPageTitleLead: { bg: "Библиотека с", en: "Resource" },
    booksPageTitleAccent: { bg: "материали", en: "Library" },
    booksPageIntro: {
      bg: "Тук ще намериш книги и наръчници, които можеш да разгледаш и поръчаш онлайн.",
      en: "Here you'll find books and guides you can browse and order online.",
    },
    backToResources: {
      bg: "Обратно към ресурси",
      en: "Back to resources",
    },
    // Section 2 — materials (coming soon)
    materialsKicker: { bg: "За изтегляне", en: "Downloads" },
    materialsTitleLead: { bg: "Полезни", en: "Helpful" },
    materialsTitleAccent: { bg: "материали", en: "resources" },
    materialsIntro: {
      bg: "Кратки наръчници и материали по темите, с които работя. Можеш да ги отвориш и прочетеш безплатно.",
      en: "Short guides and resources around the topics I work with. You can open and read them for free.",
    },
    upcomingMaterialTitle: {
      bg: "Предстоящ материал",
      en: "Upcoming resource",
    },
    upcomingMaterialDescription: {
      bg: "В момента подготвям съдържанието. Повече информация скоро.",
      en: "I'm preparing the content right now. More information soon.",
    },
    upcomingMaterialCta: {
      bg: "Скоро тук",
      en: "Coming soon",
    },
    openMaterialCta: {
      bg: "Отвори",
      en: "Open",
    },
    // Search UI on the /resources/materials listing page.
    materialsSearchPlaceholder: {
      bg: "Търси по заглавие или ключова дума",
      en: "Search by title or keyword",
    },
    materialsSearchPlaceholderHint: {
      bg: "(напр.: мини-наръчник, лидерство, екип)",
      en: "(e.g. mini-guide, leadership, team)",
    },
    materialsSearchClear: { bg: "Изчисти търсенето", en: "Clear search" },
    materialsSearchResultsFor: { bg: "Резултати за", en: "Results for" },
    materialsSearchNoResults: {
      bg: "Няма намерени материали. Опитай с друга дума.",
      en: "No resources found. Try a different word.",
    },
    materialsSearchCountOne: { bg: "материал", en: "resource" },
    materialsSearchCountMany: { bg: "материала", en: "resources" },
    // View-all link for materials on /resources (shown when more than one page).
    viewAllMaterialsMobile: {
      bg: "Виж всички материали",
      en: "View all resources",
    },
    // /resources/materials subpage
    materialsPageKicker: { bg: "Всички материали", en: "All resources" },
    materialsPageTitleLead: { bg: "Материали за", en: "Resources to" },
    materialsPageTitleAccent: { bg: "изтегляне.", en: "download." },
    materialsPageIntro: {
      bg: 'Кратки наръчници и материали, които можеш да отвориш и прочетеш безплатно. Натисни „Отвори", за да го видиш в браузъра, и от там можеш да го свалиш, ако желаеш.',
      en: 'Short guides and resources that you can open and read for free. Click "Open" to view it in your browser, and from there you can download it if you\'d like.',
    },
  },
  // Contact page — booking, channels, FAQ.
  contactPage: {
    // 1. Hero
    kicker: { bg: "Контакт", en: "Contact" },
    headlineLead: { bg: "Да започнем", en: "Let's start" },
    headlineAccent: { bg: "разговор.", en: "a conversation." },
    location: {
      bg: "Базирана в София, България",
      en: "Based in Sofia, Bulgaria",
    },
    intro: {
      bg: "Най-лесният начин да започнем е кратък безплатен разговор. Запази час от календара по-долу или ми пиши на имейл. Отговарям до 2 работни дни.",
      en: "The easiest way to start is with a short free conversation. You can book a time directly from the calendar below or send me an email. I reply within 2 business days.",
    },
    // 2. Connect — booking + email (#book anchor lives here)
    connectKicker: { bg: "Свържи се", en: "Get in touch" },
    connectTitleLead: {
      bg: "20 минути, без ангажимент.",
      en: "20 minutes, no commitment.",
    },
    connectIntro: {
      bg: "Запази безплатен 20-минутен онлайн разговор или просто да ми пишеш с няколко думи. Ще видим какво търсиш и дали мога да бъда полезна. Отговарям в рамките на 2 работни дни.",
      en: "Book a free 20-minute online call, or simply send me a few lines if that feels easier. We'll see what you're looking for and whether I can be of help. I reply within 2 business days.",
    },
    bookBulletsLabel: {
      bg: "Какво да очакваш на разговора:",
      en: "What to expect on the call:",
    },
    bookBullets: {
      bg: [
        "Кратко представяне и контекст за работата ми",
        "Време да споделиш какво те води към разговор",
        "Яснота за следващата подходяща стъпка",
      ],
      en: [
        "A short introduction and context about my work",
        "Time for you to share what brings you to this conversation",
        "Clarity on the right next step",
      ],
    },
    bookCta: {
      bg: "Запази час в календара",
      en: "Pick a time in the calendar",
    },
    bookFallback: {
      bg: "Календарът ще се появи тук скоро. Междувременно можеш да ми пишеш на имейл.",
      en: "The calendar will appear here soon. In the meantime, feel free to email me.",
    },
    transitionOr: {
      bg: "Или просто ми пиши",
      en: "Or simply write to me",
    },
    emailButton: { bg: "Изпрати имейл", en: "Send an email" },
    inPersonNote: {
      bg: "За обучения и фасилитации на живо работя основно в България.",
      en: "For in-person trainings and facilitations, I work primarily in Bulgaria.",
    },
    emailSubject: {
      bg: "Въпрос от сайта",
      en: "Inquiry from your website",
    },
    // 3. FAQ
    faqKicker: { bg: "Често задавани въпроси", en: "Frequently asked" },
    faqTitleLead: { bg: "Преди да", en: "Before you" },
    faqTitleAccent: { bg: "ми пишеш.", en: "reach out." },
    faqIntro: {
      bg: "Отговори на въпросите, които най-често ми задават. Ако твоят не е тук, пиши ми спокойно.",
      en: "Answers to the questions I'm asked most often. If yours isn't here, just write to me.",
    },
    faqOpen: { bg: "Отвори отговора", en: "Open answer" },
    faqClose: { bg: "Затвори отговора", en: "Close answer" },
    faq: {
      bg: [
        {
          q: "На какъв език работиш?",
          a: "Работя на български и английски. Сесиите, обученията и материалите могат да бъдат на който от двата езика предпочиташ. Избираш този, на който се чувстваш по-свободно.",
        },
        {
          q: "Онлайн или на живо?",
          a: "Индивидуалните коучинг сесии провеждам онлайн в Zoom или Google Meet, за да можеш да се включиш отвсякъде. Фирмените обучения и фасилитации могат да бъдат на живо в България или в онлайн формат, според нуждите и възможностите.",
        },
        {
          q: "Колко време продължава една коучинг сесия и колко срещи са нужни?",
          a: "Една коучинг сесия обикновено продължава 50 минути. Процесът най-често включва между 6 и 10 срещи, през една или две седмици, но това зависи от темата, целта и темпото, което е подходящо за теб. В запознавателния разговор обсъждаме какъв формат би имал най-много смисъл в твоя случай.",
        },
        {
          q: "Колко струват услугите?",
          a: "Цената зависи от вида и обхвата на работата. Индивидуалният коучинг, фирмените обучения и фасилитирането се структурират по различен начин, затова не използвам една стандартна цена за всички случаи. След като разбера от какво имаш нужда, ще ти предложа конкретен формат и яснота за цената. Това можем да обсъдим още в безплатния запознавателен разговор.",
        },
        {
          q: "Каква е разликата между коучинг, фасилитиране и обучение?",
          a: "Накратко, коучингът е процес, в който ти намираш своите отговори, а аз подкрепям мисленето ти чрез въпроси, структура и, когато е полезно, споделяне на гледни точки и опит. Обучението е насочено към развиване на знания и умения по конкретна тема. Фасилитирането е работа с групи, при която помагам на хората да проведат смислен разговор, да подредят различните гледни точки и да стигнат до яснота или решение.",
        },
        {
          q: "За кого коучингът НЕ е подходящ?",
          a: "Коучингът не е терапия и не замества работа с психотерапевт. Ако в момента преминаваш през тежка житейска криза, дълбока скръб, депресия или травма, най-отговорното от моя страна е да те насоча към квалифициран специалист.\n\nКоучингът е най-полезен, когато имаш достатъчно вътрешен ресурс и пространство да се фокусираш върху това как да продължиш напред.",
        },
        {
          q: "Колко бързо отговаряш на имейли?",
          a: "Отговарям в рамките на 2 работни дни. Ако ти е по-удобно, можеш директно да запазиш безплатен запознавателен разговор през календара по-горе. Това е най-бързият начин да направим първа стъпка.",
        },
        {
          q: "Какво се случва на запознавателния разговор?",
          a: "Това е 20-минутен разговор без ангажимент. Накратко се запознаваме, ти ми разказваш с какво искаш да работиш и какво търсиш. В края ще имаме повече яснота дали има смисъл да продължим заедно и каква би била следващата подходяща стъпка, независимо дали тя е работа с мен или друга посока.",
        },
      ],
      en: [
        {
          q: "What language do you work in?",
          a: "I work in Bulgarian and English. Sessions, workshops, and materials can be in either language. You choose the one you feel more comfortable using.",
        },
        {
          q: "Online or in person?",
          a: "I offer individual coaching sessions online via Zoom or Google Meet, so you can join from anywhere. Corporate trainings and facilitation sessions can take place in person in Bulgaria or online, depending on your needs and availability.",
        },
        {
          q: "How long is a coaching session, and how many sessions are needed?",
          a: "A coaching session usually lasts 50 minutes. The process typically includes 6 to 10 sessions, spaced one or two weeks apart, but this depends on the topic, the goal, and the pace that feels right for you. During the introductory call, we discuss what format would make the most sense for your situation.",
        },
        {
          q: "How much do your services cost?",
          a: "The price depends on the type and scope of the work. Individual coaching, corporate trainings, and facilitation are structured differently, so I don't use one standard price for every situation. Once I understand what you need, I'll suggest a specific format and give you clear pricing. We can discuss this during the free introductory call.",
        },
        {
          q: "What is the difference between coaching, facilitation, and training?",
          a: "In short, coaching is a process in which you find your own answers, while I support your thinking through questions, structure, and, when useful, by sharing perspectives and experience. Training focuses on developing knowledge and skills around a specific topic. Facilitation is group work, where I help people have a meaningful conversation, organize different perspectives, and reach clarity or a decision.",
        },
        {
          q: "Who is coaching not suitable for?",
          a: "Coaching is not therapy and does not replace working with a psychotherapist. If you are currently going through a serious life crisis, deep grief, depression, or trauma, the most responsible thing I can do is refer you to a qualified specialist.\n\nCoaching is most helpful when you have enough inner capacity and space to focus on how to move forward.",
        },
        {
          q: "How quickly do you reply to emails?",
          a: "I reply within 2 business days. If it's more convenient, you can book a free introductory call directly through the calendar above. That's the quickest way to take the first step.",
        },
        {
          q: "What happens during the introductory call?",
          a: "It's a 20-minute, no-obligation conversation. We briefly get to know each other, and you tell me what you'd like to work on and what you're looking for. By the end, we'll have more clarity on whether it makes sense to continue together and what the next right step might be, whether that's working with me or taking another direction.",
        },
      ],
    },
    // 4. Warm close
    closeText: {
      bg: "Радвам се, че стигна дотук.\n\nАко нещо в тези страници е отворило въпрос, посока или желание за разговор, ще се радвам да се чуем.",
      en: "I'm glad you made it this far.\n\nIf anything on these pages has opened up a question, a direction, or a wish for a conversation, I'd be glad to hear from you.",
    },
    closeSignature: {
      bg: "— Гергана",
      en: "— Gergana",
    },
  },
  termsPage: {
    kicker: { bg: "Правна информация", en: "Legal" },
    headlineLead: { bg: "Условия за ползване и", en: "Terms of Use and" },
    headlineAccent: {
      bg: "защита на личните данни.",
      en: "Data Protection.",
    },
    intro1: {
      bg: "Тази страница обяснява как може да използвате сайта gerganatsanova.com и как обработвам лични данни, когато посещавате сайта, свързвате се с мен или запазвате час за консултация.",
      en: "This page explains how you may use gerganatsanova.com and how I handle personal data when you visit the website, contact me, or book a consultation.",
    },
    intro2: {
      bg: "Стремежът ми е информацията тук да бъде ясна, разбираема и полезна. Ако имате въпрос относно съдържанието на тази страница или начина, по който обработвам лични данни, можете да се свържете с мен на посочения в края имейл адрес.",
      en: "I want the information here to be clear, understandable, and useful. If you have any questions about this page or about how I handle personal data, you can contact me at the email address listed at the end.",
    },
    intro3: {
      bg: "Моля, използвайте сайта само ако сте съгласни с описаните по-долу условия.",
      en: "Please use this website only if you agree with the terms described below.",
    },
    lastUpdatedLabel: { bg: "Последна актуализация", en: "Last updated" },
    lastUpdated: { bg: "29 април 2026 г.", en: "29 April 2026" },
    sections: [
      {
        title: {
          bg: "1. Кой поддържа този сайт",
          en: "1. Who maintains this website",
        },
        paragraphs: [
          {
            bg: "Този сайт се поддържа от Гергана Цанова.",
            en: "This website is maintained by Gergana Tsanova.",
          },
          {
            bg: "Сайтът представя информация за моята професионална дейност, консултантски услуги, опит и начини за контакт. Чрез него можете да се запознаете с работата ми, да ми изпратите запитване или да запазите час за консултация.",
            en: "The website provides information about my professional work, consulting services, experience, and ways to contact me. Through it, you can learn more about my work, send me an inquiry, or book a consultation.",
          },
          {
            bg: "За целите на защитата на личните данни аз съм лицето, което отговаря за обработването на данните, предоставени чрез този сайт.",
            en: "For data protection purposes, I am the person responsible for the processing of personal data provided through this website.",
          },
        ],
        emailIntro: {
          bg: "Можете да се свържете с мен на:",
          en: "You can contact me at:",
        },
      },
      {
        title: {
          bg: "2. Съдържание и авторски права",
          en: "2. Content and intellectual property",
        },
        paragraphs: [
          {
            bg: "Съдържанието на този сайт, включително текстове, структура, визуални елементи, материали и други публикувани ресурси, е предназначено да представи моята професионална дейност и консултантски услуги.",
            en: "The content on this website, including texts, structure, visual elements, materials, and other published resources, is intended to present my professional work and consulting services.",
          },
          {
            bg: "Освен ако не е посочено друго, съдържанието на сайта е моя собственост или се използва с право за това. Не е разрешено копиране, възпроизвеждане, разпространение, публикуване или използване на съдържание от сайта за търговски цели без предварително писмено съгласие.",
            en: "Unless stated otherwise, the content on this website belongs to me or is used with the appropriate right to do so. Copying, reproducing, distributing, publishing, or using content from this website for commercial purposes is not allowed without my prior written consent.",
          },
          {
            bg: "Можете да споделяте линк към сайта или към конкретна негова страница, когато това се прави коректно и без да се създава подвеждащо впечатление за връзка, партньорство или одобрение от моя страна.",
            en: "You may share a link to the website or to a specific page, as long as this is done accurately and does not create a misleading impression of association, partnership, or endorsement by me.",
          },
        ],
      },
      {
        title: {
          bg: "3. Как може да използвате сайта",
          en: "3. How you may use the website",
        },
        paragraphs: [
          {
            bg: "Можете да използвате сайта, за да се информирате за моята професионална дейност, консултантски услуги и възможности за контакт.",
            en: "You may use this website to learn more about my professional work, consulting services, and ways to contact me.",
          },
          {
            bg: "При използването на сайта е важно да не извършвате действия, които могат да нарушат неговата работа, сигурност или достъпност. Не е разрешено използването на сайта за изпращане на подвеждаща, незаконна, обидна или вредоносна информация, както и за действия, които могат да засегнат права или законни интереси на други лица.",
            en: "When using the website, please do not take any action that could affect its proper operation, security, or availability. You must not use the website to send misleading, unlawful, offensive, or harmful information, or to take actions that may affect the rights or legitimate interests of other people.",
          },
          {
            bg: "Сайтът може да съдържа линкове към външни страници или услуги. Те са предоставени за удобство и информация, но не нося отговорност за тяхното съдържание, политика за поверителност или начин на работа.",
            en: "The website may contain links to external pages or services. These links are provided for convenience and information, but I am not responsible for their content, privacy policies, or the way they operate.",
          },
        ],
      },
      {
        title: {
          bg: "4. Услуги и запазване на консултация",
          en: "4. Services and booking a consultation",
        },
        paragraphs: [
          {
            bg: "Сайтът представя информация за консултантските услуги, които предлагам. Описанията на услугите имат информативен характер и не представляват автоматично предложение, договор или гаранция за конкретен резултат.",
            en: "This website provides information about the consulting services I offer. The descriptions of the services are for informational purposes only and do not automatically constitute an offer, an agreement, or a guarantee of a specific result.",
          },
          {
            bg: "Ако изпратите запитване или запазите час за консултация, предоставената от вас информация ще бъде използвана, за да се свържа с вас, да обсъдим нуждите ви и при необходимост да уточним условията за съвместна работа.",
            en: "If you send an inquiry or book a consultation, the information you provide will be used to contact you, discuss your needs, and, where appropriate, clarify the terms of working together.",
          },
          {
            bg: "Конкретният обхват, срокове, цена и начин на предоставяне на дадена услуга се уточняват индивидуално преди започване на работа. Всяка консултация или съвместна работа зависи от конкретния контекст, предоставената информация и взаимното съгласие за условията.",
            en: "The specific scope, timeline, price, and way of providing a service are agreed individually before any work begins. Each consultation or collaboration depends on the specific context, the information provided, and mutual agreement on the terms.",
          },
        ],
      },
      {
        title: {
          bg: "5. Какви лични данни обработвам",
          en: "5. What personal data I process",
        },
        paragraphs: [
          {
            bg: "Когато използвате сайта, е възможно да обработвам лични данни, които ми предоставяте доброволно, например когато се свързвате с мен, изпращате запитване или запазвате час за консултация.",
            en: "When you use the website, I may process personal data that you voluntarily provide, for example when you contact me, send an inquiry, or book a consultation.",
          },
          {
            bg: "Тези данни могат да включват име, имейл адрес, съдържание на съобщението, информация, свързана с темата на запитването или консултацията, както и друга информация, която решите да споделите.",
            en: "This data may include your name, email address, the content of your message, information related to your inquiry or consultation, and any other information you choose to share.",
          },
          {
            bg: "Възможно е също да се обработват технически данни, свързани с използването на сайта, като IP адрес, тип браузър, устройство, приблизително местоположение, дата и час на посещението, езикови настройки и информация за начина, по който сайтът се зарежда и използва.",
            en: "Technical data related to the use of the website may also be processed, such as IP address, browser type, device, approximate location, date and time of visit, language settings, and information about how the website loads and is used.",
          },
          {
            bg: "Не изисквам и не събирам чувствителни лични данни чрез този сайт.",
            en: "I do not request or collect sensitive personal data through this website.",
          },
        ],
      },
      {
        title: {
          bg: "6. Защо и на какво основание обработвам данни",
          en: "6. Why and on what basis I process data",
        },
        paragraphs: [
          {
            bg: "Обработвам лични данни само когато има конкретна причина за това и доколкото е необходимо във връзка с използването на сайта, комуникацията с вас или предоставянето на консултантски услуги.",
            en: "I process personal data only when there is a specific reason to do so and only to the extent necessary in connection with the use of the website, communication with you, or the provision of consulting services.",
          },
          {
            bg: "Данните могат да бъдат обработвани, за да отговоря на ваше запитване, да организирам консултация, да обсъдим възможност за съвместна работа, да поддържам нормалната работа и сигурността на сайта или да изпълня законово задължение, ако такова възникне.",
            en: "The data may be processed in order to respond to your inquiry, arrange a consultation, discuss a possible collaboration, maintain the normal operation and security of the website, or comply with a legal obligation if one arises.",
          },
          {
            bg: "В зависимост от конкретния случай основанието за обработване може да бъде предприемане на стъпки по ваше искане преди сключване на договор, изпълнение на договор, мой легитимен интерес, спазване на законово задължение или ваше съгласие, когато такова е необходимо.",
            en: "Depending on the specific situation, the basis for processing may be taking steps at your request before entering into an agreement, performing an agreement, my legitimate interest, compliance with a legal obligation, or your consent where such consent is required.",
          },
        ],
      },
      {
        title: {
          bg: "7. Колко дълго съхранявам данните",
          en: "7. How long I keep the data",
        },
        paragraphs: [
          {
            bg: "Съхранявам лични данни само толкова дълго, колкото е необходимо за целите, за които са предоставени или обработени.",
            en: "I keep personal data only for as long as necessary for the purposes for which it was provided or processed.",
          },
          {
            bg: "Данни, свързани със запитвания и комуникация, се съхраняват за периода, необходим за отговор, последваща комуникация и организиране на евентуална консултация или съвместна работа.",
            en: "Data related to inquiries and communication is kept for the period necessary to respond, continue the communication, and arrange a possible consultation or collaboration.",
          },
          {
            bg: "Ако започнем съвместна работа, част от данните може да бъдат съхранявани за по-дълъг период, когато това е необходимо за изпълнение на договор, счетоводни, данъчни или други законови задължения.",
            en: "If we start working together, some data may be kept for a longer period where this is necessary for the performance of an agreement, accounting, tax, or other legal obligations.",
          },
          {
            bg: "Когато данните вече не са необходими, те се изтриват или анонимизират, освен ако закон не изисква по-дълго съхранение.",
            en: "When the data is no longer needed, it is deleted or anonymized, unless the law requires it to be kept for a longer period.",
          },
        ],
      },
      {
        title: {
          bg: "8. Cookies, local storage и технически данни",
          en: "8. Cookies, local storage, and technical data",
        },
        paragraphs: [
          {
            bg: "Сайтът може да използва cookies, local storage или сходни технологии, за да работи правилно и да запомня определени настройки, свързани с използването му.",
            en: "The website may use cookies, local storage, or similar technologies to function properly and remember certain settings related to its use.",
          },
          {
            bg: "Такива настройки могат да включват избран език, предпочитана тема на визуализация или друга функционална информация, която помага сайтът да се зарежда и използва по-удобно.",
            en: "These settings may include the selected language, preferred visual theme, or other functional information that helps the website load and work more conveniently.",
          },
          {
            bg: "Възможно е също да се обработват технически данни, които помагат за поддръжката, сигурността и нормалната работа на сайта. Тези данни могат да включват информация за браузър, устройство, IP адрес, дата и час на посещението, както и данни за зареждането и използването на страниците.",
            en: "Technical data may also be processed to support the maintenance, security, and normal operation of the website. This data may include information about the browser, device, IP address, date and time of visit, and how the pages load and are used.",
          },
          {
            bg: "Ако в бъдеще бъдат добавени аналитични, рекламни или други технологии, които изискват допълнително уведомяване или съгласие, тази страница ще бъде актуализирана.",
            en: "If analytics, advertising, or other technologies that require additional notice or consent are added in the future, this page will be updated.",
          },
        ],
      },
      {
        title: {
          bg: "9. Външни услуги",
          en: "9. External services",
        },
        paragraphs: [
          {
            bg: "За поддръжката и нормалната работа на сайта може да използвам външни услуги и доставчици. Това може да включва услуги за хостинг, управление на домейна, защита на сайта, имейл комуникация, запазване на часове за консултация, обработване на плащания или други технически и организационни функции.",
            en: "To support and maintain the normal operation of the website, I may use external services and providers. This may include services for hosting, domain management, website protection, email communication, booking consultations, processing payments, or other technical and organizational functions.",
          },
          {
            bg: "Такива доставчици могат да обработват ограничена информация, необходима за предоставянето на съответната услуга. Те обработват данните съобразно собствените си условия, политики за поверителност и приложимите правила за защита на личните данни.",
            en: "Such providers may process limited information necessary to provide the relevant service. They process data in accordance with their own terms, privacy policies, and applicable data protection rules.",
          },
          {
            bg: "Към момента сайтът използва или може да бъде свързан с услуги като Vercel, Cloudflare, GitHub, Google и Gumroad. Ако в бъдеще бъдат добавени други съществени външни услуги, тази страница ще бъде актуализирана, когато това е необходимо.",
            en: "At the moment, the website uses or may be connected to services such as Vercel, Cloudflare, GitHub, Google, and Gumroad. If other significant external services are added in the future, this page will be updated where necessary.",
          },
        ],
      },
      {
        title: {
          bg: "10. Вашите права",
          en: "10. Your rights",
        },
        paragraphs: [
          {
            bg: "Имате право да получите информация за това какви лични данни обработвам за вас и с каква цел.",
            en: "You have the right to receive information about what personal data I process about you and for what purpose.",
          },
          {
            bg: "При условията на приложимото законодателство можете да поискате достъп до личните си данни, корекция на неточни или непълни данни, изтриване на данни, ограничаване на обработването, както и възражение срещу обработването в определени случаи.",
            en: "Subject to applicable law, you may request access to your personal data, correction of inaccurate or incomplete data, deletion of data, restriction of processing, and objection to processing in certain cases.",
          },
          {
            bg: "Когато обработването се основава на ваше съгласие, имате право да го оттеглите по всяко време. Оттеглянето на съгласието не засяга законосъобразността на обработването, извършено преди това.",
            en: "Where processing is based on your consent, you have the right to withdraw it at any time. Withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal.",
          },
          {
            bg: "Ако искате да упражните свое право или имате въпрос относно обработването на личните ви данни, можете да се свържете с мен на посочения в края имейл адрес.",
            en: "If you would like to exercise any of your rights or have a question about the processing of your personal data, you can contact me at the email address listed at the end.",
          },
          {
            bg: "Ако смятате, че правата ви във връзка със защитата на личните данни са нарушени, имате право да подадете жалба до компетентния надзорен орган.",
            en: "If you believe that your data protection rights have been violated, you have the right to lodge a complaint with the competent supervisory authority.",
          },
        ],
      },
      {
        title: {
          bg: "11. Сигурност на данните",
          en: "11. Data security",
        },
        paragraphs: [
          {
            bg: "Полагам разумни усилия да защитавам личните данни, които се обработват чрез сайта, от неоторизиран достъп, загуба, злоупотреба или разкриване.",
            en: "I make reasonable efforts to protect the personal data processed through the website from unauthorized access, loss, misuse, or disclosure.",
          },
          {
            bg: "Въпреки това нито един метод за предаване или съхранение на информация в интернет не може да бъде напълно сигурен. Затова не мога да гарантирам абсолютна защита, но се стремя да използвам адекватни мерки според естеството на сайта и обработваната информация.",
            en: "However, no method of transmitting or storing information on the internet can be completely secure. For this reason, I cannot guarantee absolute protection, but I aim to use appropriate measures based on the nature of the website and the information processed.",
          },
        ],
      },
      {
        title: {
          bg: "12. Промени в тази страница",
          en: "12. Changes to this page",
        },
        paragraphs: [
          {
            bg: "Възможно е тази страница да бъде актуализирана при промяна в сайта, услугите, използваните външни доставчици или приложимите правила.",
            en: "This page may be updated if there are changes to the website, the services, the external providers used, or the applicable rules.",
          },
          {
            bg: "При съществена промяна ще бъде посочена нова дата на актуализация. Препоръчвам периодично да преглеждате тази страница, за да сте информирани за актуалните условия и начина, по който се обработват лични данни.",
            en: "If a significant change is made, a new update date will be indicated. I recommend reviewing this page from time to time so that you stay informed about the current terms and the way personal data is processed.",
          },
        ],
      },
      {
        title: {
          bg: "13. Приложимо право",
          en: "13. Governing law",
        },
        paragraphs: [
          {
            bg: "Тези условия и използването на сайта се уреждат от приложимото право на Република България, доколкото не се прилагат задължителни правила на друго законодателство.",
            en: "These terms and the use of the website are governed by the applicable laws of the Republic of Bulgaria, unless mandatory rules of another jurisdiction apply.",
          },
          {
            bg: "Ако възникне спор във връзка със сайта, неговото използване или обработването на лични данни, ще се стремим първо да го разрешим чрез добросъвестна комуникация.",
            en: "If a dispute arises in connection with the website, its use, or the processing of personal data, we will first seek to resolve it through good-faith communication.",
          },
        ],
      },
    ],
    contactLabel: { bg: "Въпроси и заявки", en: "Questions and requests" },
    contactIntro: {
      bg: "Ако имате въпроси относно тези условия, използването на сайта или начина, по който обработвам лични данни, можете да се свържете с мен на:",
      en: "If you have any questions about these terms, the use of the website, or how I process personal data, you can contact me at:",
    },
    contactOutro: {
      bg: "Ще се постарая да отговоря в разумен срок и да съдействам според естеството на запитването.",
      en: "I will do my best to respond within a reasonable time and assist according to the nature of the inquiry.",
    },
    footerLink: { bg: "Условия за ползване", en: "Terms of use" },
    contactNoticePrefix: {
      bg: "Свързвайки се с мен, приемаш",
      en: "By contacting me, you agree to the",
    },
    contactNoticeLink: {
      bg: "условията за ползване и защита на данните",
      en: "terms of use and data protection policy",
    },
    contactNoticeSuffix: { bg: "", en: "." },
  },
} as const;
