<template>
  <div>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-col v-for="(order, id) in ordersArray" :key="id">
      <Order :clients="order.clients" :products="order.products" />
      <v-divider></v-divider>
    </v-col>
  </div>
</template>

<script>
import Order from "../components/Orders.vue";
import ApiService from "../services/api.js";

export default {
  name: "Orders",
  data() {
    return {
      ordersArray: [],
      items: [
        {
          text: "HOME",
          disabled: false,
          href: "/home"
        },
        {
          text: "CIENTES",
          disabled: false,
          href: "/ventas"
        },
        {
          text: "PRODUCTS",
          disabled: false
        },
        {
          text: "PEDIDOS",
          disabled: true,
          href: "/ShowOrders"
        }
      ]
    };
  },
  components: {
    Order
  },
  async created() {
    let response = await ApiService.getAllOrders();
    this.ordersArray = response;
  }
};
</script>
<style scoped></style>
