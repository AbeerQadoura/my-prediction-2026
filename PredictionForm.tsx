
import React, { useState } from 'react';
import { Category, Language, TranslationSchema } from '../types';
import { CATEGORIES_DATA, SUGGESTED_NAMES_DATA, ZODIAC_SIGNS } from '../constants';

interface Props {
  lang: Language;
  t: TranslationSchema;
  onPredict: (name: string, category: Category, zodiac: string) => void;
}

const PredictionForm: React.FC<Props> = ({ lang, t, onPredict }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Category>(Category.MONEY);
  const [zodiac, setZodiac] = useState(ZODIAC_SIGNS[lang][0].name);
  const [error, setError] = useState('');

  const categories = CATEGORIES_DATA[lang];
  const suggestedNames = SUGGESTED_NAMES_DATA[lang];
  const zodiacs = ZODIAC_SIGNS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(t.errorName);
      return;
    }
    setError('');
    onPredict(name, category, zodiac);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6 glass-card p-8 md:p-10 rounded-[2.5rem] border-purple-500/20 shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl -mr-16 -mt-16"></div>
        
        <div className="space-y-4 relative z-10">
          <label className="block text-sm font-bold text-gray-300 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]"></span>
            {t.inputNameLabel}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.inputNamePlaceholder}
            className="w-full bg-slate-900/80 border-2 border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all text-lg font-bold placeholder:text-gray-600"
          />
          
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[10px] text-gray-500 w-full mb-1 font-black uppercase tracking-widest">{t.suggestionsLabel}</span>
            {suggestedNames.map((sName) => (
              <button
                key={sName}
                type="button"
                onClick={() => setName(sName)}
                className="text-[10px] px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-gray-400 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all active:scale-90"
              >
                {sName}
              </button>
            ))}
          </div>
          
          {error && <p className="text-red-400 text-xs mt-1 animate-pulse font-bold flex items-center gap-1">
            <span>⚠️</span> {error}
          </p>}
        </div>

        <div className="space-y-3 relative z-10">
          <label className="block text-sm font-bold text-gray-300">{t.inputZodiacLabel}</label>
          <div className="relative">
            <select 
              value={zodiac}
              onChange={(e) => setZodiac(e.target.value)}
              className="w-full bg-slate-900/80 border-2 border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 appearance-none cursor-pointer font-bold"
            >
              {zodiacs.map(z => (
                <option key={z.name} value={z.name} className="bg-slate-900">{z.icon} {z.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <label className="block text-sm font-bold text-gray-300">{t.inputCategoryLabel}</label>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`p-4 rounded-2xl border-2 text-xs font-black transition-all duration-300 relative overflow-hidden group ${
                  category === cat.id
                    ? `bg-gradient-to-br ${cat.color} text-white border-transparent scale-105 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]`
                    : 'bg-slate-900/50 text-gray-500 border-slate-800 hover:border-slate-600'
                }`}
              >
                <span className="relative z-10 uppercase tracking-tighter">{cat.label}</span>
                {category === cat.id && (
                  <span className="absolute inset-0 bg-white/10 animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="group w-full py-6 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-black text-xl shadow-[0_20px_40px_-15px_rgba(168,85,247,0.5)] hover:scale-[1.03] active:scale-95 transition-all duration-300 neon-glow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <span className="relative z-10 flex items-center justify-center gap-3">
            {t.submitBtn}
            <span className="text-2xl group-hover:rotate-12 transition-transform">🚀</span>
          </span>
        </button>
      </form>

      <div className="max-w-md mx-auto flex flex-col items-center gap-4 text-gray-500">
        <div className="flex -space-x-3 rtl:space-x-reverse">
          {[1,2,3,4,5].map(i => (
            <img 
              key={i} 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 shadow-lg"
            />
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-purple-600 flex items-center justify-center text-[10px] text-white font-black z-10 shadow-lg">
            +10k
          </div>
        </div>
        <span className="text-xs font-bold text-slate-400 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800/50 backdrop-blur-sm">
          ✨ {t.socialProof}
        </span>
      </div>
    </div>
  );
};

export default PredictionForm;
