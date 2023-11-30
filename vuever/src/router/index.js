import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Home from "../components/home/Home.vue";
import AboutUs from "../components/aboutUs/AboutUs.vue";
import Service from "../components/service/Service.vue";
import ServiceSchool from "../components/serviceSchool/ServiceSchool.vue";
import Trade from "../components/trade/Trade.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: AboutUs,
    },
    {
      path: "/secvice",
      name: "secvice",
      component: Service,
    },
    {
      path: "/secviceschool",
      name: "secviceschool",
      component: ServiceSchool,
    },
    {
      path: "/trade",
      name: "trade",
      component: Trade,
    },
  ]
})

export default router
