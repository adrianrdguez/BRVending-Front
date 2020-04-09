<template>
  <v-card class="mt-2">
    <router-link :to="`/clients/${client._id}`">
      <v-card-text id="card">
        <div class="text-primary d-flex align-start flex-column mb-6">
          {{ client.shop_name }}
        </div>
        <div class="d-flex align-start">{{ client.client_number }}</div>
        <div class="d-flex align-end flex-column">
          {{ client.zipcode }} {{ client.address }}
        </div>
      </v-card-text>
    </router-link>
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
#card {
  font-size: 25px;
}
</style>
