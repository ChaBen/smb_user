<template>
  <v-dialog v-model="isDialog" fullscreen transition="dialog-bottom-transition">
    <v-card class="smb-fulldialog">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="isDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>대기표 받기</v-toolbar-title>
      </v-toolbar>
      <v-layout align-center class="full-standby-title">
        <v-flex>이용하실 수 있는 시간 '10분전'에<br>문자로 알려드립니다.</v-flex>
      </v-layout>

      <div class="full-dialog-content">
        <v-form lazy-validation>
          <v-layout justify-space-between align-center class="preview-box">
            <v-flex class="preview-title">예상 대기 시간</v-flex>
            <v-flex class="preview-value">약 25분</v-flex>
          </v-layout>
          <div class="preview-text">※ 예상 대기 시간은 매장 상황에 따라 변동될 수 있습니다.</div>
          <v-layout row wrap>
            <v-flex>
              <v-text-field v-model="form.name" outline label="이름" class="smb-input" />
            </v-flex>
            <v-flex>
              <v-text-field v-model="form.phone" outline label="전화번호" class="smb-input" />
            </v-flex>
            <v-flex xs6 style="padding-right: 5px;">
              <v-text-field v-model="form.adult" outline label="성인" class="smb-input" />
            </v-flex>
            <v-flex xs6 style="padding-left: 5px;">
              <v-text-field v-model="form.child" outline label="유아" class="smb-input" />
            </v-flex>
          </v-layout>
          <div class="page-lay fixed">
            <v-btn class="page-btn">대기표 받기</v-btn>
          </div>
        </v-form>
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
      isDialog: false,
      form: {
        name: null,
        phone: null,
        adult: null,
        child: null
      }
    }
  },
  computed: {
    url() {
      return location.href
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
