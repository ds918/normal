export const navigation = {
  namespaced: true,
  state() {
    return {
      NAVIGATION_INDEX: "0"
    };
  },
  getters: {
    SET_INDEX(state) {
      return state.NAVIGATION_INDEX
    }
  }
}
