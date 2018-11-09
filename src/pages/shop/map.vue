<template>
  <div class="content-top">
    <div id="map"/>
    <div class="content mt-0">
      <v-layout row wrap class="shop-list bt-0">
        <v-flex xs8>서울특별시 강남구 청담동 선릉로 152길 21</v-flex>
        <v-flex xs4>주소</v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Map from '@/service/map'

export default {
  name: 'Map',
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = new Map()
  }
}
</script>
