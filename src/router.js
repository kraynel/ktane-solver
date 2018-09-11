import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/memory",
      name: "memory",
      component: () =>
        import(/* webpackChunkName: "memory" */ "./views/Memory.vue")
    },
    {
      path: "/complicated-wires",
      name: "complicated-wires",
      component: () =>
        import(/* webpackChunkName: "complicated-wires" */ "./views/ComplicatedWires.vue")
    }
  ]
});
