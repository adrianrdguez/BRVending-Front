<template>
  <div>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-col v-for="(order, i) in orders" :key="i">
      <Order :orderProp="orders" />
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
      orders: [],
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
  props: {
    products: Array
  },
  components: {
    Order
  },
  computed: {},
  methods: {
    async getOrders() {
      await ApiService.getAllOrders().then(orders => (this.orders = orders));
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style scoped></style>
