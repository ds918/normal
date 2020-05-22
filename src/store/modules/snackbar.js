import { SHOW_SNACKBAR, CLOSE_SNACKBAR } from '../mutationsList'
export const snackbar = {
  namespaced: true,
  state() {
    return {
      SNACKBAR_OPTIONS: {},
      SNACKBAR_SHOW: false,
    };
  },
  mutations: {
    [SHOW_SNACKBAR](state, options) {
      state.SNACKBAR_SHOW = true;
      state.SNACKBAR_OPTIONS = Object.assign(state.SNACKBAR_OPTIONS, options);
    },
    [CLOSE_SNACKBAR](state) {
      state.SNACKBAR_SHOW = false;
      state.SNACKBAR_OPTIONS = {};
    }
  }
}
