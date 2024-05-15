import { createRouter, createWebHashHistory } from "vue-router";
import calculationPage from "./pages/calculationPage.vue";
import selection from "./pages/selection.vue";
import Login from "./pages/login.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/calculation-page",
    name: "Calculation Page",
    component: calculationPage,
  },
  {
    path: "/selection",
    name: "Selection",
    component: selection,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
