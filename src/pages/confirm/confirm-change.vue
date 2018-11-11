<template>
  <div class="content-top">
    <v-layout align-center class="full-standby-title">
      <v-flex>새로운 휴대폰번호로<br>고객님의 정보를 변경합니다.</v-flex>
    </v-layout>

    <div class="content mt-0">
      <div class="standby-box">
        <div class="standby-title gray">고객님의 이름과 이전 휴대폰번호,<br>새로운 휴대폰번호를 입력해주세요.</div>
        <v-text-field class="smb-input mt-20" outline label="이름"/>
        <v-text-field class="smb-input mt-10" outline label="이전 휴대폰번호"/>
        <v-text-field class="smb-input mt-10" outline label="새로운 휴대폰번호"/>
      </div>
      <v-layout class="page-lay">
        <v-flex>
          <v-btn class="page-btn" color="grey">이전</v-btn>
        </v-flex>
        <v-flex>
          <v-btn class="page-btn">인증하기</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
