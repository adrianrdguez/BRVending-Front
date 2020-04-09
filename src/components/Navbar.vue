<template>
  <div>
    <v-app-bar color="grey darken-3" dark>
      <v-toolbar-title id="title"
        >BR
        <span class="icon-title"
          ><v-icon class="icon" size="70px">mdi-alpha-v-box</v-icon></span
        >
        ending</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 50px;
}
.icon {
  margin-bottom: 6px;
  margin-left: -17px;
  margin-right: -18px;
}
</style>
