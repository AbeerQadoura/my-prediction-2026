
export enum Category {
  MONEY = 'money',
  LOVE = 'love',
  HEALTH = 'health',
  SURPRISE = 'surprise'
}

export type Language = 'ar' | 'en';
export type AppView = 'home' | 'privacy' | 'terms' | 'contact' | 'about';

export interface PredictionResult {
  name: string;
  category: Category;
  zodiac: string;
  prediction: string;
  timestamp: string;
  luckyColor: { name: string, hex: string };
  luckyNumber: number;
  luckyMonth: string;
  luckyHour: string;
  spiritAnimal: { name: string, emoji: string };
}

export interface TranslationSchema {
  headerBadge: string;
  headerTitle: string;
  headerDesc: string;
  inputNameLabel: string;
  inputNamePlaceholder: string;
  inputCategoryLabel: string;
  inputZodiacLabel: string;
  submitBtn: string;
  suggestionsLabel: string;
  socialProof: string;
  loadingTitle: string;
  loadingDesc: string;
  resultTitle: string;
  generatedBy: string;
  shareTitle: string;
  shareWhatsapp: string;
  shareCopy: string;
  resetBtn: string;
  copySuccess: string;
  errorName: string;
  footerAbout: string;
  footerPrivacy: string;
  footerHelp: string;
  footerDisclaimer: string;
  footerCopyright: string;
  recentActivity: string;
  luckyColorLabel: string;
  luckyNumberLabel: string;
  luckyMonthLabel: string;
  luckyHourLabel: string;
  spiritAnimalLabel: string;
  privacyTitle: string;
  termsTitle: string;
  contactTitle: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSuccess: string;
  backHome: string;
  aboutTitle: string;
  cookieTitle: string;
  cookieDesc: string;
  cookieAccept: string;
  adSpace: string;
  insightsTitle: string;
}
