<template>
  <div class="content-top">
    <v-layout align-center class="full-standby-title">
      <v-flex>고객님이 즐기시는 메뉴를 편하게 주문하시고<br>원하는 시간에 찾아가세요.</v-flex>
    </v-layout>

    <div class="content mt-0">
      <div class="standby-box mb-0">
        <div class="standby-title gray bm1 pb-20">찾아가시기 원하시는 시간을<br>선택해주세요.</div>
        <v-radio-group v-model="type" class="smb-radio two" row>
          <v-radio label="예약 주문" value="me" color="grey darken-1"/>
          <v-radio label="즉시 주문" value="others" color="grey darken-1"/>
        </v-radio-group>
        <v-layout justify-center class="mt-20">
          <v-flex xs12 style="margin-right: 5px">
            <v-text-field class="smb-input" outline label="시"/>
          </v-flex>
          <v-flex xs12 style="margin-left: 5px">
            <v-text-field class="smb-input" outline label="분"/>
          </v-flex>
        </v-layout>
      </div>
      <div class="mt-10 smb-txt">
        ※ 포장 주문은 선결제로 운영하고 있습니다.<br>
        ※ 예약 주문은 당일에만 가능합니다.
      </div>
      <div class="page-lay" style="margin-top: 50px;">
        <v-btn class="page-btn">포장 주문 하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      type: 'me'
    }
  }
}
</script>
