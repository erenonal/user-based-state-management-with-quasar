import { createRouter, createWebHashHistory } from "vue-router";
import uiWizard from "./pages/uiWizard.vue";
import selection from "./pages/selection.vue";
import Login from "./pages/login.vue";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/ui-wizard",
    name: "UI Wizard",
    component: uiWizard,
  },
  {
    path: "/selection",
    name: "Selection",
    component: selection,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode for simplicity. Change to createWebHistory() for history mode.
  routes,
});

export default router;
