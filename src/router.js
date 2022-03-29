import { createRouter, createWebHashHistory } from "vue-router";
import Stary from "./views/Adopt/StrayAnimal.vue";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "/", component: () => import("./views/HomePage/HomePage.vue"),
    },
    {
        path: "/vip", component: () => import("./views/VipPage.vue"),
    },
    {
        path: "/adopt", component: () => import("./views/Adopt/AdoptPage.vue"),
        // children : [
        //     {path : 'stray', name : 'Stray',component: Stary},]
    },
    {
        path: "/adopt/stray", component: () => import("./views/Adopt/StrayAnimal.vue")
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
    {
        path: "/detail", component: () => import("./views/Adopt/AnimalDetail.vue") ,
    },
    {
        path: "/notice", component: () => import("./views/Adopt/AdoptionNotice.vue")
    },
    {
        path: "/fillin", component: () => import("./views/Adopt/AdopterFillin.vue")
    },
    {
        path: "/sent", component: () => import("./views/Adopt/DataSent.vue")
    },
    
    
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});