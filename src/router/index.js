import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ServicePage from "@/pages/ServicePage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import cotsPage from "@/pages/cotsPage.vue";

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
    {
        path: "/cots",
        name: cotsPage,
        component: cotsPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;