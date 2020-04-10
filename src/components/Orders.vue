<template>
  <div>
    HOLA
    {{ productsPurchased }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsPurchased: []
    };
  },
  methods: {
    pushOrders() {
      return this.$root.$emit("products", this.productsPurchased);
    }
  }
};
</script>

<style lang="scss" scoped></style>
