import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import initInfo from '@/views/initInfo.vue'
import appointment from '../views/appointment.vue'
import operationCenter from '../views/operationCenter.vue'
import aseal from '../views/aseal.vue'
import credentialsDetails from '../views/credentialsDetails.vue'
import appointList from '../views/appointList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'initInfo',
    component: initInfo
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: appointment
  },
  {
    path: '/operationCenter',
    name: 'operationCenter',
    component: operationCenter
  },
  {
    path: '/aseal',
    name: 'aseal',
    component: aseal
  },
  {
    path: '/credentialsDetails',
    name: 'credentialsDetails',
    component: credentialsDetails
  },
  {
    path: '/credentialsDetails',
    name: 'credentialsDetails',
    component: credentialsDetails
  },
  {
    path: '/appointList',
    name: 'appointList',
    component: appointList
  },
  //组件列表主页面
  {
    path: '/showComponents',
    name: 'showComponents',
    component: () => import('@/views/showComponents.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
