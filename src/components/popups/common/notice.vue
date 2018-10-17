<template>
  <v-dialog v-model="isDialog">
    <v-card tile class="smb-dialog">
      <v-toolbar card justify-center height="45">
        <v-toolbar-title>알림</v-toolbar-title>
        <v-btn icon @click="isDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="dialog-content">
        <div class="notice-title">‘김하나’님이<br>주문을 요청하셨습니다.</div>
        <div class="share-box">
          <div class="waiting-title">대기 번호</div>
          <div class="waiting-number">17</div>
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
          <v-btn class="smb-btn full">주문하기</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDialog: false
    }
  },
  watch: {
    dialog(val) {
      this.isDialog = val
    },
    isDialog(val) {
      if (!val) {
        this.$emit('update:dialog', false)
      }
    }
  }
}
</script>
