<template>
  <v-toolbar :height="56" :class="{ 'main': isMain }" class="smb-header">
    <v-btn flat icon>
      <img src="/static/icons/side.svg" alt="">
    </v-btn>
    <v-spacer />
    <v-toolbar-items class="header-toolbar">
      <v-btn v-for="item in items" :key="item.title" flat><img :src="`/static/icons/${item.icon}.svg`" alt="">{{ item.title }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
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
      items: [
        { title: '대기', path: '', icon: 'waiting' },
        { title: '예약', path: '', icon: 'reser' },
        { title: '공유', path: '', icon: 'share' }
      ]
    }
  }
}
</script>

