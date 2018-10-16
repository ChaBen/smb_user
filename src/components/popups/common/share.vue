<template>
  <v-dialog v-model="isDialog">
    <v-card tile class="smb-dialog">
      <v-toolbar card justify-center height="45">
        <v-toolbar-title>공유하기</v-toolbar-title>
        <v-btn icon @click="isDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="dialog-content">
        <div class="share-box">
          <v-layout row wrap justify-center class="share-cont">
            <router-link v-for="item in shares" :key="item.title" :to="item.path" class="share-item">
              <div class="item-img"/>
              <div class="item-title">{{ item.title }}</div>
            </router-link>
          </v-layout>
          <v-list class="share-list">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ url }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action width="80">
                <v-btn class="smb-btn">URL 복사</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
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
      isDialog: false,
      shares: [
        { title: '카카오톡', path: '/' },
        { title: '카카오스토리', path: '/' },
        { title: '밴드', path: '/' },
        { title: '라인', path: '/' },
        { title: '페이스북', path: '/' },
        { title: '트위터', path: '/' }
      ]
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
