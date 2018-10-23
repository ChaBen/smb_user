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
          <v-flex class="active">03</v-flex>
        </v-layout>
        <v-flex class="step-title" text-xs-center>예약 상세 정보 입력</v-flex>
        <v-layout align-center>
          <v-flex>04</v-flex>
        </v-layout>
      </v-layout>

      <v-layout align-center class="full-standby-title">
        <v-flex class="normal">
          <p>2018.09.20(토) 12:00</p>성인 2, 유아 1
        </v-flex>
      </v-layout>

      <v-layout justify-center class="full-standby-payment">
        <v-slide-y-transition>
          <v-layout v-show="activeNav" wrap class="payment-info">
            <v-flex xs7 class="bold">김수현</v-flex>
            <v-flex xs5 text-xs-right>방문자 이름</v-flex>
            <v-flex xs7 class="bold">010-1234-5678</v-flex>
            <v-flex xs5 text-xs-right>방문자 전화번호</v-flex>
            <v-flex xs7 class="bold">생일</v-flex>
            <v-flex xs5 text-xs-right>모임유형</v-flex>
            <v-flex xs7>한분은 30분정도 늦게 도착예정입니다.</v-flex>
            <v-flex xs5 text-xs-right>메모</v-flex>
          </v-layout>
        </v-slide-y-transition>
        <v-fab-transition>
          <v-btn :key="activeIcon" absolute dark fab bottom right small color="black" class="smb-down" @click="toggleNav">
            <v-icon dark size="24">{{ activeIcon }}</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>

      <div class="content payment mt-0">
        <div class="payment-box">
          <div class="payment-title">예약금을 결제하시면, <br>예약이 완료됩니다.</div>
          <v-layout justify-space-between align-center class="payment-price">
            <v-flex class="tit">예약금</v-flex>
            <v-flex class="value">30,000원</v-flex>
          </v-layout>
          <v-layout justify-space-between align-center class="payment-refund">
            <v-flex>
              <v-checkbox label="환불 정책 동의" color="grey darken-1" class="smb-input"/>
            </v-flex>
            <v-flex class="value">
              <v-btn small class="smb-btn">보기</v-btn>
            </v-flex>
          </v-layout>
        </div>
        <div class="reser-title">결제수단선택</div>
        <v-layout justify-center align-center class="smb-template">결제수단선택 UI</v-layout>
        <v-checkbox label="결제 내용 및 금액을 확인했으며, 이에 동의합니다." color="grey darken-1" class="smb-input" style="margin-top: 10px"/>
        <v-layout class="page-lay" style="margin-top: 30px;">
          <v-flex xs12>
            <v-btn class="page-btn grey" block>이전</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn class="page-btn" block>예약금 결제하기</v-btn>
          </v-flex>
        </v-layout>
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
