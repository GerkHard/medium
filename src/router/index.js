import { createRouter, createWebHashHistory } from 'vue-router'
import GlobalFeedView from '@/views/GlobalFeedView'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeedView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
