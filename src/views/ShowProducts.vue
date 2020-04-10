<template>
  <div>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
    <v-icon
      @click="createOrder()"
      class="icon"
      x-large
      color="blue accent-4"
      right
      >mdi-cart</v-icon
    >

    <h2 class="my-5 text-right">TOTAL: {{ total }} €</h2>

    <v-row>
      <v-col v-for="(item, i) in producList" :key="i" cols="4">
        <Product
          :product="item"
          v-on:changeTotalPrice="changeTotalPrice"
          v-on:substractTotalPrice="substractTotalPrice"
          v-on:addtocart="addtocart"
          v-on:removeToCart="removeToCart"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApiService from "../services/api.js";
import Product from "../components/Products.vue";
export default {
  name: "Products",
  data() {
    return {
      total: 0,
      id: "",
      producList: [],
      productsPurchased: [],
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
          disabled: true
        },
        {
          text: "PEDIDOS",
          disabled: false,
          href: "/ShowOrders"
        }
      ]
    };
  },
  components: {
    Product
  },
  methods: {
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
        clients: this.$route.params.clientId,
        products: this.productsPurchased
      };
      console.log(order);
      ApiService.createOneOrder(order).then(data => {
        console.log(data);
      });
    }
  },
  async created() {
    let response = await ApiService.getAllProducts();
    this.producList = response;
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
