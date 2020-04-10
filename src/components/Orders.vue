<template>
  <v-row>
    <v-col>
      <h1>
        {{ orderProp[0].clients[0].client_number }}
        {{ orderProp[0].clients[0].shop_name }}
      </h1>
      <v-divider></v-divider>
      <ul v-for="(product, i) in orderProp[0].products" :key="i">
        <li>
          {{ product.name }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      productsPurchased: []
    };
  },
  props: {
    orderProp: Object
  }
};
</script>
