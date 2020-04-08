<template>
  <v-container>
    <ClientShow v-for="(clients, i) in clients" :key="i" :client="clients" />
  </v-container>
</template>

<script>
import ApiService from "../services/api.js";
import ClientShow from "../components/Clients";
export default {
  data() {
    return {
      clients: []
    };
  },
  components: {
    ClientShow
  },
  mounted() {
    ApiService.getAllClients().then(clients => (this.clients = clients));
  }
};
</script>

<style lang="scss" scoped></style>
