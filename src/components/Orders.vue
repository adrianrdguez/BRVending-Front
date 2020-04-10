<template>
  <v-row>
    <v-col>
      <h1 v-for="client in clients" :key="client.client_number">
        {{ client.client_number }} | {{ client.business_name }}
      </h1>
      <v-card v-for="product in products" :key="product._id">
        {{ product.name }} - {{ product.price }}€
      </v-card>
      <v-card>TOTAL = {{ total }}€</v-card>

      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    clients: Array,
    products: Array
  },
  computed: {
    total: function() {
      return this.products.reduce((curr, p) => {
        return curr + p.price;
      }, 0);
    }
  }
};
</script>
