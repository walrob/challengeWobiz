import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/views/Layout/DashboardLayout";
import AuthLayout from "@/views/Layout/AuthLayout";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "Home",
      component: DashboardLayout,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "Dashboard" */ "../views/Home")
        }
      ]
    },
    {
      path: "/",
      redirect: "Login",
      component: AuthLayout,
      meta: {
        requiresNotAuth: true
      },
      children: [
        {
          path: "/signin",
          name: "Login",
          component: () =>
            import(/* webpackChunkName: "Login" */ "../views/Auth/Login")
        },
        {
          path: "/signup",
          name: "Register",
          component: () =>
            import(/* webpackChunkName: "Register" */ "../views/Auth/Register")
        },
        {
          path: "/recovery",
          name: "Reset",
          component: () =>
            import(/* webpackChunkName: "Reset" */ "../views/Auth/Reset")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("auth")) ? true : false;

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: "Login" });
    return;
  }
  if (to.matched.some(record => record.meta.requiresNotAuth) && isLoggedIn) {
    next({ name: "Home" });
    return;
  }

  next();
});

export default router;
