import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import arEG from "./i18n/ar-EG.json";
import arSA from "./i18n/ar-SA.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    "ar-EG": { translation: arEG },
    "ar-SA": { translation: arSA },
  },
  fallbackLng: "en",
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
