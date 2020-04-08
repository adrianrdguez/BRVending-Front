<template>
  <div>
    <v-card width="400px" class="ml-5 mt-5 mx-a">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            :label="errormsg"
            v-model="email"
            prepend-icon="mdi-account-circle"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="loginMethod">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import APIServices from "../services/api.js";
export default {
  data() {
    return {
      errormsg: "Email",
      isActive: true,
      hasError: false,
      email: "",
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ]
    };
  },
  methods: {
    loginMethod() {
      const user = {
        email: this.email,
        password: this.userPassword
      };
      APIServices.login(user)
        .then(response => {
          if (!response.token) {
            this.errormsg = "Usuario Incorrecto";
          } else {
            localStorage.setItem("token", response.token);
            this.$router.push("/home");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
