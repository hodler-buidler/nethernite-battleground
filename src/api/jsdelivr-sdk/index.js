import http from './http';
import Response from '../Response';
import RequestError from '../RequestError';

import GetMostPopularPackages from './requests/GetMostPopularPackages';

const DEPENDENCIES = { http, Response, RequestError };

const Sdk = Object.freeze({
  packages: {
    mostPopular: GetMostPopularPackages(DEPENDENCIES),
  },
});

export default Sdk;
