<template>
  <v-row class="d-flex justify-center">
    <v-card class="bold mt-2 col-11">
      <div class="mt-5">
        <p>
          Numero de cliente: <br />
          <v-divider></v-divider>
        </p>
        {{ client.client_number }}
      </div>
      <div class="mt-5">
        <p>
          Cliente:
          <v-divider></v-divider>
        </p>
        {{ client.shop_name }}
        <div class="mt-5">
          <p>
            Razon Social: <br />
            <v-divider></v-divider>
          </p>
          {{ client.business_name }}
        </div>
        <div class="mt-5">
          <p>
            DNI: <br />
            <v-divider></v-divider>
          </p>
          {{ client.VATIN }}
        </div>
        <div class="mt-5">
          <p>
            Email: <br />
            <v-divider v></v-divider>
          </p>
          {{ client.email }}
        </div>
        <div class="mt-5">
          <p>
            Horario: <br />
            <v-divider></v-divider>
          </p>
          {{ client.opening_hours }}
        </div>
        <div class="mt-5">
          <p>
            Codigo Postal: <br />
            <v-divider></v-divider>
          </p>
          {{ client.zipcode }}
        </div>
        <div class="mt-5">
          <p>
            Teléfono: <br />
            <v-divider></v-divider>
          </p>
          {{ client.mobile }}
        </div>
        <div class="mt-5">
          <p>
            Persona a cargo: <br />
            <v-divider></v-divider>
          </p>
          {{ client.business_manager }}
        </div>
      </div>
    </v-card>
  </v-row>
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

<style scoped>
p {
  font-weight: 600;
}
div {
  font-weight: 300;
}
</style>
