<template>
  <div id="app" class="container">
    <v-app id="inspire">
      <Navbar />
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  },

  data: () => ({})
};
</script>
