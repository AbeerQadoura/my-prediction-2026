
import React from 'react';
import { Language, TranslationSchema } from '../types';

interface Props {
  lang: Language;
  onToggleLang: () => void;
  t: TranslationSchema;
}

const Header: React.FC<Props> = ({ lang, onToggleLang, t }) => {
  return (
    <header className="text-center py-10 space-y-4 relative">
      <div className="absolute top-4 right-4 md:right-0">
        <button 
          onClick={onToggleLang}
          className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-bold text-gray-300 hover:text-white transition-all hover:border-purple-500"
        >
          {lang === 'ar' ? 'English 🇺🇸' : 'العربية 🇸🇦'}
        </button>
      </div>

      <div className="inline-block p-2 px-6 rounded-full bg-purple-900/30 border border-purple-500/50 text-purple-300 text-sm font-bold tracking-widest uppercase mb-2 animate-pulse">
        {t.headerBadge}
      </div>
      <h1 className="text-5xl md:text-8xl font-black neon-glow bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 leading-tight py-2">
        {t.headerTitle}
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed px-4">
        {t.headerDesc}
      </p>
    </header>
  );
};

export default Header;
