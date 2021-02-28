import http from './http';
import Response from '../Response';
import RequestError from '../RequestError';

import SearchPackages from './requests/SearchPackages';
import GetPackage from './requests/GetPackage';

const DEPENDENCIES = { http, Response, RequestError };

const Sdk = Object.freeze({
  packages: {
    search: SearchPackages(DEPENDENCIES),
    get: GetPackage(DEPENDENCIES),
  },
});

export default Sdk;
