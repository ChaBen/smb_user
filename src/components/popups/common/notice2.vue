<template>
  <v-dialog v-model="isDialog">
    <v-card tile class="smb-dialog">
      <v-toolbar card justify-center height="45">
        <v-toolbar-title>알림</v-toolbar-title>
        <v-btn icon @click="isDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="dialog-content">
        <div class="notice-title">‘김하나’님이<br>주문을 요청하셨습니다.</div>
        <div class="share-box">
          <v-layout column>
            <v-layout row align-center>
              <v-flex class="info-dt">2018.09.15(토)</v-flex>
              <v-flex class="info-dd">주문일</v-flex>
            </v-layout>
            <v-layout row align-center>
              <v-flex class="info-dt">신용카드</v-flex>
              <v-flex class="info-dd">결제수단</v-flex>
            </v-layout>
            <v-layout row align-center>
              <v-flex class="info-dt">203,000원</v-flex>
              <v-flex class="info-dd">결제금액</v-flex>
            </v-layout>
            <v-layout row align-center>
              <v-flex class="info-dt normal">ORD180915</v-flex>
              <v-flex class="info-dd">주문번호</v-flex>
            </v-layout>
          </v-layout>
          <v-layout column class="order-cont">
            <v-flex class="info-dd" style="margin-bottom: 10px;">주문내역</v-flex>
            <template v-for="item in orders">
              <v-flex :key="item.title" class="order-title">{{ item.title }}</v-flex>
              <v-layout v-for="o in item.child" :key="o.title" row wrap align-center>
                <v-flex class="order-label">- {{ o.title }}</v-flex>
                <v-flex class="order-length">x {{ o.length }}</v-flex>
                <v-flex class="order-price">{{ o.price | currency }}원</v-flex>
              </v-layout>
            </template>
          </v-layout>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  filters: {
    currency(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDialog: false,
      orders: [
        {
          title: '리코타 치즈 샐러드',
          child: [
            { title: '블루베리 드레싱', length: 1, price: '25000' },
            { title: '올리브 X', length: 3, price: '75000' }
          ]
        },
        {
          title: '울프강 스테이크 샌드위치',
          child: [
            { title: '미디움 레어', length: 1, price: '36000' },
            { title: '미디움 웰던', length: 2, price: '72000' }
          ]
        }
      ]
    }
  },
  watch: {
    dialog(val) {
      this.isDialog = val
    },
    isDialog(val) {
      if (!val) {
        this.$emit('update:dialog', false)
      }
    }
  }
}
</script>
