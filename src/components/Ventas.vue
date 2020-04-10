<template>
  <v-card
    class="mt-4"
    color="orange lighten-4"
    :to="{ name: 'ShowProducts', params: { clientId: client._id } }"
  >
    <v-card-text id="card">
      <div class="text-primary d-flex align-start flex-column mb-6">
        {{ client.shop_name }}
      </div>
      <div class="d-flex align-start">{{ client.client_number }}</div>
      <div class="d-flex align-end flex-column">
        {{ client.zipcode }} {{ client.address }}
      </div>
      <div class="d-flex justify-center"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    client: Object
  },
  computed: {}
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
