import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import('../views/BMap.vue')
  },
  {
    path: '/liquidfill',
    name: 'liquidfill',
    component: () => import('../views/Liquidfill.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
