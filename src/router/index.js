import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Landing.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { Auth } from "../services";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/Signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
  {
    path: "/MainPage",
    name: "MainPage",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/MainPage.vue"),
  },
  {
    path: "/MyGrid",
    name: "MyGrid",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/MyGrid.vue"),
  },
  {
    path: "/PnP",
    name: "Pnp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/PnP.vue"),
  },
  {
    path: "/News",
    name: "News",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/News.vue"),
  },
  {
    path: "/ThruAges",
    name: "ThruAges",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/ThruAges.vue"),
  },
  {
    path: "/GettingStarted",
    name: "GettingStarted",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/GettingStarted.vue"),
  },
  {
    path: "/TaskManager",
    name: "TaskManager",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/TaskManager.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const javneStranice = ["/Login", "/Signup", "/"];
  const loginPotreban = !javneStranice.includes(to.path); // ako nisu Javne onda je nedostupno
  const user = Auth.getUser();

  if (loginPotreban && !user) {
    next("/Login");
    return;
  }
  next();
});

export default router;
