import NpmRegistrySDK from '@/api/npm-registry-sdk';

function searchPackages(context, params = {}) {
  return NpmRegistrySDK.packages.search(params);
}

export default searchPackages;
