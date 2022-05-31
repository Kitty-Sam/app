import i18next from 'i18next';
import en from '../i18n/locales/en.json';
import ru from '../i18n/locales/ru.json';
import { initReactI18next } from 'react-i18next';
import { NativeModules } from 'react-native';

i18next.use(initReactI18next).init({
  lng: NativeModules.I18nManager?.localeIdentifier.split('_')[0],
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
