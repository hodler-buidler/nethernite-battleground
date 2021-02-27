import { SET_EXAMPLE_MUTATION } from '../mutations-types';

function changeExample({ commit }, payload) {
  commit(SET_EXAMPLE_MUTATION, payload);
}

export default changeExample;
