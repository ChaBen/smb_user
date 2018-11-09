import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Standby from '@/pages/standby'
import Reservation from '@/pages/reservation'
import Order from '@/pages/order'
import OrderDetail from '@/pages/order/order-detail'
import OrderChange from '@/pages/order/order-change'
import OrderChangeComplete from '@/pages/order/order-change-complete'
import Takeout from '@/pages/takeout'
import TakeoutDetail from '@/pages/takeout/takeout-detail'
import TakeoutComplete from '@/pages/takeout/takeout-complete'
import TakeoutPaymentComplete from '@/pages/takeout/takeout-payment-complete'
import TakeoutList from '@/pages/takeout/takeout-list'
import Menus from '@/pages/menus'
import MenuDetail from '@/pages/order/menu-detail'
import Shop from '@/pages/shop'
import Map from '@/pages/shop/map'

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
      meta: { icon: 'close', title: '예약' },
      component: Reservation
    },
    {
      path: '/order',
      name: 'Order',
      meta: { icon: 'close', title: '포장 주문' },
      component: Order
    },
    {
      path: '/order/detail/:id',
      name: 'OrderDetail',
      meta: { icon: 'back', title: '주문 상세' },
      component: OrderDetail
    },
    {
      path: '/order/change/',
      name: 'OrderChange',
      meta: { icon: 'close', title: '주문 변경' },
      component: OrderChange
    },
    {
      path: '/order/change/complete',
      name: 'OrderChangeComplete',
      meta: { icon: 'close', title: '주문 변경' },
      component: OrderChangeComplete
    },
    {
      path: '/takeout/',
      name: 'Takeout',
      meta: { icon: 'back', title: '이용 예정' },
      component: Takeout
    },
    {
      path: '/takeout/detail/',
      name: 'TakeoutDetail',
      meta: { icon: 'back', title: '이용 예정' },
      component: TakeoutDetail
    },
    {
      path: '/takeout/complete/',
      name: 'TakeoutDetail',
      meta: { icon: 'back', title: '이용 완료' },
      component: TakeoutComplete
    },
    {
      path: '/takeout/payment/complete/',
      name: 'TakeoutPaymentComplete',
      meta: { icon: 'back', title: '이용 예정' },
      component: TakeoutPaymentComplete
    },
    {
      path: '/takeout/list/',
      name: 'TakeoutList',
      meta: { icon: 'aside', title: '이용 이력' },
      component: TakeoutList
    },
    {
      path: '/menus',
      name: 'Menus',
      meta: { icon: 'aside', title: '메뉴' },
      component: Menus
    },
    {
      path: '/menu/:id',
      name: 'MenuDetail',
      meta: { icon: 'back', title: '매뉴 상세 정보' },
      component: MenuDetail
    },
    {
      path: '/shop',
      name: 'Shop',
      meta: { icon: 'aside', title: '매장' },
      component: Shop
    },
    {
      path: '/shop/map',
      name: 'Map',
      meta: { icon: 'back', title: '지도보기' },
      component: Map
    }
  ]
})
