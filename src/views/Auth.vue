<template>
  <div>
    <v-row>
      <v-col cols="3">
        <Login />
      </v-col>
      <v-col cols="3">
        <Signup />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Sign.vue";

export default {
  components: {
    Login,
    Signup
  }
};
</script>
