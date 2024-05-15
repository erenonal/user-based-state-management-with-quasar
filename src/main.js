import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";
import App from "./App.vue";
import router from "./router"; 
import './style.css';  

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(pinia);

myApp.use(Quasar, {
});

myApp.use(router);

myApp.mount("#app");
