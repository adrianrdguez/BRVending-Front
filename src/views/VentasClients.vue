<template>
  <v-container>
    <Ventas v-for="(clients, i) in clients" :key="i" :client="clients" />
  </v-container>
</template>

<script>
import ApiService from "../services/api.js";
import Ventas from "../components/Ventas.vue";
export default {
  data() {
    return {
      clients: []
    };
  },
  components: {
    Ventas
  },
  mounted() {
    ApiService.getAllClients().then(clients => (this.clients = clients));
  }
};
</script>

<style lang="scss" scoped></style>
