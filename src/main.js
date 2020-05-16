import Vue from "vue";
import { router } from "@/route/router";
import store from "@/store/index";
import "@/lib/index";
import App from "@/App.vue";
import vuetify from '@/plugins/vuetify';
import '@/components/base'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
