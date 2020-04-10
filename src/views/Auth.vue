<template>
  <div>
    <v-card color="orange darken-4">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">BRVending</h1>
      </v-card-title>
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item class="tabnames">
          <v-col class="card">
            <Login />
          </v-col>
          <v-card color="basil" flat></v-card>
        </v-tab-item>
        <v-tab-item class="tabnames">
          <v-col class="card">
            <Signup />
          </v-col>
          <v-card color="basil" flat></v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Sign.vue";

export default {
  data() {
    return {
      tab: null,
      items: ["Login", "Sign Up"]
    };
  },
  components: {
    Login,
    Signup
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.card {
  margin: auto;
}
.basil {
  background-color: rgba(230, 107, 25, 0.808) !important;
}
.basil--text {
  color: #ffffff !important;
}
.tabnames {
  height: 100vh;
  background-image: url("../assets/background1.png");
}
</style>
