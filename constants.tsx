
import { Category, Language, TranslationSchema } from './types';

export const UI_TRANSLATIONS: Record<Language, TranslationSchema> = {
  ar: {
    headerBadge: "نسخة المليونير 2026 💎",
    headerTitle: "مُتنبئ 2026",
    headerDesc: "خوارزمية الذكاء العاطفي والفلكي تتوقع مسار حياتك في العام القادم. هل أنت مستعد للمفاجأة؟",
    inputNameLabel: "الاسم الكريم:",
    inputNamePlaceholder: "اكتب اسمك هنا...",
    inputCategoryLabel: "اختر بوابة مستقبلك:",
    inputZodiacLabel: "برجك الفلكي:",
    submitBtn: "فك شفرة مستقبلي ✨",
    suggestionsLabel: "ألقاب شائعة:",
    socialProof: "تم تحليل 124,500 مسار حياة اليوم!",
    loadingTitle: "تحليل الروابط الكونية...",
    loadingDesc: "جاري ربط بياناتك مع حركة كواكب عام 2026.. استعد!",
    resultTitle: "تقرير المصير لعام",
    generatedBy: "بوابة مُتنبئ 2026 الرقمية",
    shareTitle: "شارك صدمتك مع أصدقائك! 😎",
    shareWhatsapp: "واتساب",
    shareCopy: "نسخ الرابط",
    resetBtn: "توقع جديد لمصير مختلف 🔄",
    copySuccess: "تم النسخ! انطلق وانشر حظك 🔥",
    errorName: "النظام يحتاج لاسمك للبدء!",
    footerAbout: "شروط الخدمة",
    footerPrivacy: "الخصوصية",
    footerHelp: "الدعم التقني",
    footerDisclaimer: "ملاحظة: هذا الموقع لأغراض الترفيه وصناعة الابتسامة فقط، فالغيب لا يعلمه إلا الله.",
    footerCopyright: "© 2025 مُتنبئ 2026 - تكنولوجيا المستقبل اليوم.",
    recentActivity: "اكتشف للتو مستقبلاً مبهراً! ✨",
    luckyColorLabel: "لون الطاقة",
    luckyNumberLabel: "رقم القوة",
    luckyMonthLabel: "شهر الحسم",
    luckyHourLabel: "ساعة الذروة",
    spiritAnimalLabel: "الروح الحيوانية",
    privacyTitle: "سياسة الأمان والبيانات",
    termsTitle: "شروط الاستخدام الرقمي",
    contactTitle: "مركز التواصل",
    contactName: "الاسم",
    contactEmail: "الايميل",
    contactMessage: "الرسالة",
    contactSend: "إرسال البيانات 🚀",
    contactSuccess: "وصلت رسالتك بأمان!",
    backHome: "الرجوع للبوابة",
    aboutTitle: "عن المنصة",
    cookieTitle: "تحسين تجربة الذكاء",
    cookieDesc: "نستخدم ملفات تعريف الارتباط لنقدم لك أدق التوقعات المخصصة.",
    cookieAccept: "موافق",
    adSpace: "إعلان مدعوم",
    insightsTitle: "رؤى استراتيجية لـ 2026",
  },
  en: {
    headerBadge: "Millionaire Edition 2026 💎",
    headerTitle: "2026 Predictor",
    headerDesc: "Our Astro-AI algorithm predicts your life path for the coming year. Ready for the surprise?",
    inputNameLabel: "Full Name:",
    inputNamePlaceholder: "Enter your name...",
    inputCategoryLabel: "Choose Your Gateway:",
    inputZodiacLabel: "Zodiac Sign:",
    submitBtn: "Decode My Future ✨",
    suggestionsLabel: "Trending Nicknames:",
    socialProof: "124,500 life paths analyzed today!",
    loadingTitle: "Analyzing Cosmic Links...",
    loadingDesc: "Mapping your data with 2026 planetary movements.. Stay tuned!",
    resultTitle: "Destiny Report for",
    generatedBy: "2026 Predictor Digital Portal",
    shareTitle: "Share the shock with friends! 😎",
    shareWhatsapp: "WhatsApp",
    shareCopy: "Copy Link",
    resetBtn: "Try a New Destiny 🔄",
    copySuccess: "Copied! Go spread your luck 🔥",
    errorName: "The system needs your name to start!",
    footerAbout: "Terms",
    footerPrivacy: "Privacy",
    footerHelp: "Support",
    footerDisclaimer: "Note: This site is for entertainment only. The future is known only to God.",
    footerCopyright: "© 2025 2026 Predictor - Future Tech Today.",
    recentActivity: "just discovered a brilliant future! ✨",
    luckyColorLabel: "Energy Color",
    luckyNumberLabel: "Power Number",
    luckyMonthLabel: "Peak Month",
    luckyHourLabel: "Prime Hour",
    spiritAnimalLabel: "Spirit Animal",
    privacyTitle: "Data & Security Policy",
    termsTitle: "Digital Usage Terms",
    contactTitle: "Contact Center",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSend: "Send Data 🚀",
    contactSuccess: "Message received safely!",
    backHome: "Back to Portal",
    aboutTitle: "About Platform",
    cookieTitle: "AI Optimization",
    cookieDesc: "We use cookies to provide the most accurate personalized predictions.",
    cookieAccept: "Accept",
    adSpace: "Sponsored Ad",
    insightsTitle: "Strategic Insights for 2026",
  }
};

export const PREDICTIONS: Record<Language, Record<Category, string[]>> = {
  ar: {
    [Category.MONEY]: [
      "يا {name}، في 2026 ستمتلك 'لمسة ميداس'. كل ما تلمسه سيتحول لذهب، استعد لامتلاك أول سيارة كهربائية فاخرة باسمك!",
      "محفظتك الرقمية ستنفجر من الأرباح في يونيو 2026. ستصبح الشخص الذي يستلف منه الجميع!",
      "استقالتك من عملك الحالي ستكون 'تريند' في 2026، لأنك ستفتتح شركتك الخاصة التي ستحقق الملايين.",
      "توقع مكالمة من بنك سويسري بخصوص حوالة دولية ضخمة. يبدو أن استثمارك القديم قد أثمر أخيراً يا {name}!",
      "في 2026، ستكون رحلاتك بطائرة خاصة. لا مزيد من الانتظار في المطارات، أنت الآن في VIP!",
      "يا {name}، ستكتشف ثغرة في سوق الأسهم تجعلك تشتري منزلاً على الشاطئ قبل نهاية 2026.",
      "فكرة 'مجنونة' ستخطر ببالك أثناء شرب القهوة في مارس ستتحول لأنجح تطبيق في المنطقة العربية.",
      "ستربح جائزة مالية كبرى في مسابقة لم تكن تنوي المشاركة فيها أصلاً. الحظ يلاحقك!",
      "في 2026، ستتحول هوايتك البسيطة إلى مصدر دخل يتجاوز رواتب المديرين التنفيذيين.",
      "تجهيز 'شنطة الكاش' سيكون روتينك اليومي في النصف الثاني من 2026. لا ترهق نفسك بالعد!",
      "سنة 2026 هي سنة العقارات. ستصبح مالكاً لأكثر من عقار في 3 دول مختلفة.",
      "سيرتفع رصيدك البنكي لدرجة أن البنك سيتصل بك ليطلب نصيحة استثمارية!",
      "يا {name}، استعد لعام حيث 'الخصومات' لا تهمك، لأنك ستشتري كل شيء بالسعر الكامل وبكل فخر.",
      "عقد عمل مع شركة عالمية في دبي أو الرياض سيغير مجرى حياتك المالي للأبد.",
      "ستصبح المستثمر 'الملاك' الذي يساعد الشباب، ثروتك ستزداد كلما أعطيت أكثر."
    ],
    [Category.LOVE]: [
      "يا {name}، في 2026 القدر يخطط للقاء أسطوري. في مطار أو محطة قطار، ستلتقي بشخص يجعلك تنسى كل ما مضى!",
      "حفل زفافك في 2026 سيكون حديث السوشيال ميديا. الفخامة والرومانسية ستجتمعان لأجلك.",
      "شريك حياتك المستقبلي يراقبك الآن بصمت. الاعتراف سيكون في ليلة مقمرة من شهر مايو 2026.",
      "ستتلقى باقة ورد مجهولة المصدر كل صباح في شهر فبراير، السر سينكشف في يوم الحب!",
      "علاقة عاطفية كانت 'مستحيلة' ستصبح واقعاً جميلاً في 2026. المعجزات تحدث لمن يؤمن بها.",
      "يا {name}، ستقضي صيف 2026 في إيطاليا مع شخص يفهم صمتك قبل كلامك.",
      "رسالة بالخطأ على واتساب ستكون بداية لأجمل قصة حب عرفتها البشرية في 2026.",
      "في 2026، ستكتشف أن جارك أو زميلك في العمل هو توأم روحك الحقيقي الذي كنت تبحث عنه بعيداً.",
      "ستعيش قصة حب تشبه أفلام هوليوود، مع نهاية سعيدة واحتفال لا ينتهي.",
      "خاتم ألماس يلمع في الأفق! 2026 هي سنة الالتزام الأبدي يا {name}.",
      "ستعود لك روح الشباب والحب في 2026 مع شريك يقدر قيمتك ويجعلك تاجاً على رأسه.",
      "يا {name}، الحب سيطرق بابك وأنت في قمة انشغالك. لا تغلق الباب هذه المرة!",
      "سفرة مفاجئة مع 'الحب' إلى جزر المالديف ستكون هي طاقة التجديد التي تحتاجها.",
      "2026 هي سنة الصلح التاريخي. القلوب المتخاصمة ستعود لبعضها وأنت البطل في هذه القصة.",
      "ستصبح ملهماً في العلاقات، الجميع سيسألك: كيف وجدت هذا الحب الأسطوري؟"
    ],
    [Category.HEALTH]: [
      "يا {name}، في 2026 ستمتلك جسداً رياضياً يجعل عارضي الأزياء يغارون منك. طاقتك ستكون متفجرة!",
      "ستودع الصيدليات والأطباء في 2026. مناعتك ستكون حديدية ونشاطك في ذروته.",
      "ستكتشف رياضة جديدة (ربما البادل أو اليوغا الهوائية) وستصبح محترفاً فيها خلال أشهر.",
      "بشرتك في 2026 ستكون مشرقة لدرجة أن الجميع سيسألك عن 'سر الشباب الدائم'.",
      "ستختفي كل آلام الظهر والرقبة بفضل نظام حياة ذكي ستتبعه في بداية 2026.",
      "يا {name}، ستنجح في تحدي '365 يوماً بدون سكر' وستشعر أنك ولدت من جديد.",
      "في 2026، ستصبح 'النباتي' أو 'الرياضي' الذي يلهم العائلة بأكملها لتغيير حياتها.",
      "صحتك النفسية ستكون في هدوء تام. ستتعلم فن 'التجاهل' وستعيش في سلام داخلي عميق.",
      "ستشارك في ماراثون دولي في 2026 وستحطم رقمك القياسي الشخصي.",
      "يا {name}، ستكتشف أن الضحك هو أفضل دواء، وستقضي 2026 وأنت تضحك من قلبك.",
      "فحوصاتك الطبية في نهاية 2026 ستكون مثالية، الطبيب سيطلب صورتك ليضعها في عيادته!",
      "ستمتلك قوة تركيز خرافية بفضل تمارين ذهنية ستتعلمها في منتصف العام.",
      "يا {name}، ستنام بعمق كالأطفال وتستيقظ بنشاط كالأبطال. 2026 هي سنتك الصحية.",
      "جهازك الهضمي سيشكرك في 2026 على القرارات الذكية التي ستتخذها بشأن طعامك.",
      "ستصبح قدوة في 'العمل والراحة'، ستعرف متى تضغط ومتى تسترخي بذكاء."
    ],
    [Category.SURPRISE]: [
      "يا {name}، في 2026 ستصبح 'براند' عالمي. اسمك سيظهر في لوحات إعلانية ضخمة في نيويورك ودبي!",
      "ستكتشف أنك تمتلك صوتاً رائعاً أو موهبة تمثيل ستقودك للسجادة الحمراء في المهرجانات.",
      "فوز مفاجئ بـ 'لوتاري' أو جائزة كبرى سيجعلك تغير مكان سكنك إلى قصر في غضون أيام.",
      "يا {name}، ستتلقى دعوة لحضور حفل خاص مع شخصيات عالمية لم تكن تحلم حتى برؤيتهم.",
      "ستكتب كتاباً أو تطلق 'بودكاست' سيحتل المركز الأول عالمياً في غضون أسبوع واحد.",
      "مفاجأة العمر: ستكتشف أن لديك ورثاً قديماً أو قطعة أرض ارتفع سعرها لمليارات!",
      "يا {name}، ستقوم برحلة حول العالم في 80 يوماً، ولكن بأسلوب الرفاهية المطلقة.",
      "في 2026، ستنقذ حياة شخص غريب، وهذا الفعل سيجعلك بطلاً قومياً وتكرم من أعلى المستويات.",
      "ستقابل 'نفسك المستقبلية' في حلم يغير كل قناعاتك ويقودك لنجاح لم يسبق له مثيل.",
      "يا {name}، ستكتشف أنك تنتمي لعائلة عريقة ولها تاريخ لم تكن تعلم عنه شيئاً.",
      "مفاجأة تقنية: ستمتلك أول روبوت ذكاء اصطناعي يساعدك في مهامك اليومية في 2026.",
      "ستربح رحلة للفضاء! نعم، 2026 هي سنة وصولك للنجوم يا {name}.",
      "ستجد كنزاً حقيقياً (ليس بالضرورة ذهباً، بل فكرة أو فرصة) مدفوناً في مكان قديم.",
      "سيتم تسمية شارع أو حديقة باسمك تقديراً لإنجاز ستقوم به في منتصف 2026.",
      "مفاجأة عائلية كبرى ستجعل الدموع تفر من عينيك فرحاً في نهاية العام."
    ]
  },
  en: {
    [Category.MONEY]: [
      "Hey {name}, in 2026 you'll have the 'Midas Touch'. Everything you touch turns into gold. Get ready for your first luxury EV!",
      "Your digital wallet will explode with profits in June 2026. You'll become the person everyone asks for a loan!",
      "Your resignation in 2026 will go viral because you're starting your own multi-million dollar company.",
      "Expect a call from a Swiss bank regarding a huge wire transfer. Your old investment finally paid off, {name}!",
      "In 2026, you'll be flying private. No more airport queues; you're strictly VIP now!",
      "You'll find a stock market loop that buys you a beach house before the end of 2026, {name}.",
      "A 'crazy' idea over coffee in March will turn into the most successful app in the region.",
      "You'll win a massive prize in a competition you didn't even mean to enter. Luck is stalking you!",
      "In 2026, your simple hobby becomes a revenue stream exceeding most CEO salaries.",
      "Carrying 'bags of cash' will be your 2026 routine. Don't tire yourself counting it!",
      "2026 is the year of real estate. You'll own properties in 3 different countries.",
      "Your bank balance will rise so high the bank will call YOU for investment advice!",
      "Get ready for a year where 'discounts' don't matter because you'll buy everything full price with pride.",
      "A contract with a global firm in Dubai or Riyadh will change your financial life forever.",
      "You'll become an 'Angel Investor' helping youth; your wealth grows the more you give."
    ],
    [Category.LOVE]: [
      "Hey {name}, destiny is planning a legendary meeting in 2026. At an airport or station, you'll meet 'The One'.",
      "Your 2026 wedding will be the talk of social media. Luxury and romance combined for you.",
      "Your future partner is watching you in silence right now. The confession comes under a full moon in May 2026.",
      "You'll receive anonymous flowers every morning in February. The secret reveals on Valentine's!",
      "An 'impossible' relationship becomes a beautiful reality in 2026. Miracles happen to believers.",
      "You'll spend the summer of 2026 in Italy with someone who understands your silence.",
      "A wrong WhatsApp message will start the most beautiful love story of 2026.",
      "In 2026, you'll realize your neighbor or colleague is the soulmate you were looking for elsewhere.",
      "You'll live a love story like a Hollywood movie, with a happy ending and endless celebrations.",
      "A diamond ring is on the horizon! 2026 is the year of eternal commitment, {name}.",
      "Your youth and love will return in 2026 with a partner who treats you like royalty.",
      "Love will knock when you're most busy. Don't close the door this time, {name}!",
      "A surprise trip to the Maldives with your 'Love' will be the renewal you need.",
      "2026 is the year of historic reconciliation. Broken hearts heal, and you're the hero.",
      "You'll become a relationship inspiration; everyone will ask: how did you find this legendary love?"
    ],
    [Category.HEALTH]: [
      "Hey {name}, in 2026 you'll have a body that makes models jealous. Your energy will be explosive!",
      "Say goodbye to pharmacies in 2026. Your immunity will be ironclad and your activity at its peak.",
      "You'll discover a new sport (maybe Padel or Aerial Yoga) and become a pro in months.",
      "Your skin in 2026 will glow so much that people will ask for your 'fountain of youth' secret.",
      "All back and neck pain will vanish thanks to a smart lifestyle change in early 2026.",
      "You'll succeed in a '365 days no sugar' challenge and feel reborn, {name}!",
      "In 2026, you become the 'Vegan' or 'Athlete' who inspires the whole family to change.",
      "Your mental health will be perfectly calm. You'll master the art of 'ignoring' and live in peace.",
      "You'll run an international marathon in 2026 and break your personal record.",
      "You'll discover laughter is the best medicine and spend 2026 laughing from your heart.",
      "Your 2026 medical checkups will be so perfect the doctor will frame your results!",
      "You'll have insane focus thanks to mental exercises you'll learn mid-year.",
      "You'll sleep like a baby and wake up like a hero. 2026 is your health year, {name}.",
      "Your digestive system will thank you in 2026 for the smart food choices you'll make.",
      "You'll become a role model in 'Work-Life Balance', knowing when to push and when to relax."
    ],
    [Category.SURPRISE]: [
      "Hey {name}, in 2026 you'll become a global brand. Your name will be on billboards in NYC and Dubai!",
      "You'll discover a great voice or acting talent that leads you to the red carpet.",
      "A surprise lottery win or a grand prize will move you into a mansion within days.",
      "You'll receive an invite to a private gala with global icons you only dreamed of meeting.",
      "You'll write a book or launch a podcast that hits #1 globally within a week.",
      "Surprise of a lifetime: you'll discover an old inheritance or land value that hit billions!",
      "You'll travel the world in 80 days, but in absolute luxury style, {name}.",
      "In 2026, you'll save a stranger's life, making you a national hero and earning top honors.",
      "You'll meet your 'future self' in a dream that changes everything and leads to unmatched success.",
      "You'll discover you belong to a noble family with a history you never knew about.",
      "Tech surprise: you'll own the first AI robot that manages your daily life in 2026.",
      "You'll win a trip to space! Yes, 2026 is the year you reach for the stars, {name}.",
      "You'll find real treasure (not gold, but an idea or opportunity) buried in an old place.",
      "A street or park will be named after you in honor of an achievement in mid-2026.",
      "A major family surprise will bring tears of joy to your eyes at the end of the year."
    ]
  }
};

export const ZODIAC_SIGNS: Record<Language, { name: string, icon: string }[]> = {
  ar: [
    { name: "الحمل", icon: "♈" }, { name: "الثور", icon: "♉" }, { name: "الجوزاء", icon: "♊" },
    { name: "السرطان", icon: "♋" }, { name: "الأسد", icon: "♌" }, { name: "العذراء", icon: "♍" },
    { name: "الميزان", icon: "♎" }, { name: "العقرب", icon: "♏" }, { name: "القوس", icon: "♐" },
    { name: "الجدي", icon: "♑" }, { name: "الدلو", icon: "♒" }, { name: "الحوت", icon: "♓" }
  ],
  en: [
    { name: "Aries", icon: "♈" }, { name: "Taurus", icon: "♉" }, { name: "Gemini", icon: "♊" },
    { name: "Cancer", icon: "♋" }, { name: "Leo", icon: "♌" }, { name: "Virgo", icon: "♍" },
    { name: "Libra", icon: "♎" }, { name: "Scorpio", icon: "♏" }, { name: "Sagittarius", icon: "♐" },
    { name: "Capricorn", icon: "♑" }, { name: "Aquarius", icon: "♒" }, { name: "Pisces", icon: "♓" }
  ]
};

export const SPIRIT_ANIMALS: Record<Language, { name: string, emoji: string }[]> = {
  ar: [
    { name: "صقر الشجاعة", emoji: "🦅" }, { name: "أسد القوة", emoji: "🦁" },
    { name: "دولفين الذكاء", emoji: "🐬" }, { name: "نمر الحماس", emoji: "🐯" },
    { name: "خيل الأصالة", emoji: "🐎" }, { name: "فراشة الإبداع", emoji: "🦋" },
    { name: "ذئب الوفاء", emoji: "🐺" }, { name: "بومة الحكمة", emoji: "🦉" }
  ],
  en: [
    { name: "Eagle of Courage", emoji: "🦅" }, { name: "Lion of Strength", emoji: "🦁" },
    { name: "Dolphin of Intelligence", emoji: "🐬" }, { name: "Tiger of Passion", emoji: "🐯" },
    { name: "Horse of Nobility", emoji: "🐎" }, { name: "Butterfly of Creativity", emoji: "🦋" },
    { name: "Wolf of Loyalty", emoji: "🐺" }, { name: "Owl of Wisdom", emoji: "🦉" }
  ]
};

export const CATEGORIES_DATA: Record<Language, any[]> = {
  ar: [
    { id: Category.MONEY, label: 'المال والنجاح 💰', color: 'from-yellow-400 to-orange-600' },
    { id: Category.LOVE, label: 'الحب والعلاقات ❤️', color: 'from-pink-400 to-red-600' },
    { id: Category.HEALTH, label: 'الصحة والرشاقة 💪', color: 'from-emerald-400 to-cyan-600' },
    { id: Category.SURPRISE, label: 'مفاجأة! ✨', color: 'from-purple-400 to-indigo-600' },
  ],
  en: [
    { id: Category.MONEY, label: 'Money & Success 💰', color: 'from-yellow-400 to-orange-600' },
    { id: Category.LOVE, label: 'Love & Relationships ❤️', color: 'from-pink-400 to-red-600' },
    { id: Category.HEALTH, label: 'Health & Fitness 💪', color: 'from-emerald-400 to-cyan-600' },
    { id: Category.SURPRISE, label: 'Surprise Me! ✨', color: 'from-purple-400 to-indigo-600' },
  ]
};

export const LUCKY_COLORS_DATA: Record<Language, any[]> = {
  ar: [
    { name: "الأرجواني الملكي", hex: "#8b5cf6" }, { name: "الذهبي البراق", hex: "#fbbf24" },
    { name: "الأزرق العميق", hex: "#0ea5e9" }, { name: "الأخضر الزمردي", hex: "#10b981" },
    { name: "الوردي الفاتن", hex: "#f472b6" }, { name: "الفضي اللامع", hex: "#94a3b8" }
  ],
  en: [
    { name: "Royal Purple", hex: "#8b5cf6" }, { name: "Glowing Gold", hex: "#fbbf24" },
    { name: "Sky Blue", hex: "#0ea5e9" }, { name: "Emerald Green", hex: "#10b981" },
    { name: "Charming Pink", hex: "#f472b6" }, { name: "Shiny Silver", hex: "#94a3b8" }
  ]
};

export const MONTHS_DATA: Record<Language, string[]> = {
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

export const LUCKY_HOURS_DATA: Record<Language, string[]> = {
  ar: ["8:00 صباحاً", "11:00 صباحاً", "3:30 مساءً", "7:00 مساءً", "9:00 مساءً", "12:00 منتصف الليل"],
  en: ["8:00 AM", "11:00 AM", "3:30 PM", "7:00 PM", "9:00 PM", "12:00 AM"]
};

export const SUGGESTED_NAMES_DATA: Record<Language, string[]> = {
  ar: ["الملياردير", "المحظوظ 😎", "نجم 2026", "الأسطورة", "البرنسيسة"],
  en: ["The Billionaire", "Lucky One 😎", "2026 Star", "The Legend", "Princess"]
};

export const TRENDING_TAGS_DATA: Record<Language, string[]> = {
  ar: ["#مليونير_2026", "#عريس_السنة", "#رشاقة_تايم", "#أثرياء_العرب", "#حظي_اليوم"],
  en: ["#Millionaire2026", "#GroomOfTheYear", "#FitnessTime", "#ArabWealth", "#MyLuckToday"]
};

export const ABOUT_CONTENT: Record<Language, string> = {
  ar: `موقع "مُتنبئ 2026" هو منصة ترفيهية رائدة تم إنشاؤها لتوفير تجربة مستخدم فريدة تجمع بين التكنولوجيا الحديثة والتوقعات الفلكية الممتعة. نحن نهدف إلى تقديم محتوى إيجابي يساعد المستخدمين على التطلع للمستقبل بعين التفاؤل. فريق العمل لدينا يحرص على تحديث الخوارزميات باستمرار لضمان تنوع النتائج ودقتها الترفيهية. إن فلسفتنا تقوم على أن الترفيه هو حق للجميع، ونسعى لأن نكون الوجهة الأولى لكل من يبحث عن لحظة مرح وتفاؤل في العالم العربي الرقمي.`,
  en: `The "2026 Predictor" website is a leading entertainment platform created to provide a unique user experience combining modern technology with fun astrological forecasts. We aim to provide positive content that helps users look forward to the future with optimism. Our team is keen to constantly update the algorithms to ensure the diversity and entertainment accuracy of results. Our philosophy is that entertainment is a right for everyone, and we strive to be the first destination for anyone looking for a moment of fun and optimism in the Arab digital world.`
};

export const INSIGHTS: Record<Language, { title: string, desc: string }[]> = {
  ar: [
    { title: "ثورة التكنولوجيا في 2026", desc: "من المتوقع أن يمثل عام 2026 منعطفاً تاريخياً في كيفية تفاعلنا مع العالم الرقمي. مع ظهور الجيل القادم من الواقع المعزز، ستصبح التوقعات الشخصية أكثر دقة وتفاعلية." },
    { title: "الاستدامة والرفاهية الشخصية", desc: "سيكون عام 2026 هو عام 'العودة إلى الذات'. تشير الدراسات إلى أن الناس سيميلون أكثر نحو تحقيق التوازن النفسي والجسدي." },
    { title: "الاستقلال المالي الرقمي", desc: "في عام 2026، ستصبح العملات الرقمية والعمل عن بُعد هما القاعدة وليس الاستثناء. هذا التحول سيخلق ثروات جديدة لجيل الشباب." }
  ],
  en: [
    { title: "2026 Tech Revolution", desc: "2026 is expected to be a historic turning point in how we interact with the digital world. Next-gen AR will make forecasts more interactive." },
    { title: "Sustainability & Wellbeing", desc: "2026 will be the year of 'Returning to Self'. Studies suggest people will lean more towards psychological and physical balance." },
    { title: "Digital Financial Freedom", desc: "In 2026, cryptocurrencies and remote work will be the norm. This shift will create new wealth for the youth." }
  ]
};

export const PRIVACY_CONTENT: Record<Language, string> = {
  ar: `سياسة الخصوصية
في "مُتنبئ 2026" (MyPredictor.site)، نولي أهمية قصوى لخصوصية زوارنا.

1. ملفات الدخول (Log Files):
مثل معظم خوادم المواقع الأخرى، نستخدم نظام ملفات الدخول. وهذا يشمل عناوين بروتوكول الإنترنت (IP)، نوع المتصفح، مزود خدمة الإنترنت (ISP)، والتاريخ/الوقت، لجمع معلومات حول كيفية استخدامك للموقع لتحسين المحتوى.

2. ملفات تعريف الارتباط (Cookies):
نحن نستخدم الكوكيز لتخزين المعلومات عن تفضيلات الزوار، ولتسجيل معلومات محددة عن الصفحات التي يزورها المستخدم.

3. كوكيز دبل كليك (DoubleClick DART):
- جوجل، كطرف ثالث، تستخدم الكوكيز لخدمة الإعلانات على موقعنا.
- استخدام جوجل لكوكي DART يمهد لخدمة الإعلانات للمستخدمين بناءً على زيارتهم لموقعنا ومواقع أخرى.
- يمكن للمستخدمين اختيار عدم استخدام كوكيز DART عن طريق زيارة سياسة الخصوصية الخاصة بإعلانات جوجل.

4. شركاؤنا في الإعلانات:
بعض شركائنا (مثل Google AdSense) قد يستخدمون الكوكيز. نحن لا نملك السيطرة على هذه الكوكيز التي يستخدمها معلنون طرف ثالث.

موافقتك:
باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا وشروطها.`,

  en: `Privacy Policy
At "2026 Predictor" (MyPredictor.site), the privacy of our visitors is of extreme importance to us.

1. Log Files:
Like many other Web sites, we use log files. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends and administer the site.

2. Cookies and Web Beacons:
We use cookies to store information about visitors' preferences, to record user-specific information on which pages the user accesses or visits.

3. DoubleClick DART Cookie:
- Google, as a third party vendor, uses cookies to serve ads on our site.
- Google's use of the DART cookie enables it to serve ads to users based on their visit to our site and other sites on the Internet.
- Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.

4. Advertising Partners:
Some of our advertising partners may use cookies and web beacons on our site (such as Google AdSense). We have no access to or control over these cookies that are used by third-party advertisers.

Consent:
By using our website, you hereby consent to our privacy policy and agree to its terms.`
};

export const TERMS_CONTENT: Record<Language, string> = {
  ar: `شروط الاستخدام لـ "مُتنبئ 2026": 1. الغرض الترفيهي: جميع النتائج هي محض خيال وتسلية. 2. الملكية الفكرية: جميع التصاميم والنصوص مملوكة للموقع. 3. إخلاء المسؤولية: الموقع غير مسؤول عن أي سوء فهم للنتائج.`,
  en: `Terms of Service: 1. Entertainment Purpose: All results are pure fiction and fun. 2. Intellectual Property: All designs are owned by the site. 3. Disclaimer: The site is not responsible for any misunderstanding.`
};
