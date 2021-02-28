import Vue from 'vue';
import Vuex from 'vuex';

import packages from './packages';
import system from './system';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    packages,
    system,
  },
});
