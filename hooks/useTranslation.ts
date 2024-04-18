import { getLocales } from 'expo-localization';
import de from '@/i18n/messages/de.json';
import en from '@/i18n/messages/en.json';

export const useTranslation = () => {
  const locales = getLocales();
  const preferredLanguage = locales[0].languageCode;

  let translations = en;

  switch (preferredLanguage) {
    case 'de':
      translations = de;
    case 'en':
      translations = en;
  }

  function t(path: string): string {
    const keys: string[] = path.split('.');
    let value: any = translations;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return '';
      }
    }

    return value;
  }
  return t;
};
