<template>
  <div class="content-top">
    <div class="content mt-0">
      <div class="standby-box">
        <div class="standby-title gray">SMS로 보내드린<br>인증번호를 입력해주세요.</div>
        <v-text-field class="smb-input mt-20" outline label="인증번호"/>
        <v-layout row align-center class="pt-10">
          <v-flex xs9>125초 남음</v-flex>
          <v-flex>
            <v-btn class="smb-btn" style="min-width: 180px;" small>인증번호 다시 받기</v-btn>
          </v-flex>
        </v-layout>
      </div>
      <div class="page-lay" style="margin-top: 20px;">
        <v-btn class="page-btn">인증 번호 확인</v-btn>
      </div>
    </div>
  </div>
</template>
