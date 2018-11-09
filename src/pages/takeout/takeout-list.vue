<template>
  <div class="content">
    <v-layout align-center class="full-smb-title mb-10">
      <v-flex xs12>이용 예정</v-flex>
      <v-flex xs12 text-xs-right>{{ childSum }}건</v-flex>
    </v-layout>

    <template v-for="(item, key) in schedules">
      <v-layout :key="`${key}-take`" row align-center class="page-title take">
        <v-layout row>
          <v-flex><img :src="`/static/icons/${item.icon}.svg`" vertical alt=""></v-flex>
          <v-flex style="width: 50px">{{ item.title }}</v-flex>
        </v-layout>
        <v-flex xs12/>
      </v-layout>

      <v-list :key="`${key}-list`" class="standby-list">
        <v-list-tile-content v-for="(list, k) in item.childs" :key="k" :class="{ 'mt-10': k !== 0 }" class="mb-0">
          <v-list-tile-title>{{ list.date }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ list.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list>
    </template>

    <v-layout align-center class="full-smb-title child">
      <v-flex xs12>이용 완료</v-flex>
      <v-flex xs12 text-xs-right>{{ completes.length }}건</v-flex>
    </v-layout>

    <v-list class="standby-list">
      <v-list-tile-content v-for="(list, k) in completes" :key="k">
        <v-list-tile-title>{{ list.date }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ list.subtitle }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list>

  </div>
</template>

<script>
import _sum from 'lodash/sum'
import _map from 'lodash/map'

export default {
  data() {
    return {
      schedules: [
        {
          title: '예약',
          icon: 'reser',
          childs: [
            { date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' },
            { date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
          ]
        },
        {
          title: '대기',
          icon: 'waiting',
          childs: [
            { date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
          ]
        },
        {
          title: '포장',
          icon: 'wrap',
          childs: [
            { date: '2018.09.15(토) 18:00', subtitle: '성인 2, 유아 2', state: '예약 완료' }
          ]
        }
      ],
      completes: [
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' },
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' },
        { date: '2018.08.06(수) 13:00', subtitle: '이용인원' }
      ]
    }
  },
  computed: {
    childSum() {
      return _sum(_map(this.schedules, 'childs.length'))
    }
  }
}
</script>
