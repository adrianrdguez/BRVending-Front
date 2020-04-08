<template>
  <div id="app" class="container">
    <Navbar />
    <router-view />
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
