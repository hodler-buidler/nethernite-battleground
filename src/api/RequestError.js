import {
  UNEXPECTED_ERROR_STATUS,
  NOT_FOUND_ERROR_STATUS,
} from '@/config/requests/errors-statuses';
import makeError from './factories/makeError';

const RequestError = {
  default({ response }) {
    if (response?.status === 404) return this.notFound();
    return this.unexpected();
  },

  notFound() {
    return makeError({
      status: NOT_FOUND_ERROR_STATUS,
      message: 'Requested resource is not found',
    });
  },

  unexpected() {
    return makeError({
      status: UNEXPECTED_ERROR_STATUS,
      message: 'Unexpected error occurred, check your network connection',
    });
  },
};

export default RequestError;
