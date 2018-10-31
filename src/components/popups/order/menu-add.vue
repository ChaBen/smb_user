<template>
  <v-dialog v-model="value" fullscreen transition="dialog-bottom-transition">
    <v-card class="smb-fulldialog">
      <v-toolbar dark color="primary" class="smb-header">

        <!-- close버튼일때 -->
        <!-- <v-btn icon dark @click="$emit('input', false)">
          <v-icon>close</v-icon>
        </v-btn> -->

        <!-- back버튼일때 -->
        <v-btn icon dark>
          <img src="/static/icons/back.svg" alt="back">
        </v-btn>

        <v-toolbar-title>메뉴 추가</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="header-toolbar dialog">
          <v-btn flat><img src="/static/icons/order-menu-goods.svg" alt="주문 요청">주문 요청</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="header-toolbar dialog">
          <v-btn flat @click="$emit('input', false)"><img src="/static/icons/add.svg" alt="메뉴 추가 아이콘">메뉴 추가</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-tabs ref="tab" v-model="tab" grow color="black" dark>
        <v-tabs-slider color="yellow"/>

        <v-tab>LAUNCH</v-tab>
        <v-tab>DINNER</v-tab>

        <v-tab-item>
          <launch-tab/>
        </v-tab-item>
        <v-tab-item>1323</v-tab-item>
      </v-tabs>
    </v-card>
  </v-dialog>
</template>

<script>
import LaunchTab from '@/components/popups/order/LaunchTab'

export default {
  components: {
    LaunchTab
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tab: 0
    }
  }
}
</script>
