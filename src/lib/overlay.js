import store from "@/store/index";
export const showoverlay = () => {
  store.commit("overlay/SHOW_OVERLAY");
};
export const hideoverlay = () => {
  store.commit("overlay/HIDE_OVERLAY");
};
