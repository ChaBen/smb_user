<template>
  <div>
    <v-toolbar :height="56" :class="{ 'main': isMain }" class="smb-header">
      <v-btn flat icon @click="toogleSidebar">
        <img src="/static/icons/side.svg" alt="">
      </v-btn>
      <v-spacer />
      <v-toolbar-items class="header-toolbar">
        <!-- @click="linkEvent(item.event)" -->
        <v-btn v-for="item in headMenu" :key="item.title" :to="item.path" flat><img :src="`/static/icons/${item.icon}.svg`" alt="">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <header class="main-header">
      <div class="main-title">안녕하세요,<br>울프강 스테이크 하우스<br>입니다.</div>
      <v-layout row justify-space-between class="main-menu">
        <router-link v-for="item in mainMenu" :key="item.title" :to="item.path" class="menu-item">
          <div class="item-img"><img :src="`/static/icons/main-menu-${item.icon}.svg`" :alt="item.title"></div>
          <div class="item-title">{{ item.title }}</div>
        </router-link>
      </v-layout>
    </header>
  </div>
</template>

<script>
import SharePopup from '@/components/popups/share'

export default {
  name: 'Header',
  props: {
    isMain: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      headMenu: [
        { title: '대기', icon: 'waiting', path: '/1', event: 'waiting' },
        { title: '예약', icon: 'reser', path: '/', event: 'reser' },
        { title: '공유', icon: 'share', path: '/', event: 'share' }
      ],
      mainMenu: [
        { title: '이용 이력', icon: 'list', path: '' },
        { title: '메뉴 정보', icon: 'info', path: '' },
        { title: '매장 정보', icon: 'shop', path: '' }
      ]
    }
  },
  methods: {
    toogleSidebar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    },
    linkEvent(event) {
      switch (event) {
        case 'share':
          this.$popupManager.open(SharePopup).promise.then(res => {
            console.log(res)
          })
          break

        default:
          break
      }
    }
  }
}
</script>

