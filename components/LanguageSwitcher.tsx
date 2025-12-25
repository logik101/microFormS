import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';
import { Language } from '../types';
import { FrenchFlagIcon, UKFlagIcon, HaitiFlagIcon, ChevronDownIcon } from './icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languageConfig = {
    [Language.FR]: { nameKey: 'langNameFR', Icon: FrenchFlagIcon },
    [Language.EN]: { nameKey: 'langNameEN', Icon: UKFlagIcon },
    [Language.HT]: { nameKey: 'langNameHT', Icon: HaitiFlagIcon },
  };
  
  const CurrentFlag = languageConfig[language].Icon;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);
  
  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={wrapperRef}>
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CurrentFlag className="w-6 h-4" />
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {(Object.keys(languageConfig) as Language[]).map((lang) => {
              const { nameKey, Icon } = languageConfig[lang];
              return (
                <a
                  key={lang}
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    selectLanguage(lang);
                  }}
                >
                  <Icon className="w-6 h-4 mr-3" />
                  <span>{t(nameKey)}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;