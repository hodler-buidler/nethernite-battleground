import getStorageByType from '../utils/getStorageByType';
import key from '../utils/key';

class Model {
  constructor(storageType, modelKey, id) {
    this.storage = getStorageByType(storageType);
    this.modelKey = key(modelKey, id);
  }
}

export default Model;
