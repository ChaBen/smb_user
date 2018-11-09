<template>
  <div class="content-top">
    <v-img src="/static/images/shop.png"/>

    <div class="content mt-0">
      <div class="smb-title tal fz-18">울프강 스테이크 하우스</div>
      <div class="smb-text tal fz-16 mt-10">울프강 스테이크 하우스는 뉴욕의 맛집을 소개하는 대표적 소책자 ‘자가트 서베이’가 꼽은 스테이크 맛집 입니다.</div>
      <v-layout row wrap class="shop-list">
        <v-flex xs8>서울특별시 강남구 청담동 선릉로 152길 21</v-flex>
        <v-flex xs4>주소</v-flex>
        <v-flex xs8/>
        <v-flex xs4>
          <v-btn to="/shop/map" class="smb-btn mb-25" small style="min-width: 90px;">지도보기</v-btn>
        </v-flex>
        <v-flex xs8>02-556-8700</v-flex>
        <v-flex xs4>전화번호</v-flex>
        <v-flex xs8/>
        <v-flex xs4>
          <v-btn class="smb-btn mb-25" small style="min-width: 90px;">전화하기</v-btn>
        </v-flex>
        <v-flex xs8 class="mb-25">
          평일	11:30 ~ 21:00<br>
          주말	11:00 ~ 23:00<br>
          공휴일	11:00 ~ 23:00
        </v-flex>
        <v-flex xs4>영업시간</v-flex>
        <v-flex xs9>
          <span class="shop-icon"><img src="/static/icons/shop-icon1.svg" alt="">건물 내 무료 주차</span>
          <span class="shop-icon"><img src="/static/icons/shop-icon2.svg" alt="">발렛 가능</span><br>
          <span class="shop-icon"><img src="/static/icons/shop-icon3.svg" alt="">엘리베이터</span>
          <span class="shop-icon"><img src="/static/icons/shop-icon4.svg" alt="">베이비 시트</span>
        </v-flex>
        <v-flex>편의시설</v-flex>
      </v-layout>
      <v-btn class="smb-btn mt-35 mb-30" block>공유하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>
