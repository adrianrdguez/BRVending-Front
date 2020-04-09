<template>
  <v-card class="mt-2">
    <v-card-text id="card">
      <div class="text-primary d-flex align-start flex-column mb-6">
        {{ client.shop_name }}
      </div>
      <div class="d-flex align-start">{{ client.client_number }}</div>
      <div class="d-flex align-end flex-column">
        {{ client.zipcode }} {{ client.address }}
      </div>
      <div class="d-flex justify-center">
        <router-link to="/ShowProducts">Iniciar Venta</router-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    client: Object
  }
};
</script>

<style scoped>
.venta {
  color: green;
}
#card {
  font-size: 25px;
}
</style>
