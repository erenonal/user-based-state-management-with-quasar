import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css"; // Import Quasar CSS from dist folder
import App from "./App.vue";
import router from "./router"; // Import the router instance
import './style.css'; // Import your CSS file here

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(pinia);

myApp.use(Quasar, {
});

myApp.use(router);

myApp.mount("#app");
