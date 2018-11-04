<template>
  <div class="content">
    <v-layout row align-center class="page-title">
      <v-layout row>
        <v-flex><img vertical src="/static/icons/waiting.svg" alt=""></v-flex>
        <v-flex style="width: 50px">대기</v-flex>
      </v-layout>
      <v-flex xs12 text-xs-right>대기중</v-flex>
    </v-layout>

    <div class="standby-box mt-10">
      <div class="standby-title">대기 번호</div>
      <div class="waiting-number">28</div>
      <!-- 곧 식사 가능할때 -->
      <!-- <div class="standby-text">곧 식사하실 수 있습니다.<br>매장으로 와주세요.</div> -->
      <v-layout row wrap justify-center class="waiting-cont">
        <v-flex xs6 md4>
          <v-layout column>
            <div class="wai-tit">현재 대기중인 팀</div>
            <div class="wai-team">3팀</div>
          </v-layout>
        </v-flex>
        <v-flex xs6 md4>
          <v-layout column>
            <div class="wai-tit">예상 대기 시간</div>
            <div class="wai-date">약 25분</div>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-btn class="smb-btn" block>대기 취소</v-btn>
    </div>

    <v-list class="standby-list">
      <v-list-tile-content v-for="item in lists" :key="item.title" @click="listClick">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list>

    <div class="smb-title mt-20">미리 주문해보세요!</div>
    <div class="smb-text">매장에 오시면 빠르게 식사하실 수 있습니다.</div>

    <div class="page-lay mt-20">
      <v-btn class="page-btn">주문하기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { title: "'울프강 스테이크 샌드위치' 외 2개", date: '2018.07.20(토)' },
        { title: "샌드위치 '울프강 스테이크' 외 6개", date: '2018.04.20(월)' }
      ]
    }
  }
}
</script>
