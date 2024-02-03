import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createRouter, createWebHistory } from "vue-router";

import LoginPageVue from "./components/LoginPage.vue";
import RegisterPageVue from "./components/RegisterPage.vue";
import OTPPageVue from "./components/OTPPage.vue";

loadFonts();

const routes = [
  {
    path: "/",
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
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount("#app");
