import {createWebHistory} from 'vue-router'
import {createRouter} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import AboutMePage from '@/components/AboutMePage.vue'
import KatalogPage from '@/components/KatalogPage.vue'
import SellingPage from '@/components/SellingPage.vue'
import ContactPage from '@/components/ContactPage.vue'
// import AboutMePage from '@/components/AboutMePage.vue'
// import ContactUs from '@/components/ContactUs.vue'
// import Overview from '@/components/Overview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMePage,
  },
  {
    path: '/katalog',
    name: 'Katalog',
    component: KatalogPage
  },
  {
    path: '/selling',
    name: 'Selling',
    component: SellingPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
]
  
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router