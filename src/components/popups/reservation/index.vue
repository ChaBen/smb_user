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
          <v-flex class="active">02</v-flex>
        </v-layout>
        <v-flex class="step-title" text-xs-center>예약 상세 정보 입력</v-flex>
        <v-layout align-center>
          <v-flex>03</v-flex>
          <v-flex>04</v-flex>
        </v-layout>
      </v-layout>

      <v-layout align-center class="full-standby-title">
        <v-flex class="normal"><p>2018.09.20(토) 12:00</p>성인 2, 유아 1</v-flex>
      </v-layout>

      <div class="content mt-0">
        <div class="reser-title mt-0">예약자 정보</div>
        <v-layout column class="reser-box">
          <v-flex style="margin-bottom: 10px;">
            <v-text-field class="smb-input" outline label="이름"/>
          </v-flex>
          <v-flex style="margin-bottom: 10px;">
            <v-text-field class="smb-input" outline label="전화번호"/>
          </v-flex>
        </v-layout>
        <div class="reser-title">방문자 정보</div>
        <v-radio-group v-model="reser.info" class="smb-radio two" row>
          <v-radio label="본인 방문" value="me" color="grey darken-1"/>
          <v-radio label="타인 방문" value="others" color="grey darken-1"/>
        </v-radio-group>
        <div class="reser-title">이용 목적</div>
        <v-radio-group v-model="reser.purpose" class="smb-round three" row>
          <v-radio v-for="pur in purposes" :key="pur.title" :label="pur.title" :value="pur.value" color="grey darken-1" />
        </v-radio-group>
        <div class="reser-title">메모</div>
        <v-textarea class="smb-textarea" no-resize outline label="내용" value="한분은 30분정도 늦게 도착 예정입니다."/>
        <div class="tip">※ 매장 상황에 따라 메모해주신 내용을 반영하기 어려울 수<br>있습니다.</div>
        <v-layout class="page-lay" style="margin-top: 30px;">
          <v-flex>
            <v-btn class="page-btn grey" block>이전</v-btn>
          </v-flex>
          <v-flex>
            <v-btn class="page-btn grey" block>다음</v-btn>
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
      reser: {
        info: 'me',
        purpose: 'birthday'
      },
      purposes: [
        { title: '일반', value: 'Normal' },
        { title: '생일', value: 'birthday' },
        { title: '기념일', value: 'Anniversary' },
        { title: '모임', value: 'meeting' },
        { title: '회식', value: 'Dining together' },
        { title: '비즈니스', value: 'business' }
      ]
    }
  }
}
</script>
