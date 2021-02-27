import Model from './Model';

const MODEL_KEY = 'example';

class ExampleModel extends Model {
  constructor(storageType, id) {
    super(storageType, MODEL_KEY, id);
  }

  getAll() {
    let cachedLocations = this.storage.getItem(this.modelKey);

    if (cachedLocations) {
      cachedLocations = JSON.parse(cachedLocations);
    }

    return cachedLocations;
  }

  setAll(locations) {
    const serializedLocations = JSON.stringify(locations);
    this.storage.setItem(this.modelKey, serializedLocations);
  }

  clear() {
    this.storage.removeItem(this.modelKey);
  }
}

export default ExampleModel;
