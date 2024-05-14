import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css"; // Import Quasar CSS from dist folder
import App from "./App.vue";
import router from "./router"; // Import the router instance

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(pinia);

// Use Quasar as a plugin
myApp.use(Quasar, {
  // Add Quasar plugins here if needed
});

// Use the router instance
myApp.use(router);

myApp.mount("#app");
