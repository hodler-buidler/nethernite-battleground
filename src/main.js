import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import vuetify from '@/plugins/vuetify';
import GlobalFilters from '@/plugins/GlobalFilters';
import AppStorage from '@/plugins/AppStorage';

import UiIconicText from '@/components/ui/UiIconicText/UiIconicText.vue';

Vue.component('UiIconicText', UiIconicText);

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  keyName: 'head',
  refreshOnceOnNavigation: true,
});
Vue.use(GlobalFilters);
Vue.use(AppStorage);

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
