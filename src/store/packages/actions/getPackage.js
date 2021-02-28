import NpmRegistrySDK from '@/api/npm-registry-sdk';

function getPackage(context, params = {}) {
  return NpmRegistrySDK.packages.get(params);
}

export default getPackage;
