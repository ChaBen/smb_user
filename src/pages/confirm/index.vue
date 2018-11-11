<template>
  <div class="content-top">
    <v-layout align-center class="full-standby-title">
      <v-flex>고객님의 소중한 정보의 안전을 위해서<br>간단한 인증 절차가 필요합니다.</v-flex>
    </v-layout>

    <div class="content mt-0">
      <div class="standby-box">
        <div class="standby-title gray">고객님의 이름과 휴대폰번호를<br>입력해주세요.</div>
        <v-text-field class="smb-input mt-20" outline label="이름"/>
        <v-text-field class="smb-input mt-10" outline label="이전 휴대폰번호"/>
        <v-layout row class="mt-20">
          <v-flex xs6>최근에 휴대폰 번호를 바꾸셨나요?</v-flex>
          <v-flex text-xs-right>
            <v-btn class="smb-btn">휴대폰 번호 변경</v-btn>
          </v-flex>
        </v-layout>
      </div>
      <div class="page-lay" style="margin-top: 50px;">
        <v-btn class="page-btn" @click="dialog = true">포장 주문 하기</v-btn>
      </div>
    </div>
  </div>
</template>
