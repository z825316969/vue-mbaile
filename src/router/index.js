import Vue from 'vue'
import Router from 'vue-router'
import Inquire from '../views/inquire'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inquire',
      component: Inquire
    },
    {
      path: '/task',
      name: 'task',
      component:  () => import('../views/task/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/details',
      name: 'details',
      component:  () => import('../views/details/index.vue')
    },
  ]
})
