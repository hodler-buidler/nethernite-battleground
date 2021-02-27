import getState from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const example = {
  namespaced: true,
  state: getState(),
  getters,
  mutations,
  actions,
};

export default example;
