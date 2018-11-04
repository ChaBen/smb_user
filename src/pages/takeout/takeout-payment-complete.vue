<template>
  <div class="content">
    <v-layout row align-center class="page-title">
      <v-layout row>
        <v-flex><img vertical src="/static/icons/waiting.svg" alt=""></v-flex>
        <v-flex style="width: 50px">예약</v-flex>
      </v-layout>
      <v-flex xs12 text-xs-right>예약 완료</v-flex>
    </v-layout>

    <div class="share-box mt-10">
      <div class="receipt-title">2018.09.15(토) 18:00</div>
      <div class="receipt-title regular">성인 2, 유아 1</div>
      <v-layout column class="receipt-cont">
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt">홍환희</v-flex>
          <v-flex class="info-dd">방문자 이름</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt">010-1234-5678</v-flex>
          <v-flex class="info-dd">방문자 전화번호</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt">생일</v-flex>
          <v-flex class="info-dd">모임유형</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt normal">한분은 30분정도 늦게 도착<br>예정입니다.</v-flex>
          <v-flex class="info-dd">메모</v-flex>
        </v-layout>
      </v-layout>
      <v-layout column class="receipt-cont">
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt normal">김수현</v-flex>
          <v-flex class="info-dd">예약자 이름</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt normal">010-9876-5432</v-flex>
          <v-flex class="info-dd">예약자 전화번호</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt normal">2018.07.12(수)</v-flex>
          <v-flex class="info-dd">예약일</v-flex>
        </v-layout>
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt normal">WSH180712001</v-flex>
          <v-flex class="info-dd">예약번호</v-flex>
        </v-layout>
      </v-layout>
      <v-layout column class="receipt-cont">
        <v-layout row align-center style="margin-bottom: 4px;">
          <v-flex class="info-dt">30,000원</v-flex>
          <v-flex class="info-dd">예약금</v-flex>
        </v-layout>
      </v-layout>
      <div class="payment-title mt-10 bm0 bt1">함께하는 분들께<br>예약 내용을 공유해보세요!</div>
      <v-btn class="smb-btn" block>예약 내용 공유하기</v-btn>
      <v-layout row class="mt-10">
        <v-flex xs12 style="padding-right: 5px;">
          <v-btn class="smb-btn" color="grey" block>예약 취소</v-btn>
        </v-flex>
        <v-flex xs12 style="padding-left: 5px;">
          <v-btn class="smb-btn" color="grey" block>예약 변경</v-btn>
        </v-flex>
      </v-layout>
    </div>
    <v-list class="standby-list mt-20">
      <v-list-tile-content v-for="item in lists" :key="item.title" @click="listClick">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list>
    <p class="smb-title mt-20">미리 주문해보세요!</p>
    <p class="smb-text">매장에 오시면 빠르게 식사하실 수 있습니다.</p>
    <div class="page-lay">
      <v-btn class="page-btn mt-20">주문하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { title: "'울프강 스테이크 샌드위치' 외 2개", date: '2018.07.20(토)' },
        { title: "샌드위치 '울프강 스테이크' 외 6개", date: '2018.04.20(월)' }
      ]
    }
  }
}
</script>
