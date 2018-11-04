<template>
  <div class="content">
    <v-layout align-center class="full-smb-title">
      <v-flex xs12>이용 예정</v-flex>
      <v-flex xs12 text-xs-right>2건</v-flex>
    </v-layout>

    <v-layout row align-center class="page-title take">
      <v-layout row>
        <v-flex><img vertical src="/static/icons/reser.svg" alt=""></v-flex>
        <v-flex style="width: 50px">예약</v-flex>
      </v-layout>
      <v-flex xs12/>
    </v-layout>

    <v-list class="standby-list mt-20">
      <v-list-tile-content v-for="item in completes" :key="item.title" @click="listClick">
        <v-list-tile-title>{{ item.date }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list>

    <v-layout align-center class="full-smb-title">
      <v-flex xs12>이용 완료</v-flex>
      <v-flex xs12 text-xs-right>2건</v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  data() {
    return {
      schedules: {
        reser: [
          { title: '예약', date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
        ],
        waiting: [
          { title: '대기', date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
        ],
        wrap: [
          { title: '포장', date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
        ]
      },
      completes: [
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' },
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' },
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' }
      ]
    }
  }
}
</script>
