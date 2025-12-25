
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';
import { Language } from '../types';

export const useTranslations = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // Fallback to French or the key itself if translation is missing
    return translations[key]?.[Language.FR] || key;
  };

  return { t, language };
};
