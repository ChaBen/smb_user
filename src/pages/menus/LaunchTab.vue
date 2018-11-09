<template>
  <v-card flat>
    <v-card-text class="p-0">
      <v-layout justify-center align-center class="filter-box">
        <v-btn :class="{ active: filter == 'BRUNCH' }" color="white" @click="filter = 'BRUNCH'">BRUNCH</v-btn>
        <v-btn :class="{ active: filter == 'STEAK' }" color="white" @click="filter = 'STEAK'">STEAK</v-btn>
        <v-btn :class="{ active: filter == 'SALAD' }" color="white" @click="filter = 'SALAD'">SALAD</v-btn>
      </v-layout>
    </v-card-text>

    <div class="content order scroll-x mt-0">
      <div class="order-scroll">
        <v-layout :row="filter === 'BRUNCH'" :wrap="filter === 'BRUNCH'" :column="filter === 'SALAD'" :class="{ BRUNCH: filter === 'BRUNCH', STEAK: filter === 'STEAK' }" :style="`width: ${slideWidth}`">
          <v-flex v-for="(item, key) in menus" :key="key" xs6 to="/menu/1">
            <v-card class="order-box">
              <v-layout :column="filter === 'BRUNCH' || filter === 'STEAK'" :row="filter === 'SALAD'" justify-center>
                <v-flex class="order-img">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" contain />
                </v-flex>
                <v-layout column justify-space-between>
                  <div class="order-title">{{ item.title }}</div>
                  <div class="order-price">{{ item.price | currency }}원</div>
                </v-layout>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  filters: {
    currency(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data() {
    return {
      filter: 'BRUNCH',
      menus: [
        { title: '신선한 랍스타 롤 & 크림 클램 차우더', price: '33000' },
        { title: '울프강 스테이크 샌드위치', price: '36000' },
        { title: '랍스타 파스타', price: '33000' },
        { title: '클래식 버거', price: '30000' }
      ]
    }
  },
  computed: {
    slideWidth() {
      if (this.filter === 'STEAK') {
        return (this.menus.length * (window.outerWidth - 70) - 10) + 'px'
      } else {
        return 'auto'
      }
    }
  }
}
</script>
