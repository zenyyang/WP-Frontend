<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@500&display=swap");

html,
body {
  font-family: "Kantumruy Pro";
}
</style>

<script>
import LoginPage from './components/LoginPage.vue'
import OTPPage from './components/OTPPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import "./index.css";

export default {
  name: 'App',

  components: {
    LoginPage,
    RegisterPage,
    OTPPage
  },

  data: () => ({
    //
  }),
}
</script>

