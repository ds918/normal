import store from "@/store/index";
export default function({
  text = "hello,world",
  timeout = 1500,
  color = "dark",
} = {}) {
  timeout = parseInt(timeout);
  if (typeof arguments[0] === "string") text = arguments[0];
  store.commit("snackbar/SHOW_SNACKBAR", { text, timeout, color });
}
