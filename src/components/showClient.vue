<template>
  <div>{{ clients }}</div>
</template>

<script>
import ApiService from "../services/api.js";

export default {
  name: "Clients",
  data() {
    return {
      clients: ""
    };
  },
  mounted() {
    ApiService.getOneClient(this.clients).then(clients => console.log(clients));
  }
};
</script>
