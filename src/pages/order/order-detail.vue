<template>
  <div class="content">
    <div class="page-title">일반 주문</div>
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
      <v-layout column class="order-cont">
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
      <v-layout row class="order-btn">
        <v-flex xs12 style="padding-right: 5px;">
          <v-btn class="smb-btn" color="grey" block>주문 취소</v-btn>
        </v-flex>
        <v-flex xs12 style="padding-left: 5px;">
          <v-btn class="smb-btn" color="grey" block>주문 변경</v-btn>
        </v-flex>
      </v-layout>
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
