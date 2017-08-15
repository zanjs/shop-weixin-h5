import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index.vue'
import Order from '../components/order/order.vue'
import Mine from '../components/mine/mine.vue'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/mine',
    component: Mine
  }
  ]
})
