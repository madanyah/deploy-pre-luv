import {createWebHistory} from 'vue-router'
import {createRouter} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ContactUs from '@/components/ContactUs.vue'
import Overview from '@/components/Overview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  }
]
  
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router