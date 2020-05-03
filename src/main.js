import Vue from "vue";
import router from "./route/router";
import "./assets/css/reset.scss";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
