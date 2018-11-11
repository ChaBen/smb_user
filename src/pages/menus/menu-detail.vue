<template>
  <div class="content-top">
    <v-carousel :cycle="false" touch hide-controls class="smb-carousel">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" />
    </v-carousel>

    <div class="content mt-0 order">
      <div class="smb-title tal">울프강 스테이크 샌드위치</div>
      <div class="smb-text tal mt-10">프라임 뉴욕 채끝등심, 바게뜨, 양상추, 토마토,<br>양파, 스프레드 등이 들어간 샌드위치 입니다.</div>
      <div class="smb-price">36,000원</div>
      <v-layout align-center row class="menu-item">
        <v-flex xs12 class="tit">쇠고기, 견과류</v-flex>
        <v-flex xs12 class="txt">알러지 정보</v-flex>
      </v-layout>
      <v-layout align-center row wrap class="menu-form mt-20">
        <v-flex xs10>
          <v-text-field class="smb-input" outline label="수량"/>
        </v-flex>
        <v-flex xs2 text-xs-right>
          <v-btn fab dark color="grey" @click="addOption">
            <v-icon dark>add</v-icon>
          </v-btn>
        </v-flex>
        <template v-for="(item, key) in options">
          <v-flex :key="`${key}-1`" xs6 style="padding-right: 10px">
            <v-select :items="selects" outline label="사이즈" class="smb-input"/>
          </v-flex>
          <v-flex :key="`${key}-2`" xs4>
            <v-select :items="selects" outline label="개수" class="smb-input"/>
          </v-flex>
          <v-flex :key="`${key}-3`" xs2 text-xs-right>
            <v-btn fab dark color="grey" @click="removeOption(key)">
              <v-icon dark>close</v-icon>
            </v-btn>
          </v-flex>
        </template>
      </v-layout>
      <div class="page-lay" style="margin-top: 20px;">
        <v-btn class="page-btn">메뉴 선택 완료</v-btn>
      </div>
    </div>
  </div>
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
      items: [
        { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', title: 'test1' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', title: 'test2' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', title: 'test3' },
        { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', title: 'test4' }
      ],
      selects: ['test1', 'test2', 'test3', 'test4'],
      options: []
    }
  },
  methods: {
    addOption() {
      this.options.push({ value: '' })
    },
    removeOption(index) {
      this.options.splice(index, 1)
    }
  }
}
</script>
