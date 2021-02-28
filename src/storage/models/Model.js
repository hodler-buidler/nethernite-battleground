import getStorageByType from '../utils/getStorageByType';
import key from '../utils/key';

class Model {
  constructor(storageType, modelKey, id) {
    this.storage = getStorageByType(storageType);
    this.modelKey = key(modelKey, id);
  }

  clear() {
    this.storage.removeItem(this.modelKey);
  }
}

export default Model;
