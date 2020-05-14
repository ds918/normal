import Vue from "vue";
import extra from "@/extra/extra.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(extra),
}).$mount("#app");
