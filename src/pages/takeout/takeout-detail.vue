<template>
  <div class="content">
    <v-layout row align-center class="page-title">
      <v-layout row>
        <v-flex><img vertical src="/static/icons/wrap.svg" alt=""></v-flex>
        <v-flex style="width: 50px">포장</v-flex>
      </v-layout>
      <v-flex xs12 text-xs-right>11:30 예약</v-flex>
    </v-layout>

    <div class="share-box mt-10">
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
      <v-layout column class="order-cont bb1">
        <v-flex class="info-dd" style="margin-bottom: 10px;">주문내역</v-flex>
        <template v-for="item in orders">
          <v-flex :key="item.title" class="order-title">{{ item.title }}</v-flex>
          <v-layout v-for="o in item.child" :key="o.title" row wrap align-center>
            <v-flex class="order-label">- {{ o.title }}</v-flex>
            <v-flex class="order-length">x {{ o.length }}</v-flex>
            <v-flex class="order-price">{{ o.price }}</v-flex>
          </v-layout>
        </template>
      </v-layout>
      <v-btn class="smb-btn mt-20" block>주문취소</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          title: '리코타 치즈 샐러드',
          child: [
            { title: '블루베리 드레싱', length: 1, price: '25,000' },
            { title: '올리브 X', length: 3, price: '75,000' }
          ]
        },
        {
          title: '울프강 스테이크 샌드위치',
          child: [
            { title: '미디움 레어', length: 1, price: '36,000' },
            { title: '미디움 웰던', length: 2, price: '72,000' }
          ]
        }
      ]
    }
  }
}
</script>
