import { createRouter, createWebHashHistory } from "vue-router";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "/", component: () => import("./views/HomePage.vue"),
    },
    {
        path: "/vip", component: () => import("./views/VipPage.vue"),
    },
    {
        path: "/shop", component: () => import("./views/ShopPage.vue"),
        // children : [
        //     {path : '/shop', name : 'Navbar', component : NavbarBox},]
    },
    {
        path: "/donate", component: () => import("./views/DonatePage.vue"),
    },
    {
        path: "/member", component: () => import("./views/MemberPage.vue"),
    },
    {
        path: "/logout",
        component: Logout,
      },
      {
        path: "/forgot-password",
        component: ForgotPassword,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/admin",
        component: AdminPanel,
      }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});