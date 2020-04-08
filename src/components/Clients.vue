<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div>{{ client.shop_name }}</div>
        <div class="text--primary">
          Numero de Cliente: {{ client.client_number }}
        </div>
        <div class="d-flex justify-end">{{ client.zipcode }}</div>
        <router-link :to="`/clients/${client._id}`">LINK</router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    client: Object
  }
};
</script>

<style lang="scss" scoped></style>
