import JSdelivrSDK from '@/api/jsdelivr-sdk';

function loadMostPopularPackages(context, params = {}) {
  return JSdelivrSDK.packages.mostPopular(params);
}

export default loadMostPopularPackages;
