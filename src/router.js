import { createRouter, createWebHashHistory } from "vue-router";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
    {
        path: "/", component: () => import("./views/HomePage/HomePage.vue"),
    },
    {
        path: "/vip", component: () => import("./views/VipPage.vue"),
    },
    {
        path: "/adopt", component: () => import("./views/AdoptPage.vue"),
        // children : [
        //     {path : '/shop', name : 'Navbar', component : NavbarBox},]
    },
    {
        path: "/stray", component: () => import("./views/StrayAnimal.vue")
    },
    {
        path: "/donate", component: () => import("./views/DonatePage.vue"),
    },
    {
        path: "/member", component: () => import("./views/MemberPage.vue"),
    },
    {
        path: "/detail", component: () => import("./views/AnimalDetail.vue") ,
    },
    {
        path: "/notice", component: () => import("./views/AdoptionNotice.vue")
    },
    {
        path: "/fillin", component: () => import("./views/AdopterFillin.vue")
    },
    {
        path: "/sent", component: () => import("./views/DataSent.vue")
    },
    
    
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});