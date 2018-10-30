<template>
  <v-dialog v-model="value" fullscreen transition="dialog-bottom-transition">
    <v-card class="smb-fulldialog">
      <v-toolbar dark color="primary" class="smb-header">

        <!-- close버튼일때 -->
        <!-- <v-btn icon dark @click="$emit('input', false)">
          <v-icon>close</v-icon>
        </v-btn> -->

        <!-- back버튼일때 -->
        <v-btn icon dark>
          <img src="/static/icons/back.svg" alt="back">
        </v-btn>

        <v-toolbar-title>메뉴 상세 정보</v-toolbar-title>
      </v-toolbar>

      <v-carousel touch hide-controls class="smb-carousel">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" />
      </v-carousel>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [
        { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
      ]
    }
  }
}
</script>
