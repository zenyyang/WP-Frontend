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
import LoginPage from './components/Auth/LoginPage.vue'
import OTPPage from './components/Auth/OTPPage.vue';
import RegisterPage from './components/Auth/RegisterPage.vue';
import WeaponInformation from './components/WeaponInfo/WeaponInformation.vue';
import Header from './components/Header.vue';
import "./index.css";

export default {
  name: 'App',

  components: {
    Header,
    WeaponInformation,
    LoginPage,
    RegisterPage,
    OTPPage
  },

  data: () => ({
    //
  }),
}
</script>

