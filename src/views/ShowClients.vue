<template>
  <div>
    {{ clients }}
  </div>
</template>

<script>
import ApiService from "../services/api.js";
export default {
  data() {
    return {
      clients: []
    };
  },
  mounted() {
    ApiService.getAllClients().then(clients => (this.clients = clients));
  }
};
</script>

<style lang="scss" scoped></style>
