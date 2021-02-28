import Model from './Model';

const MODEL_KEY = 'current_locale';

class Locale extends Model {
  constructor(storageType, id) {
    super(storageType, MODEL_KEY, id);
  }

  get() {
    return this.storage.getItem(this.modelKey);
  }

  set(locale) {
    this.storage.setItem(this.modelKey, locale);
  }
}

export default Locale;
