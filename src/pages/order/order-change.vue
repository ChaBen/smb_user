<template>
  <div class="content order">
    <div class="order-scroll">
      <div v-for="(item, key) in orders" :key="key" class="order-box">
        <v-layout row align-center>
          <v-flex class="order-img">
            <v-img
              :src="`/static/images/${item.img}`"
              width="80px"
              contain
            />
          </v-flex>
          <v-flex>
            <div class="order-title">{{ item.title }}</div>
            <v-layout v-for="(child, k) in item.childs" :key="k" row class="order-list">
              <v-flex>- {{ child.title }}</v-flex>
              <v-flex text-xs-right xs2>x {{ child.length }}</v-flex>
            </v-layout>
            <div class="order-price">{{ item.price | currency }}원</div>
            <v-btn class="order-close" flat icon @click="removeOrder(key)">
              <v-icon size="20">close</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <v-layout row wrap align-center class="order-select">
      <v-flex xs6>총 선택 메뉴</v-flex>
      <v-flex xs6>{{ orders.length }}개</v-flex>
      <v-flex xs6>총 메뉴 금액</v-flex>
      <v-flex xs6>{{ priceSum | currency }}원</v-flex>
    </v-layout>

    <v-layout class="page-lay">
      <v-flex xs6>
        <v-btn class="page-btn grey">전체 메뉴 삭제</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn class="page-btn">결제하기</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import _map from 'lodash/map'
import _sumBy from 'lodash/sumBy'

export default {
  filters: {
    currency(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  data() {
    return {
      orders: [
        {
          title: '리코타 치즈 샐러드',
          price: '25000',
          img: 'order-image.png',
          childs: [{ title: '블루베리 드레싱', length: 1 }]
        },
        {
          title: '울프강 스테이크 샌드위치',
          price: '72000',
          img: 'order-image.png',
          childs: [
            { title: '미듐 레어', length: 1 },
            { title: '미듐 웰던', length: 1 }
          ]
        },
        {
          title: '리코타 치즈 샐러드',
          price: '39800',
          img: 'order-image.png',
          childs: [
            { title: '치즈 추가', length: 1 },
            { title: '양파', length: 1 }
          ]
        }
      ]
    }
  },
  computed: {
    priceSum() {
      return _sumBy(_map(this.orders, 'price'), Number)
    }
  },
  methods: {
    removeOrder(index) {
      this.orders.splice(index, 1)
    }
  }
}
</script>
