import Vue from "vue";
import router from "@/route/router";
import store from "@/store/index";
import "@/lib/index";
import App from "@/App.vue";
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (Vue.$cancelList.length) {
    Vue.$cancelList.forEach((item) => {
      item.cancel(item.message);
    });
    Vue.$cancelList = [];
  }
  document.title = to.matched.map((item) => item.meta.title).join("  |  ");
  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
