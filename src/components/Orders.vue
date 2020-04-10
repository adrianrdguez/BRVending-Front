<template>
  <v-row>
    <v-col>
      <h1 v-for="(client, idx) in clients" :key="idx">
        {{ client.client_number }} | {{ client.business_name }}
      </h1>
      <v-card v-for="(product, i) in products" :key="i">
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
