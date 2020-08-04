import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lmucon/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue')
  },
  {
    path: '/lmucon/speakers',
    name: 'Speakers',
    component: () => import('../views/Speakers.vue')
  },
  {
    path: '/lmucon/us8e4t39',
    name: 'us8e4t39',
    component: () => import('../views/allUsers.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
