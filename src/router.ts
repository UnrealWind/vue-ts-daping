import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/login',
    //   component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    //   meta: { hidden: true }
    // },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: 'e路康明斯用户及功能看板',
            icon: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/actService',
      component: Layout,
      redirect: '/actService',
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "form" */ '@/views/actService/index.vue'),
          meta: {
            title: '车联网及HMLD主动服务',
            icon: 'form'
          }
        }
      ]
    },
    {
      path: '/dealer',
      component: Layout,
      redirect: '/dealer',
      children: [
        {
          path: 'index',
          component: () => import(/* webpackChunkName: "form" */ '@/views/dealer/index.vue'),
          meta: {
            title: '经销商服务网络分布',
            icon: 'international'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
