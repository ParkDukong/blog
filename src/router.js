import { createWebHistory, createRouter } from "vue-router";
import ListView from "./components/ListView.vue";

const routes = [
  {
    path: "/list",
    component: ListView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 