import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";

import LoginPageVue from "./components/Auth/LoginPage.vue";
import RegisterPageVue from "./components/Auth/RegisterPage.vue";
import OTPPageVue from "./components/Auth/OTPPage.vue";
import WeaponInformationVue from "./components/WeaponInfo/WeaponInformation.vue";

loadFonts();

const routes = [
  {
    path: "/login",
    component: LoginPageVue,
  },
  {
    path: "/register",
    component: RegisterPageVue,
  },
  {
    path: "/otp",
    component: OTPPageVue,
  },
  {
    path: "/",
    component: WeaponInformationVue
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount("#app");
