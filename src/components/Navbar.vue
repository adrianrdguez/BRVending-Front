<template>
  <div>
    <v-app-bar height="120px" color="grey darken-3" dark>
      <v-toolbar-title class="mb-5" id="title"
        >BR
        <span class="icon-title"
          ><v-icon class="icon" size="70px">mdi-alpha-v-box</v-icon></span
        >
        ending</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon class="icon-title" size="80px">mdi-exit-to-app</v-icon>
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
  font-size: 90px;
}
.icon {
  margin-bottom: 6px;
  margin-left: -17px;
  margin-right: -18px;
}
.icon-title {
  right: 20px;
  margin-top: 10px;
}
</style>
