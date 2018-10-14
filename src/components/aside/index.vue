<template>
  <v-navigation-drawer
    v-model="sidebar"
    class="smb-aside"
    absolute
    temporary
  >
    <v-list class="drawer-header">
      <div class="drawer-logo"><img src="" alt=""></div>
      <div class="drawer-title">울프강 스테이크 하우스</div>
    </v-list>

    <v-list class="pt-0 menu-list">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="{ path: item.path }"
        :class="{ active: item.active }"
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
        { title: '홈', active: false, path: '/' },
        { title: '이용 이력', active: true, path: '/' },
        { title: '예약', active: false, path: '/' },
        { title: '대기', active: false, path: '/' },
        { title: '포장', active: false, path: '/' },
        { title: '메뉴', active: false, path: '/' },
        { title: '매장', active: false, path: '/' }
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
