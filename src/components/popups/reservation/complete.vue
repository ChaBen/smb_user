<template>
  <v-dialog v-model="value" fullscreen transition="dialog-bottom-transition">
    <v-card class="smb-fulldialog">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$emit('input', false)">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>예약</v-toolbar-title>
      </v-toolbar>

      <v-layout class="smb-step" align-center>
        <v-layout align-center>
          <v-flex>01</v-flex>
          <v-flex>02</v-flex>
          <v-flex>03</v-flex>
          <v-flex class="active">04</v-flex>
        </v-layout>
        <v-flex class="step-title" text-xs-center>예약 상세 정보 입력</v-flex>
        <v-layout align-center/>
      </v-layout>

      <v-layout align-center class="full-standby-title">
        <v-flex class="normal">
          <p>예약이 완료되었습니다.</p>
        </v-flex>
      </v-layout>

      <div class="content payment mt-0">
        <div class="payment-box">
          <div class="complete-title">2018.09.15(토) 18:00<p>성인 2, 유아 1</p></div>
          <v-layout wrap class="payment-info normal bm1">
            <v-flex xs7 class="bold">김수현</v-flex>
            <v-flex xs5 text-xs-right>방문자 이름</v-flex>
            <v-flex xs7 class="bold">010-1234-5678</v-flex>
            <v-flex xs5 text-xs-right>방문자 전화번호</v-flex>
            <v-flex xs7 class="bold">생일</v-flex>
            <v-flex xs5 text-xs-right>모임유형</v-flex>
            <v-flex xs7>한분은 30분정도 늦게 도착예정입니다.</v-flex>
            <v-flex xs5 text-xs-right>메모</v-flex>
          </v-layout>
          <v-layout wrap class="payment-info normal bm1">
            <v-flex xs7>김수현</v-flex>
            <v-flex xs5 text-xs-right>예약자 이름</v-flex>
            <v-flex xs7>010-9876-5432</v-flex>
            <v-flex xs5 text-xs-right>예약자 전화번호</v-flex>
            <v-flex xs7>2018.07.12(수)</v-flex>
            <v-flex xs5 text-xs-right>예약일</v-flex>
            <v-flex xs7>WSH180712001</v-flex>
            <v-flex xs5 text-xs-right>예약번호</v-flex>
          </v-layout>
          <v-layout wrap class="payment-info normal bm1">
            <v-flex xs7 class="bold">30,000원</v-flex>
            <v-flex xs5 text-xs-right>예약금</v-flex>
          </v-layout>
          <div class="payment-title mt-20 bm0">함께하는 분들께<br>예약 내용을 공유해보세요!</div>
          <v-btn class="smb-btn" block>예약 내용 공유하기</v-btn>
        </div>
        <p class="smb-title mt-20">미리 주문해보세요!</p>
        <p class="smb-text">매장에 오시면 빠르게 식사하실 수 있습니다.</p>
        <div class="page-lay">
          <v-btn class="page-btn mt-20">주문하기</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
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
      activeNav: false,
      activeIcon: 'keyboard_arrow_up'
    }
  },
  methods: {
    toggleNav() {
      this.activeIcon = this.activeNav ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
      this.activeNav = !this.activeNav
    }
  }
}
</script>
