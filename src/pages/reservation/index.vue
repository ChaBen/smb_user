<template>
  <div class="content-top">
    <v-layout class="smb-step" align-center>
      <v-layout align-center>
        <v-flex>01</v-flex>
        <v-flex class="active">02</v-flex>
      </v-layout>
      <v-flex class="step-title" text-xs-center>예약 일시 및 인원 입력</v-flex>
      <v-layout align-center>
        <v-flex>03</v-flex>
        <v-flex>04</v-flex>
      </v-layout>
    </v-layout>
    <div class="content mt-0 reservation">
      <v-date-picker v-model="date" :first-day-of-week="1" locale="ko-kr" full-width class="smb-picker"/>
      <div class="reser-title">이용 인원</div>
      <v-layout class="reser-box">
        <v-flex style="margin-right: 5px;">
          <v-text-field class="smb-input" outline label="성인"/>
        </v-flex>
        <v-flex style="margin-left: 5px;">
          <v-text-field class="smb-input" outline label="유아"/>
        </v-flex>
      </v-layout>
      <div class="tip" style="margin-top: 10px;">
        ※ 20분이 넘는 단체 예약은 전화로 문의해주세요.
        <p class="scar">※ 인원수가 많은 경우 2개 이상의 테이블로 세팅될 수 있습니다.테이블 위치가 중요한 경우, 전화로 예약을 진행해주세요.</p>
      </div>
      <div class="reser-title">예약 가능 시간</div>
      <v-btn class="smb-btn" block @click="dialog = true">예약 시간 선택</v-btn>
      <div class="page-lay" style="margin-top: 30px;">
        <v-btn class="page-btn grey">다음</v-btn>
      </div>
    </div>
    <Reservation-pop v-model="dialog"/>
  </div>
</template>

<script>
import ReservationPop from '@/components/popups/reservation/payment'

export default {
  components: {
    ReservationPop
  },
  data() {
    return {
      dialog: false,
      date: new Date().toJSON().slice(0, 10)
    }
  }
}
</script>
