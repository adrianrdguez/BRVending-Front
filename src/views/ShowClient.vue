<template>
  <div>{{ client }}</div>
</template>

<script>
import ApiService from "../services/api.js";
export default {
  data() {
    return {
      client: {}
    };
  },
  methods: {
    async getClient() {
      const clientId = await ApiService.getOneClient(this.$route.params.client);
      return (this.client = clientId);
    }
  },
  mounted() {
    this.getClient();
  }
};
</script>

<style lang="scss" scoped></style>
