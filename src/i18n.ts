import { createI18n } from 'vue-i18n';

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'en', // 默认语言
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
});

export default i18n;
