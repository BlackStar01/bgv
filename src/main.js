import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from './views/Home.vue'

const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: false },
  },
  /* {
    path: "/agency",
    component: () => import("./views/Agency.vue"),
  }, */
  /* { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }, */
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount("#app");
