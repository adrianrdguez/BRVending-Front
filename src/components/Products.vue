<template>
  <v-card max-width="344" class="products mx-auto">
    <v-list-item>
      <v-icon class="mr-5" color="grey" size="60px">mdi-alpha-v-box</v-icon>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ product.name }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ product.category[0] }} </v-list-item-subtitle>
        <v-list-item-title class="headline">
          {{ product.price }} €
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="product.photo_url" height="194"></v-img>
    <v-card-actions>
      <v-btn icon>
        <v-icon @click="subtracProduct()" color="blue" large
          >mdi-minus-circle-outline</v-icon
        >
      </v-btn>
      <v-btn text color="deep-purple accent-4">
        <p>{{ product.stock }} in stock</p>
      </v-btn>
      <v-btn text color="deep-purple">
        <p>{{ units }} units</p>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="sumProduct()" color="blue" large
          >mdi-plus-circle-outline</v-icon
        >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      units: 0,
      suma: 0
    };
  },
  props: {
    product: Object
  },
  methods: {
    sumProduct() {
      this.$emit("addtocart", this.product);
      this.$emit("changeTotalPrice", this.product.price);
      return this.units++;
    },
    subtracProduct() {
      this.$emit("deleteProduct");
      this.$emit("substractTotalPrice", this.product.price);
      return this.units--;
    },
    total() {
      return (this.suma = this.units * this.product.price);
    }
  }
};
</script>

<style lang="scss" scoped>
.products {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
p {
  font-size: 15px;
  margin-top: 5px;
}
</style>
