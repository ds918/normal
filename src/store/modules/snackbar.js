export const snackbar = {
  namespaced: true,
  state() {
    return {
      SNACKBAR_OPTIONS: {},
      SNACKBAR_SHOW: false
    }
  },
  getters: {},
  mutations: {
    SHOW_SNACKBAR: function (state, options) {
      state.SNACKBAR_SHOW = true;
      state.SNACKBAR_OPTIONS = Object.assign(state.SNACKBAR_OPTIONS, options)
    },
    CLOSE_SNACKBAR: function (state) {
      state.SNACKBAR_SHOW = false;
    }
  },
  actions: {
    fetchSnackbar({ commit, state }, options) {
      if (state.SNACKBAR_SHOW) return;
      commit('SHOW_SNACKBAR', options)
      setTimeout(() => {
        commit('CLOSE_SNACKBAR')
      }, options.timeout);
    }
  }
}