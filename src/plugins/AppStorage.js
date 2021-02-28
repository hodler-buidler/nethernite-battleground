import { DEFAULT_STORAGE_TYPE } from '@/config/general';
import Locale from '@/storage/models/Locale';

const AppStorage = {
  install(Vue) {
    Vue.prototype.$LocaleStorage = new Locale(DEFAULT_STORAGE_TYPE);
  },
};

export default AppStorage;
