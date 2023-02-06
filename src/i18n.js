import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  default as Backend,
  default as HttpBackend
} from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const apiKey = "tGfLTKbKcHqX8Prd2SdOCA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(Backend)
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en", "hi", "ar", "bn"],

    backend: {
      loadPath: loadPath,
    },
  });
