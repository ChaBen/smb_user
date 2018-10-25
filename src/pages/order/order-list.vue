<template>
  <div class="content order">
    <div class="order-scroll">
      <div class="order-box">
        <v-layout row align-center>
          <v-flex class="order-img">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              width="80px"
              contain
            />
          </v-flex>
          <v-flex>
            <div class="order-title">리코타 치즈 샐러드</div>
            <v-layout row class="order-list">
              <v-flex>- 블루베리 드레싱</v-flex>
              <v-flex text-xs-right xs2>x 1</v-flex>
            </v-layout>
            <div class="order-price">25,000원</div>
            <v-btn class="order-close" flat icon>
              <v-icon size="20">close</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <v-layout align-center row wrap class="order-info">
      <v-flex xs6>총 선택 메뉴</v-flex>
      <v-flex xs6>2개</v-flex>
      <v-flex xs6>총 메뉴 금액</v-flex>
      <v-flex xs6>50,000원</v-flex>
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
