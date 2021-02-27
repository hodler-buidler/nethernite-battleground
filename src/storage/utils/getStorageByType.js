import { LOCAL_STORAGE_TYPE } from '@/config/storage/types';
import LocalStorage from '../LocalStorage';

function getStorageByType(type) {
  const storages = {
    [LOCAL_STORAGE_TYPE]: new LocalStorage(),
  };

  if (!storages[type]) {
    throw new Error(`Storage type ${type} is undefined`);
  }

  return storages[type];
}

export default getStorageByType;
