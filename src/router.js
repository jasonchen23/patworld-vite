import { createRouter, createWebHashHistory } from "vue-router";
import Stary from "./views/Adopt/StrayAnimal.vue";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "", component: () => import("./views/HomePage/HomePage.vue"),
    },
    {
        path: "/user", component: () => import("./views/User/LoginView.vue"),
    },
    {
        path: "/adopt", component: () => import("./views/Adopt/AdoptPage.vue")
    },
    {
        path: "/adopt/strayAnimal/:page", component: () => import("./views/Adopt/StrayAnimal.vue")
    },
    {
        path: "/adopt/strayAnimal/:page/:strayAnimalId", component: () => import("./views/Adopt/AnimalDetail.vue") ,
    },
    {
        path: "/donate", component: () => import("./views/Donate/DonatePage.vue"),
    },
    {
        path: "/donate/list", component: () => import("./views/Donate/Donate2.vue"),
    },
    {
        path: "/donate/form", component: () => import("./views/Donate/Donate3.vue"),
    },
    {
        path: "/donate/done", component: () => import("./views/Donate/Donate4.vue"),
    },
    {
        path: "/member", component: () => import("./views/MemberPage.vue"),
    },
    {
        path: "/notice", component: () => import("./views/Adopt/AdoptionNotice.vue")
    },
    {
        path: "/fillin", component: () => import("./views/Adopt/AdopterFillin.vue")
    },
    {
        // path: "/sent", component: () => import("./views/Adopt/DataSent.vue")
    },
    
    
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});