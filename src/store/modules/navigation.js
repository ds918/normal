import { NAVIGATION_TARGET } from "../mutationsList";
export const navigation = {
  namespaced: true,
  state() {
    return {
      NAVIGATION_INDEX: "0",
    };
  },
  mutations: {
    [NAVIGATION_TARGET](state, index) {
      state.NAVIGATION_INDEX = index;
    },
  },
};
