import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

const language = navigator.language ? navigator.language.split('-')[0] : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'en',
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
