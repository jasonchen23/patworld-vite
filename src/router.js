import { createRouter, createWebHashHistory } from "vue-router";
import NavComponent from "./components/NavComponent.vue"
const routes = [
    {
        path: "/", component: () => import("./views/HomePage.vue"),
    },
    {
        path: "/vip", component: () => import("./views/VipPage.vue"),
    },
    {
        path: "/shop", component: () => import("./views/ShopPage.vue"),children : [
            {path : '/shop', name : 'Navbar', component : NavComponent},]
    },
    {
        path: "/donate", component: () => import("./views/DonatePage.vue"),
    },
    {
        path: "/member", component: () => import("./views/MemberPage.vue"),
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});