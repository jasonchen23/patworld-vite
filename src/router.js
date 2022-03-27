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
      path: "/forgotPassword", component: () => import("./views/Richer-vip/forgotPassword.vue"),
    },
    {
      path: "/login", component: () => import("./views/Richer-vip/login.vue"),
    },
    {
        path: "/logout", component: () => import("./views/Richer-vip/logout.vue"),
    },
    {
      path: "/register", component: () => import("./views/Richer-vip/register.vue"),
    },
    {
      path: "/registers", component: () => import("./views/Richer-vip/registers.vue"),
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});