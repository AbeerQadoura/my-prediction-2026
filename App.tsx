
import React, { useState, useCallback, useEffect } from 'react';
import Header from './Header';
import PredictionForm from './PredictionForm';
import ResultCard from './ResultCard';
import AdSenseUnit from './AdSenseUnit';
import { Category, PredictionResult, Language, AppView } from './types';
import { GoogleGenAI, Type } from "@google/genai";
import { 
  PREDICTIONS, 
  TRENDING_TAGS_DATA, 
  LUCKY_COLORS_DATA, 
  MONTHS_DATA, 
  LUCKY_HOURS_DATA,
  UI_TRANSLATIONS, 
  SPIRIT_ANIMALS,
  PRIVACY_CONTENT,
  TERMS_CONTENT,
  ABOUT_CONTENT,
  INSIGHTS
} from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [view, setView] = useState<AppView>('home');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [recentName, setRecentName] = useState('...');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  const t = UI_TRANSLATIONS[lang];

  const loadingMessagesAr = [
    "جاري استدعاء خوارزميات الذكاء الاصطناعي...",
    "تحليل حركة الكواكب الرقمية لعام 2026...",
    "استخراج الطاقات الإيجابية لاسمك...",
    "تجهيز بطاقة الحظ النهائية..."
  ];

  const loadingMessagesEn = [
    "Invoking AI algorithms...",
    "Analyzing digital planetary movements for 2026...",
    "Extracting positive energies from your name...",
    "Preparing your final luck card..."
  ];

  const currentLoadingMessages = lang === 'ar' ? loadingMessagesAr : loadingMessagesEn;

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setShowCookie(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [lang]);

  useEffect(() => {
    const namesAr = ['سارة', 'أحمد', 'نورة', 'يوسف', 'ليلى', 'خالد', 'فهد', 'مريم'];
    const namesEn = ['Sarah', 'Alex', 'Nora', 'James', 'Lily', 'Kevin', 'Ryan', 'Emma'];
    const names = lang === 'ar' ? namesAr : namesEn;
    
    const interval = setInterval(() => {
      setRecentName(names[Math.floor(Math.random() * names.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
    setResult(null);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowCookie(false);
  };

  const handlePredict = useCallback(async (name: string, category: Category, zodiac: string) => {
    setIsLoading(true);
    setLoadingStep(0);
    
    const stepInterval = setInterval(() => {
      setLoadingStep(prev => (prev < currentLoadingMessages.length - 1 ? prev + 1 : prev));
    }, 800);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a creative 2026 prediction for ${name} (Zodiac: ${zodiac}, Category: ${category}). Language: ${lang === 'ar' ? 'Arabic' : 'English'}. Be optimistic, fun, and very specific to the category. Use emojis.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are an AI Oracle for the year 2026. You provide detailed, optimistic, and shareable predictions. Return JSON only.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              prediction: { type: Type.STRING },
              luckyColor: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  hex: { type: Type.STRING }
                },
                required: ["name", "hex"]
              },
              luckyNumber: { type: Type.INTEGER },
              luckyMonth: { type: Type.STRING },
              luckyHour: { type: Type.STRING },
              spiritAnimal: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  emoji: { type: Type.STRING }
                },
                required: ["name", "emoji"]
              }
            },
            required: ["prediction", "luckyColor", "luckyNumber", "luckyMonth", "luckyHour", "spiritAnimal"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');

      setResult({
        name,
        category,
        zodiac,
        prediction: data.prediction,
        timestamp: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US'),
        luckyColor: data.luckyColor,
        luckyNumber: data.luckyNumber,
        luckyMonth: data.luckyMonth,
        luckyHour: data.luckyHour,
        spiritAnimal: data.spiritAnimal
      });
    } catch (error) {
      console.error("AI Prediction failed, using fallback:", error);
      const categoryPredictions = PREDICTIONS[lang][category];
      const randomIndex = Math.floor(Math.random() * categoryPredictions.length);
      const rawPrediction = categoryPredictions[randomIndex];
      
      setResult({
        name,
        category,
        zodiac,
        prediction: rawPrediction.replace('{name}', name),
        timestamp: new Date().toLocaleTimeString(lang === 'ar' ? 'ar-SA' : 'en-US'),
        luckyColor: LUCKY_COLORS_DATA[lang][0],
        luckyNumber: Math.floor(Math.random() * 99) + 1,
        luckyMonth: MONTHS_DATA[lang][0],
        luckyHour: LUCKY_HOURS_DATA[lang][0],
        spiritAnimal: SPIRIT_ANIMALS[lang][0]
      });
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [lang, currentLoadingMessages]);

  const renderHome = () => (
    <>
      <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
        <AdSenseUnit slot="TOP_AD_SLOT" />
      </div>
      
      {!result && !isLoading && (
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-in fade-in duration-1000 delay-300 px-4">
          {TRENDING_TAGS_DATA[lang].map(tag => (
            <span key={tag} className="text-[10px] font-black text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 uppercase tracking-widest shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-10">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-[12px] border-purple-500/5 rounded-full"></div>
            <div className="absolute inset-0 border-[12px] border-t-purple-500 border-r-pink-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-6xl animate-bounce">🔮</span>
            </div>
          </div>
          <div className="text-center space-y-4 px-6 max-w-sm mx-auto">
            <h2 className="text-4xl font-black text-white neon-glow animate-pulse tracking-tight">{t.loadingTitle}</h2>
            <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
               <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ width: `${(loadingStep + 1) * 25}%` }}></div>
            </div>
            <p className="text-purple-400 font-bold text-lg min-h-[2rem]">{currentLoadingMessages[loadingStep]}</p>
          </div>
        </div>
      ) : result ? (
        <>
          <ResultCard lang={lang} t={t} result={result} onReset={() => setResult(null)} />
          <div className="mt-12 p-4 glass-card rounded-3xl border-slate-800/50">
             <div className="text-[10px] text-center text-slate-600 font-bold uppercase mb-2 tracking-widest">{t.adSpace}</div>
             <AdSenseUnit slot="RESULT_BOTTOM_AD" format="rectangle" />
          </div>
        </>
      ) : (
        <>
          <PredictionForm lang={lang} t={t} onPredict={handlePredict} />
          <div className="my-10">
            <AdSenseUnit slot="MIDDLE_HOME_AD" />
          </div>
          <div className="mt-16 text-center text-xs text-gray-600 mb-20 px-4">
            <div className="inline-flex items-center gap-3 bg-slate-900/50 px-6 py-3 rounded-full border border-slate-800/80 backdrop-blur-md shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-bold text-slate-300">
                <span className="text-purple-400">{recentName}</span> {t.recentActivity}
              </span>
            </div>
          </div>
          <section className="mt-24 space-y-12 animate-in fade-in duration-1000 px-4 mb-20">
            <div className="text-center space-y-3">
               <h3 className="text-4xl font-black text-white neon-glow tracking-tight">{t.insightsTitle}</h3>
               <p className="text-slate-500 font-bold max-w-lg mx-auto leading-relaxed">
                 استكشف كيف سيتغير العالم في 2026 بناءً على تحليلاتنا الرقمية المتقدمة.
               </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {INSIGHTS[lang].map((insight, idx) => (
                <div key={idx} className="glass-card p-8 rounded-[2.5rem] border-slate-800 hover:border-purple-500/40 transition-all group relative overflow-hidden flex flex-col h-full shadow-lg">
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-purple-400 transition-colors">{insight.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{insight.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      <div className="mt-20">
        <AdSenseUnit slot="FOOTER_TOP_AD" />
      </div>
    </>
  );

  const renderLegal = (title: string, content: string) => (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 px-4">
      <div className="glass-card p-8 md:p-12 rounded-[3rem] border-purple-500/20 relative overflow-hidden">
        <h2 className="text-4xl font-black text-white mb-8 neon-glow text-center">{title}</h2>
        <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap font-medium">
          {content}
        </div>
      </div>
      <button onClick={() => setView('home')} className="w-full py-5 rounded-2xl bg-slate-800/80 border-2 border-slate-700 text-white font-black hover:bg-slate-700 transition-all">
        {t.backHome}
      </button>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 px-4">
      <div className="glass-card p-10 md:p-14 rounded-[3rem] border-purple-500/20">
        <h2 className="text-4xl font-black text-white mb-10 neon-glow text-center">{t.contactTitle}</h2>
        {contactSubmitted ? (
          <div className="py-16 text-center space-y-6">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/50">
              <span className="text-5xl">✅</span>
            </div>
            <p className="text-2xl font-black text-white">{t.contactSuccess}</p>
            <button onClick={() => { setView('home'); setContactSubmitted(false); }} className="mt-10 px-10 py-4 bg-purple-600 rounded-full text-white font-black hover:bg-purple-500 transition-all">
              {t.backHome}
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}>
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 px-2 uppercase">{t.contactName}</label>
              <input type="text" required className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 px-2 uppercase">{t.contactEmail}</label>
              <input type="email" required className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 px-2 uppercase">{t.contactMessage}</label>
              <textarea required rows={4} className="w-full bg-slate-900 border-2 border-slate-800 rounded-2xl px-5 py-4 text-white focus:border-purple-500 outline-none resize-none font-bold" />
            </div>
            <button type="submit" className="w-full py-6 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-xl shadow-lg hover:scale-[1.02] transition-all">
              {t.contactSend}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen pb-24 px-4 relative ${lang === 'en' ? 'font-sans' : 'font-cairo'}`}>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617] overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-4">
        <Header lang={lang} onToggleLang={toggleLanguage} t={t} />
        <main className="mt-8">
          {view === 'home' && renderHome()}
          {view === 'privacy' && renderLegal(t.privacyTitle, PRIVACY_CONTENT[lang])}
          {view === 'terms' && renderLegal(t.termsTitle, TERMS_CONTENT[lang])}
          {view === 'contact' && renderContact()}
          {view === 'about' && renderLegal(t.aboutTitle, ABOUT_CONTENT[lang])}
        </main>

        <footer className="mt-24 text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em]">
            <button onClick={() => setView('home')} className="hover:text-purple-400 transition-colors">{t.backHome}</button>
            <button onClick={() => setView('about')} className="hover:text-purple-400 transition-colors">{t.aboutTitle}</button>
            <button onClick={() => setView('terms')} className="hover:text-purple-400 transition-colors">{t.footerAbout}</button>
            <button onClick={() => setView('privacy')} className="hover:text-purple-400 transition-colors">{t.footerPrivacy}</button>
            <button onClick={() => setView('contact')} className="hover:text-purple-400 transition-colors">{t.footerHelp}</button>
          </div>
          <div className="text-slate-600 text-[10px] leading-relaxed max-w-lg mx-auto font-bold uppercase">
            {t.footerDisclaimer}
            <div className="mt-3 opacity-50">{t.footerCopyright}</div>
          </div>
        </footer>
      </div>

      {showCookie && (
        <div className="fixed bottom-6 left-6 right-6 z-50 animate-in slide-in-from-bottom-full duration-700">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 border-purple-500/30 max-w-4xl mx-auto shadow-2xl">
            <div className="text-center md:text-start flex-1">
              <h5 className="text-white font-black text-lg">{t.cookieTitle} 🍪</h5>
              <p className="text-slate-400 text-sm font-medium">{t.cookieDesc}</p>
            </div>
            <button onClick={acceptCookies} className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black shadow-xl whitespace-nowrap">
              {t.cookieAccept}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
