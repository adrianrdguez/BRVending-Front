<template>
  <div>
    <Order v-on:products="products" />
  </div>
</template>

<script>
import Order from "../components/Orders.vue";

export default {
  name: "Order",
  data() {
    return {
      productsPurchased: []
    };
  },
  props: {
    products: Array
  },
  components: {
    Order
  },
  computed: {
    total() {
      return this.products.length;
    },
    totalPrice() {
      return this.products.reduce((a, i) => a + i.price, 0);
    }
  },
  methods: {
    pushOrders() {
      return this.$root.$emit("products", this.productsPurchased);
    }
  }
};
</script>
<style scoped></style>
