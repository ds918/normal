import Vue from "vue";
import vuex from "vuex";
import { modules } from './modules/index'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
Vue.use(vuex);
export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {}
  },
  getters,
  mutations,
  actions,
  modules
});