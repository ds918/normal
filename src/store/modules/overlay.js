import { SHOW_OVERLAY, HIDE_OVERLAY } from "../mutationsList";
export const overlay = {
  namespaced: true,
  state() {
    return {
      OVERLAY_VALUE: false,
    };
  },
  mutations: {
    [SHOW_OVERLAY](state) {
      state.OVERLAY_VALUE = true;
    },
    [HIDE_OVERLAY](state) {
      state.OVERLAY_VALUE = false;
    },
  },
};
