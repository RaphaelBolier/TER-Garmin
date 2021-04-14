import Vue from "vue";
import VueRouter from "vue-router";
import NavBar from "../components/NavBar";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Dashboard from "../components/Dashboard/Dashboard"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: NavBar,
    children: [
      { path: "/", redirect: "/HomePage" },

      {
        path: "/HomePage",
        name: "HomePage",
        component: HomePage,
      },

      {
        path: "/About",
        name: "About",
        component: About,
      },
    ],
  },
  { path: "*", redirect: "/HomePage" },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
