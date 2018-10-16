<template>
  <v-dialog v-model="isDialog" scrollable>
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
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDialog: false
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
