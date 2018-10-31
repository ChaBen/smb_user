<template>
  <div class="content-top">

    <v-carousel touch hide-controls class="smb-carousel">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" />
    </v-carousel>
  </div>
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
