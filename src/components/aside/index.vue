<template>
  <v-navigation-drawer v-model="sidebar" class="smb-aside" fixed temporary>
    <v-list class="drawer-header">
      <div class="drawer-logo"><img src="" alt=""></div>
      <div class="drawer-title">울프강 스테이크 하우스</div>
    </v-list>

    <v-list class="pt-0 menu-list">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="{ path: item.path }"
        :class="{ active: item.name === $route.name }"
        class="list-item">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      items: [
        { title: '홈', name: 'Main', path: '/' },
        { title: '이용 이력', name: '', path: '/' },
        { title: '예약', name: 'Reservation', path: '/reservation' },
        { title: '주문', name: 'Order', path: '/order' }, // 임시?
        { title: '대기', name: 'Standby', path: '/standby' },
        { title: '포장', name: '', path: '/' },
        { title: '메뉴', name: '', path: '/' },
        { title: '매장', name: '', path: '/' }
      ]
    }
  },
  computed: {
    sidebar: {
      get() {
        return this.$store.getters.getSidebar
      },
      set(val) {
        if (val === true) return
        this.$store.commit('TOGGLE_SIDEBAR')
      }
    }
  }
}
</script>
