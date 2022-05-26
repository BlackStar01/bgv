import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { MotionPlugin } from "@vueuse/motion";

library.add(faPhone);


const routes = [
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: "/agency",
    name: "agency",
    component: import("./views/Agency.vue"),
  },
  {
    path: "/gv",
    name: "good-vibes",
    component: import('./views/GoodVibes.vue'),
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).component("fa", FontAwesomeIcon).use(router).use(MotionPlugin).mount("#app");
