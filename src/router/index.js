import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminView from '../views/category/AdminView.vue'
import AdminDetail from '../views/Detail/AdminDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adminPost',
    name: 'adminView',
    component: AdminView
  },
  {
    path: '/adminDetail',
    name: 'adminDetail',
    component: AdminDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
