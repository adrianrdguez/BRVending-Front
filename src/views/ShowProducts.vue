<template>
  <v-col>
    <v-card class="total" height="40px">TOTAL: {{ total }} €</v-card>
    <v-container class="d-flex">
      <ProductsList
        v-for="(item, i) in producList"
        :key="i"
        :product="item"
        v-on:changeTotalPrice="changeTotalPrice"
        v-on:substractTotalPrice="substractTotalPrice"
      />
    </v-container>
  </v-col>
</template>

<script>
import ApiService from "../services/api.js";
import ProductsList from "../components/Products.vue";
export default {
  data() {
    return {
      total: 0,
      producList: []
    };
  },
  components: {
    ProductsList
  },
  methods: {
    async getProducts() {
      await ApiService.getAllProducts().then(
        response => (this.producList = response)
      );
    },
    changeTotalPrice(newPrice) {
      this.total += newPrice;
    },
    substractTotalPrice(newPrice) {
      this.total -= newPrice;
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
.total {
  font-size: 30px;
}
</style>
