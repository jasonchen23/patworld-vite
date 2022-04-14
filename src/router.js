import { createRouter, createWebHashHistory } from "vue-router";
import Stary from "./views/Adopt/StrayAnimal.vue";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "", component: () => import("./views/HomePage/HomePage.vue"),
    },
    {
        path: "/3dindex", component: () => import("./views/HomePage/HomePage3D.vue"),
    },
    {
        path: "/member", component: () => import("./views/User/LoginView.vue"),
    },
    {
        path: "/member/center", component: () => import("./views/User/UserView.vue")
    },
    {
        path: "/adopt", component: () => import("./views/Adopt/AdoptPage.vue")
    },
    {
        path: "/adopt/strayAnimal/:page",
        name: "page",
        component: () => import("./views/Adopt/StrayAnimal.vue")
    },
    {
        path: "/adopt/strayAnimal/:page/:animal_id",
        name: "detail",
        component: () => import("./views/Adopt/AnimalDetail.vue") ,
    },
    {
        path: "/adopt/strayAnimal/:page/:animal_id/notice", 
        name: "notice",
        component: () => import("./views/Adopt/AdoptionNotice.vue"),
    },
    {
        path: "/adopt/strayAnimal/:page/:animal_id/notice/fillin",
        name: "fillin",
        component: () => import("./views/Adopt/AdopterFillin.vue")
    },
    {
        path: "/adopt/strayAnimal/:page/:animal_id/notice/fillin/sent",
        name: "sent",
        component: () => import("./views/Adopt/DataSent.vue")
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
        path: "/develop", component: () => import("./views/Member/MemberPage.vue"),
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