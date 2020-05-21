import Vue from "vue";
import { router } from "@/route/router";
import store from "@/store/index";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import "@/components/base";
import "@/directives/index";
import "@/filters/index";
import "@/mixins/index";
import "@/lib/index";
import "@/config/index";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");