<template>
  <div>
    <v-toolbar :height="56" :class="{ 'main': path === 'Main' }" :fixed="path !== 'Main'" class="smb-header">
      <v-btn flat icon @click="menuEvent(icon)">
        <img :src="`/static/icons/${icon}.svg`" alt="">
      </v-btn>
      <v-toolbar-title v-if="title">{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="header-toolbar">
        <v-btn v-for="item in link" :key="item.title" :to="item.path" flat @click="linkEvent(item.event)"><img :src="`/static/icons/${item.icon}.svg`" alt="">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <share-popup :dialog.sync="dialog" />
    <notice-popup :dialog.sync="dialog1" />
  </div>
</template>

<script>
import SharePopup from '@/components/popups/common/share'
import NoticePopup from '@/components/popups/common/notice2'

export default {
  name: 'Header',
  components: {
    SharePopup, NoticePopup
  },
  data() {
    return {
      dialog: false,
      dialog1: false,
      links: {
        Main: [
          { title: '대기', icon: 'waiting', path: '/standby' },
          { title: '예약', icon: 'reser', event: 'reser' },
          { title: '공유', icon: 'share', event: 'share' }
        ],
        Order: [
          { title: '메뉴 추가', icon: 'add', event: '' }
        ],
        OrderChange: [
          { title: '메뉴 추가', icon: 'add', event: '' }
        ],
        TakeoutList: [
          { title: '대기', icon: 'waiting', path: '/standby' },
          { title: '예약', icon: 'reser', event: 'reser' },
          { title: '공유', icon: 'share', event: 'share' }
        ],
        Menus: [
          { title: '대기', icon: 'waiting', path: '/standby' },
          { title: '예약', icon: 'reser', event: 'reser' },
          { title: '공유', icon: 'share', event: 'share' }
        ],
        Shop: [
          { title: '대기', icon: 'waiting', path: '/standby' },
          { title: '예약', icon: 'reser', event: 'reser' },
          { title: '공유', icon: 'share', event: 'share' }
        ]
      }
    }
  },
  computed: {
    path() {
      return this.$route.name
    },
    link() {
      console.log(this.$route.name)
      return this.links[this.$route.name] || []
    },
    icon() {
      return this.$route.meta.icon || 'aside'
    },
    title() {
      return this.$route.meta.title || false
    }
  },
  methods: {
    toogleSidebar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    },
    menuEvent(event) {
      switch (event) {
        case 'aside':
          this.$store.commit('TOGGLE_SIDEBAR')
          break
        case 'close':

          break
        case 'back':
          this.$router.go(-1)
          break
        default:
          break
      }
    },
    linkEvent(event) {
      switch (event) {
        case 'share':
          this.dialog = true
          break
        case 'reser':
          this.dialog1 = true
          break
        default:
          break
      }
    }
  }
}
</script>

