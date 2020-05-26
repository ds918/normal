import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
Vue.use(VueRouter);
export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      meta: { title: "index" },
      component: () => import("@/views/Index"),
    },
    {
      path: "/test",
      name: "test",
      meta: { title: "test" },
      component: () => import("@/views/test"),
    },
    {
      path: "/test1",
      name: "test1",
      meta: { title: "test1" },
      component: () => import("@/views/test1"),
    },
    {
      path: "/line",
      name: "line",
      meta: { title: "line" },
      component: () => import("@/views/line"),
    },
    {
      path: "/netError",
      name: "netError",
      meta: { title: "netError" },
      component: () => import("@/assets/netError/netError.vue"),
    },
    {
      path: "/404",
      name: "404",
      meta: "404",
      component: () => import("@/assets/404/404.vue"),
    },
    {
      path: "*",
      redirect: { name: "404" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return goTo(savedPosition.y);
    } else {
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (Vue.$_cancelList.length) {
    Vue.$_cancelList.forEach((item) => {
      item.cancel(item.message);
    });
    Vue.$_cancelList = [];
  }
  document.title = to.matched.map((item) => item.meta.title).join("  |  ");
  next();
});
