import capitalizeFirst from '@/utils/filters/capitalizeFirst';

const GlobalFilters = {
  install(Vue) {
    Vue.prototype.$filters = {
      capitalizeFirst,
    };
  },
};

export default GlobalFilters;
