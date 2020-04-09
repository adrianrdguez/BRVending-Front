<template>
  <div>
    HOLA SOY UN ORDER
    <Order />
  </div>
</template>

<script>
import Order from "../components/Order.vue";

export default {
  name: "Order",
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
    clear() {
      this.$emit("clearCart");
    }
  }
};
</script>
<style scoped></style>
