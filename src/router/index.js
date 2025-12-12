import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ServicePage from "@/pages/ServicePage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
    {
        path: "/",
        name: HomePage,
        component: HomePage,
    },
    {
        path: "/about",
        name: AboutPage,
        component: AboutPage,
    },
    {
        path: "/service",
        name: ServicePage,
        component: ServicePage,
    },
    {
        path: "/gallery",
        name: GalleryPage,
        component: GalleryPage,
    },
    {
        path: "/contact",
        name: ContactPage,
        component: ContactPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;