import Vue from 'vue';
import VueI18n from 'vue-i18n';
import translations from '@/translations';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  messages: translations,
  silentTranslationWarn: true,
});

export default i18n;
