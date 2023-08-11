import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAr, translationEn, translationFr } from "./locales";

const resources = {
  en: {
    translation: translationEn,
  },
  fr: {
    translation: translationFr,
  },
  ar: {
    translation: translationAr,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  resources,
});

export default i18n;