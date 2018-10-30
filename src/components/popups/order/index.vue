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

        <v-toolbar-title>주문</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="header-toolbar dialog">
          <v-btn flat><img src="/static/icons/order-menu-goods.svg" alt="주문 요청">주문 요청</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="header-toolbar dialog">
          <v-btn flat @click="dialog = true"><img src="/static/icons/order-menu-add.svg" alt="메뉴 추가 아이콘">메뉴 추가</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <div class="content order mt-0">
        <div class="order-scroll">
          <div class="order-box">
            <v-layout row align-center>
              <v-flex class="order-img">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  width="80px"
                  contain
                />
              </v-flex>
              <v-flex>
                <div class="order-title">리코타 치즈 샐러드</div>
                <v-layout row class="order-list">
                  <v-flex>- 블루베리 드레싱</v-flex>
                  <v-flex text-xs-right xs2>x 1</v-flex>
                </v-layout>
                <div class="order-price">25,000원</div>
                <v-btn class="order-close" flat icon>
                  <v-icon size="20">close</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>
        </div>
        <v-layout align-center row wrap class="order-info">
          <v-flex xs6>총 선택 메뉴</v-flex>
          <v-flex xs6>2개</v-flex>
          <v-flex xs6>총 메뉴 금액</v-flex>
          <v-flex xs6>50,000원</v-flex>
        </v-layout>
        <v-layout class="page-lay">
          <v-flex xs6>
            <v-btn class="page-btn grey">전체 메뉴 삭제</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn class="page-btn">결제하기</v-btn>
          </v-flex>
        </v-layout>
      </div>

      <order-menu-add v-model="dialog"/>
    </v-card>
  </v-dialog>
</template>

<script>
import OrderMenuAdd from '@/components/popups/order/menu-add'

export default {
  components: {
    OrderMenuAdd
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
