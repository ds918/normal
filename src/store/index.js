import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
export const store = new vuex.Store({
  state: {
    count: 0,
    list: 100,
  },
  mutations: {
    add(state) {
      ++state.count;
    },
    less(state) {
      --state.list;
    },
  },
  getters: {
    change(state, getter) {
      return state.count + "have changed" + getter.other;
    },
    other(state) {
      return state.list;
    },
    fn: (state) => (id) => {
      return state.list + "idlist  " + id;
    },
  },
});
