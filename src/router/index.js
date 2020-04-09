import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Clients from "../views/ShowClients.vue";
import ShowClient from "../views/ShowClient.vue";
import Ventas from "../views/Ventas.vue";
import Products from "../views/ShowProducts.vue";
import ShowOrder from "../views/ShowOrder.vue";
import OrderList from "../views/ShowOrderList.vue";

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
    path: "/ventas",
    name: "Ventas",
    component: Ventas
  },
  {
    path: "/ShowProducts",
    name: "ShowProducts",
    component: Products
  },
  {
    path: "/clients/:client",
    name: "Clients",
    component: ShowClient
  },
  {
    path: "/orders",
    name: "ShowOrderList",
    component: OrderList
  },
  {
    path: "/orders/:orderId",
    name: "Order",
    component: ShowOrder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
