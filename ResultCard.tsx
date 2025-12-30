
import React, { useMemo } from 'react';
import { PredictionResult, Language, TranslationSchema } from './types';
import { CATEGORIES_DATA, ZODIAC_SIGNS } from './constants';

interface Props {
  lang: Language;
  t: TranslationSchema;
  result: PredictionResult;
  onReset: () => void;
}

const ResultCard: React.FC<Props> = ({ lang, t, result, onReset }) => {
  const categories = CATEGORIES_DATA[lang];
  const categoryInfo = categories.find(c => c.id === result.category);
  const zodiacInfo = ZODIAC_SIGNS[lang].find(z => z.name === result.zodiac);

  // توليد أرقام عشوائية ثابتة لهذا الشخص لإضافة عامل "التقرير"
  const stats = useMemo(() => ({
    luckFactor: Math.floor(Math.random() * 20) + 80, // حظ بين 80-100%
    energyLevel: Math.floor(Math.random() * 30) + 70, // طاقة بين 70-100%
    cosmicFrequency: (Math.random() * 5 + 432).toFixed(1), // تردد كوني حول 432hz
    destinyProgress: Math.floor(Math.random() * 40) + 60,
  }), []);

  const shareOnWhatsApp = () => {
    const text = `🌟 ${t.resultTitle} 2026 🌟\n\n"${result.prediction}"\n\nتوقعي الشخصي من موقع مُتنبئ 2026 جربه الآن: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t.copySuccess);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
      <div 
        className="relative overflow-hidden p-1 rounded-[2.5rem] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-2xl"
      >
        <div className="bg-[#0f172a] rounded-[2.3rem] p-6 md:p-10 relative overflow-hidden flex flex-col items-center text-center">
          {/* خلفية جمالية */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>
          
          <div className="flex gap-4 mb-6">
            <div className={`p-5 rounded-3xl bg-gradient-to-r ${categoryInfo?.color} shadow-lg animate-float`}>
              <span className="text-5xl">{categoryInfo?.label.split(' ').pop()}</span>
            </div>
            <div className="p-5 rounded-3xl bg-slate-800 border border-slate-700 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <span className="text-5xl">{zodiacInfo?.icon}</span>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white mb-2 neon-glow tracking-tight">{result.name}</h2>
          <div className="bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-700 text-xs text-purple-400 font-bold mb-8">
             {t.resultTitle} 2026 | {result.zodiac}
          </div>
          
          <div className="relative mb-10">
            <span className="absolute -top-6 -left-4 text-6xl text-purple-500/20 font-serif">“</span>
            <p className="text-2xl font-bold leading-relaxed text-gray-100 italic relative z-10 px-4">
              {result.prediction}
            </p>
            <span className="absolute -bottom-10 -right-4 text-6xl text-pink-500/20 font-serif">”</span>
          </div>

          {/* عدادات ترفيهية احترافية */}
          <div className="w-full grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-1 text-right">
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <span>{lang === 'ar' ? 'مؤشر الحظ' : 'Luck Index'}</span>
                <span>{stats.luckFactor}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${stats.luckFactor}%` }}></div>
              </div>
            </div>
            <div className="space-y-1 text-right">
              <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <span>{lang === 'ar' ? 'مستوى الطاقة' : 'Energy Level'}</span>
                <span>{stats.energyLevel}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: `${stats.energyLevel}%` }}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full mb-8">
            <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 group hover:border-purple-500/50 transition-all">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{t.luckyColorLabel}</span>
              <div 
                className="w-5 h-5 rounded-full mx-auto mb-1 border-2 border-white/20 shadow-inner" 
                style={{ backgroundColor: result.luckyColor.hex }}
              ></div>
              <span className="text-[10px] text-white font-black">{result.luckyColor.name}</span>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 group hover:border-pink-500/50 transition-all">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{t.spiritAnimalLabel}</span>
              <span className="text-2xl block mb-1 transform group-hover:scale-125 transition-transform">{result.spiritAnimal.emoji}</span>
              <span className="text-[10px] text-white font-black leading-tight">{result.spiritAnimal.name}</span>
            </div>
            <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800 group hover:border-blue-500/50 transition-all">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{t.luckyHourLabel}</span>
              <span className="text-2xl block mb-1">⚡</span>
              <span className="text-[10px] text-white font-black">{result.luckyHour}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 w-full px-4 mb-8 bg-slate-900/30 py-4 rounded-3xl border border-slate-800/50">
            <div className="flex-1 text-center">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{t.luckyNumberLabel}</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600">{result.luckyNumber}</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="flex-1 text-center">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{t.luckyMonthLabel}</span>
              <span className="text-lg font-black text-white">{result.luckyMonth}</span>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="flex-1 text-center">
              <span className="text-[10px] text-gray-500 block mb-1 font-bold">{lang === 'ar' ? 'التردد' : 'Freq'}</span>
              <span className="text-xs font-mono text-cyan-400 font-bold">{stats.cosmicFrequency}Hz</span>
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center gap-1 opacity-80">
            <div className="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-black">{t.generatedBy}</div>
            <div className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-glow">
              {t.headerTitle}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-2">
          <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest">{t.shareTitle}</p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={shareOnWhatsApp}
              className="group flex items-center justify-center gap-3 py-5 rounded-2xl bg-green-600 text-white font-black hover:bg-green-500 transition-all shadow-xl hover:-translate-y-1"
            >
              <span className="text-xl">💬</span>
              <span>{t.shareWhatsapp}</span>
            </button>
            <button
              onClick={copyLink}
              className="group flex items-center justify-center gap-3 py-5 rounded-2xl bg-slate-800 text-white font-black hover:bg-slate-700 transition-all shadow-xl border border-slate-700 hover:-translate-y-1"
            >
              <span className="text-xl">🔗</span>
              <span>{t.shareCopy}</span>
            </button>
          </div>
          <button
            onClick={onReset}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-slate-800 text-gray-400 font-bold hover:text-white hover:bg-slate-800/40 transition-all active:scale-95"
          >
            {t.resetBtn}
          </button>
      </div>
    </div>
  );
};

export default ResultCard;
