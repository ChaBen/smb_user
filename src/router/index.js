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
import MenuDetail from '@/pages/menus/menu-detail'
import Shop from '@/pages/shop'
import Map from '@/pages/shop/map'
import Confirm from '@/pages/confirm'
import ConfirmAdd from '@/pages/confirm/confirm-add'
import ConfirmChange from '@/pages/confirm/confirm-change'
import ConfirmSms from '@/pages/confirm/confirm-sms'
import ConfirmCertify from '@/pages/confirm/confirm-certify'

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
      path: '/menus/:id',
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
    },
    {
      path: '/confirm',
      name: 'Confirm',
      meta: { icon: 'close', title: '고객 인증' },
      component: Confirm
    },
    {
      path: '/confirm/add',
      name: 'ConfirmAdd',
      meta: { icon: 'back', title: '나의 정보 등록' },
      component: ConfirmAdd
    },
    {
      path: '/confirm/change',
      name: 'ConfirmChange',
      meta: { icon: 'back', title: '휴대폰번호 변경' },
      component: ConfirmChange
    },
    {
      path: '/confirm/sms',
      name: 'ConfirmSms',
      meta: { icon: 'back', title: '인증 번호 입력' },
      component: ConfirmSms
    },
    {
      path: '/confirm/certify',
      name: 'ConfirmCertify',
      meta: { icon: 'back', title: '실명 인증' },
      component: ConfirmCertify
    }
  ]
})
