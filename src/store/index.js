import Vue from "vue";
import vuex from "vuex";
import { module } from './modules/module'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
Vue.use(vuex);
export const store = new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {}
  },
  getters,
  mutations,
  actions,
  modules: { module }
});