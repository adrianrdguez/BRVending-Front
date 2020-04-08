import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Clients from "../views/ShowClients.vue";
import ShowClient from "../views/ShowClient.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients
  },
  {
    path: "/clients/:client",
    name: "Clients",
    component: ShowClient
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
