import Vue from "vue";
Vue.directive("test", {
  bind(el) {
    el.innerHTML = "test";
  },
  inserted() { },
  update() { },
  componentUpdated() { },
  unbind() { },
});
