import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      meta: "index",
      component: () => import("@/views/index"),
    },
    {
      path: "/ds",
      name: "ds",
      component: () => import("@/views/ds"),
      children: [
        {
          path: "dss",
          component: () => import("@/views/dss"),
        },
      ],
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
});
