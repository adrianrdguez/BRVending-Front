<template>
  <v-container>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>

    <Ventas v-for="(clients, i) in clients" :key="i" :client="clients" />
  </v-container>
</template>

<script>
import ApiService from "../services/api.js";
import Ventas from "../components/Ventas.vue";
export default {
  data() {
    return {
      clients: [],
      items: [
        {
          text: "HOME",
          disabled: false,
          href: "/home"
        },
        {
          text: "CLIENTES",
          disabled: true
        }
      ]
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
