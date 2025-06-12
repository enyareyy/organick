import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import EN from './lang/en.json'
import RU from './lang/ru.json'

i18next
.use(I18nextBrowserLanguageDetector)
.use(initReactI18next)
.init({
    lng:'en',
    debug:true,
    resources:{
        en:{
            translation:EN
        },
        ru:{
            translation:RU
        }
    }
});

export default i18next