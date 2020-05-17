import Vue from "vue";
import { router } from "@/route/router";
import store from "@/store/index";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import "@/directives/index";
import "@/components/base";
import "@/filters/index";
import "@/mixins/index";
import "@/lib/index";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
