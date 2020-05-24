import Vue from "vue";
import "amfe-flexible";
import { router } from "@/route/router";
import store from "@/store/index";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import "@/plugins/vant";
import "@/components/base";
import "@/directives/index";
import "@/filters/index";
import "@/mixins/index";
import "@/lib/index";
import "@/config/index";
import "@/styles/index.scss";

/**
 * @todo 正式环境注释
 */
import "../mock/index";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
