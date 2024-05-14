import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";

const myApp = createApp(App);
const pinia = createPinia();
import "./style.css";

myApp.use(pinia);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.mount("#app");