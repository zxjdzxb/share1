import {createRouter, createWebHashHistory} from "vue-router";
const routes = [
  {
    path: "/father",
    name: "Father",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Father.vue"),
  },
  {
    path: "/watch",
    name: "Watch",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/watchEffect.vue"),
  },
  {
    path: "/useAttrs",
    name: "useAttrs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/useAttrs.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
