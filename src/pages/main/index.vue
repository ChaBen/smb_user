<template>
  <div>
    <header class="main-header">
      <div class="main-title">안녕하세요,<br>울프강 스테이크 하우스<br>입니다.</div>
      <v-layout row justify-space-around class="main-menu">
        <router-link v-for="item in menu" :key="item.title" :to="item.path" class="menu-item">
          <div class="item-img"><img :src="`/static/icons/main-menu-${item.icon}.svg`" :alt="item.title"></div>
          <div class="item-title">{{ item.title }}</div>
        </router-link>
      </v-layout>
    </header>

    <v-list-tile v-for="item in mainList" :key="item.title" class="main-list">
      <template v-if="!item.whether">
        <v-list-tile-content>
          <v-list-tile-title class="list-title">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action class="list-avatar">{{ item.avatar }}<v-icon>chevron_right</v-icon></v-list-tile-action>
      </template>

      <template v-else>
        <v-list-tile-content v-for="item in reser" :key="item.title" class="main-reser">
          <v-list-tile-title class="list-reser">{{ item.title }}</v-list-tile-title>
          <v-card class="list-card">
            <div class="card-avatar">
              <img :src="`/static/icons/main-card-${item.icon}.svg`" :alt="item.title">{{ item.whether }}
            </div>
            <div class="card-content">
              <div class="card-title">{{ item.date }}</div>
              <div class="card-subtitle">{{ item.subtitle }}<v-icon>chevron_right</v-icon></div>
              <div class="card-state">{{ item.state }}</div>
            </div>
          </v-card>
        </v-list-tile-content>
      </template>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      dialog: false,
      menu: [
        { title: '이용 이력', icon: 'list', path: '' },
        { title: '메뉴 정보', icon: 'info', path: '' },
        { title: '매장 정보', icon: 'shop', path: '' }
      ],
      mainList: [
        // { title: '지금 바로 예약하실 수 있습니다!', avatar: '예약하기', path: '', whether: true },
        { title: '곧 식사하실 예정이세요?', avatar: '대기표받기', path: '', whether: true },
        { title: '편하신 시간에 찾아가세요!', avatar: '포장주문하기', path: '' }
      ],
      reser: [
        // { date: '2018.08.06(수) 13:00', title: '곧 식사실 수 있습니다. 잠시만 기다려주세요!', subtitle: '성인 4', state: '대기중', icon: 'waiting', whether: '대기' },
        // { date: '2018.08.06(수) 18:30', title: '찾아가실 포장 주문, 잊지 않으셨죠?', subtitle: "'울프강 스테이크 샌드위치'외 2개", state: '예약 완료', icon: 'paking', whether: '포장' },
        { date: '2018.09.13(금) 18:00', title: '예약금을 결제해주시면, 예약이 완료됩니다!', subtitle: '성인 2, 유아 1', state: '예약 완료', icon: 'reser', whether: '예약' }
      ]
    }
  }
}
</script>
