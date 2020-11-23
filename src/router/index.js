import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/Recipe.vue"),
  },
  {
    path: "/category/:category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/CategoryExplore.vue"),
  }
  ,
  {
    path: "/area/:area",
    name: "Area",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/AreaExplore.vue"),
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/Favourites.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
