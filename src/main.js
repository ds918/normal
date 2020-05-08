import Vue from "vue";
import "lib-flexible/flexible.js";
import router from "./route/router";
import { store } from '@/store/index'
import "./assets/css/reset.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.matched.map((item) => item.meta.title).join("  |  ");
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
