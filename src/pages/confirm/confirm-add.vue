<template>
  <div class="content-top">
    <v-layout align-center class="full-standby-title">
      <v-flex>고객님의 편리한 서비스 이용을 위해서<br>고객님의 정보 등록이 필요합니다.</v-flex>
    </v-layout>

    <div class="content mt-0">
      <div class="standby-box">
        <div class="standby-title gray">고객님의 이름과 휴대폰번호를<br>입력해주시고, 약관에 동의해주세요.</div>
        <v-text-field class="smb-input mt-20" outline label="이름"/>
        <v-text-field class="smb-input mt-10" outline label="이전 휴대폰번호"/>
        <v-layout row wrap class="mt-20 bt-1 pt-15">
          <v-flex xs9>
            <v-checkbox label="서비스 이용 약관 동의" color="grey darken-1" class="smb-input"/>
          </v-flex>
          <v-flex text-xs-right>
            <v-btn class="smb-btn" small>보기</v-btn>
          </v-flex>
          <v-flex xs9 class="mt-10">
            <v-checkbox label="개인정보수집 및 이용 동의" color="grey darken-1" class="smb-input"/>
          </v-flex>
          <v-flex text-xs-right class="mt-10">
            <v-btn class="smb-btn" small>보기</v-btn>
          </v-flex>
        </v-layout>
        <v-layout class="mt-20 pt-10 bt-1">
          <v-flex xs6/>
          <v-flex>
            <v-checkbox label="모두 동의합니다." color="grey darken-1" class="smb-input"/>
          </v-flex>
        </v-layout>
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
