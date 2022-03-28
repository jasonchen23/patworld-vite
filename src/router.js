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
        path: "/Donate2", component: () => import("./views/Donate2_list.vue"),
    },
    {
        path: "/Donate3", component: () => import("./views/Donate3_check.vue"),
    },
    {
        path: "/Donate4", component: () => import("./views/Donate4_pay.vue"),
    },
    {
        path: "/Donate5", component: () => import("./views/Donate5_done.vue"),
    },
    {
        path: "/member", component: () => import("./views/MemberPage.vue"),
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});