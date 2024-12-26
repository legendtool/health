import { createI18n } from 'vue-i18n';
import ar from './locales/ar.json'
import daDK from './locales/da-DK.json'
import deDE from './locales/de-DE.json'
import enGB from './locales/en-GB.json'
import enUS from './locales/en-US.json'
import esES from './locales/es-ES.json'
import frFR from './locales/fr-FR.json'
import hiIN from './locales/hi-IN.json'
import itIT from './locales/it-IT.json'
import ja from './locales/ja.json'
import koKR from './locales/ko-KR.json'
import nlNL from './locales/nl-NL.json'
import noNO from './locales/no-NO.json'
import ptBR from './locales/pt-BR.json'
import ruRU from './locales/ru-RU.json'
import svSE from './locales/sv-SE.json'
import thTH from './locales/th-TH.json'
import trTR from './locales/tr-TR.json'
import viVN from './locales/vi-VN.json'
import zhCN from './locales/zh-CN.json'
import zhHK from './locales/zh-HK.json'
import zhMO from './locales/zh-MO.json'
import zhTW from './locales/zh-TW.json'

const messages = {
  'ar' : ar,
  'da-DK' : daDK,
  'de-DE' : deDE,
  'en-GB' : enGB,
  'en-US' : enUS,
  'es-ES' : esES,
  'fr-FR' : frFR,
  'hi-IN' : hiIN,
  'it-IT' : itIT,
  'ja' : ja,
  'ko-KR' : koKR,
  'nl-NL' : nlNL,
  'no-NO' : noNO,
  'pt-BR' : ptBR,
  'ru-RU' : ruRU,
  'sv-SE' : svSE,
  'th-TH' : thTH,
  'tr-TR' : trTR,
  'vi-VN' : viVN,
  'zh-CN' : zhCN,
  'zh-HK' : zhHK,
  'zh-MO' : zhMO,
  'zh-TW' : zhTW
}

const userLocale = navigator.language || 'en-US';

const i18nSupport = createI18n({
  locale: userLocale,
  fallbackLocale: 'en-US',
  messages,
})

export default i18nSupport