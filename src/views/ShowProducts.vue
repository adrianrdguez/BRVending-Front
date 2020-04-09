<template>
  <v-col>
    <div>
      <v-card class="total" height="40px"
        >TOTAL: {{ total }} €
        <router-link to="/orders">
          <v-icon class="icon" x-large color="blue accent-4" right
            >mdi-cart</v-icon
          ></router-link
        >
      </v-card>
    </div>
    <v-container class="d-flex">
      <ProductsList
        v-for="(item, i) in producList"
        :key="i"
        :product="item"
        v-on:changeTotalPrice="changeTotalPrice"
        v-on:substractTotalPrice="substractTotalPrice"
        v-on:addtocart="addtocart"
        v-on:removeToCart="removeToCart"
      />
    </v-container>
    {{ productsPurchased }}
  </v-col>
</template>

<script>
import ApiService from "../services/api.js";
import ProductsList from "../components/Products.vue";
export default {
  data() {
    return {
      total: 0,
      id: "",
      producList: [],
      productsPurchased: []
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
    },
    addtocart(productToAdd) {
      this.productsPurchased.push(productToAdd);
    },
    removeToCart(productToRemove) {
      const productIdx = this.productsPurchased.findIndex(
        i => i._id === productToRemove._id
      );
      if (productIdx != -1) {
        this.productsPurchased.splice(productIdx, 1);
      }
    },
    createOrder() {
      const order = {
        client: this.$route.params.clientId,
        products: this.productsPurchased
      };
      ApiService.createOneOrder(order);
      this.$router.push("/orders").catch(err => console.log(err));
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.total {
  font-size: 30px;
}
.icon {
  margin-bottom: 15px;
}
</style>
