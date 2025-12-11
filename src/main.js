import './assets/style.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);
app.use(createPinia());   // <-- WAJIB ADA INI

app.mount("#app");

