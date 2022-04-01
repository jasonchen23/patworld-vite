import { createRouter, createWebHashHistory } from "vue-router";
import Stary from "./views/Adopt/StrayAnimal.vue";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "/", component: () => import("./views/HomePage/HomePage.vue"),
    },
    {
        path: "/user", component: () => import("./views/User/LoginView.vue"),
    },
    {
        path: "/adopt", component: () => import("./views/Adopt/AdoptPage.vue")
    },
    {
<<<<<<< HEAD
        path: "/adopt/stray/", component: () => import("./views/Adopt/StrayAnimal.vue")
    },
    {
        path: "/donate", component: () => import("./views/Donate/DonatePage.vue"),
    },
    {
        path: "/donate2", component: () => import("./views/Donate/Donate2_list.vue"),
    },
=======
        path: "/donate", component: () => import("./views/DonatePage.vue"),
        children : [
            {path : '', component: () => import("./views/DonatePage.vue")},
            {path : '/donate/list', component: () => import("./views/Donate2_list.vue")},
            {path : '/donate/check', component: () => import("./views/Donate3_check.vue")},
            {path : '/donate/pay', component: () => import("./views/Donate4_pay.vue")},
            {path : '/donate/done', component: () => import("./views/Donate5_done.vue")}]
        },
>>>>>>> 6b0ff460814f82fb51252c37c04b2bd3244ed1fb
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