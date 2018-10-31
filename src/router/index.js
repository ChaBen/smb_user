import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Standby from '@/pages/standby'
import Reservation from '@/pages/reservation'
import Order from '@/pages/order'
import MenuDetail from '@/pages/order/menu-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/standby',
      name: 'Standby',
      component: Standby
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/order',
      name: 'Order',
      meta: { icon: 'close', title: '포장 주문' },
      component: Order
    },
    {
      path: '/menu/:id',
      name: 'Menu',
      component: MenuDetail
    }
  ]
})
