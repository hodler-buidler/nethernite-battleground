import { SET_ERROR_MESSAGE } from '../mutations-types';

function setErrorMessage({ commit }, message) {
  commit(SET_ERROR_MESSAGE, message);
}

export default setErrorMessage;
