<template>
  <v-dialog v-model="isDialog" scrollable>
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
          <div class="receipt-title">전자 영수증</div>
          <v-layout column class="receipt-cont">
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">울프강 스테이크 하우스 청담점</v-flex>
              <v-flex class="info-dd">상호</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">홍길동</v-flex>
              <v-flex class="info-dd">대표</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">123-45-678</v-flex>
              <v-flex class="info-dd">사업자번호</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">서울 강남구 청담동 89-6</v-flex>
              <v-flex class="info-dd">주소</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">02-556-8700</v-flex>
              <v-flex class="info-dd">전화</v-flex>
            </v-layout>
            <v-layout row align-center>
              <v-flex class="info-dt normal">2018.08.02 14:27</v-flex>
              <v-flex class="info-dd">거래일시</v-flex>
            </v-layout>
          </v-layout>
          <v-data-table
            :items="desserts"
            :headers="headers"
            class="basic-table"
            hide-actions>
            <template slot="items" slot-scope="props">
              <td v-html="props.item.name"/>
              <td class="text-xs-center" v-html="props.item.unit"/>
              <td class="text-xs-center" v-html="props.item.length"/>
              <td class="text-xs-right" v-html="props.item.price"/>
            </template>
            <template slot="footer">
              <td class="text-xs-left" colspan="3"><strong>결제대상금액</strong></td>
              <td class="text-xs-right"><strong>434,000</strong></td>
            </template>
          </v-data-table>
          <v-layout column class="receipt-cont normal">
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">삼성카드</v-flex>
              <v-flex class="info-dd">결제수단</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">201808021287</v-flex>
              <v-flex class="info-dd">승인번호</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">1234 6543 2222 4444</v-flex>
              <v-flex class="info-dd">카드번호</v-flex>
            </v-layout>
            <v-layout row align-center style="margin-bottom: 4px;">
              <v-flex class="info-dt normal">일시불/434,000</v-flex>
              <v-flex class="info-dd">결제금액</v-flex>
            </v-layout>
          </v-layout>
          <v-layout column class="receipt-box">
            <v-flex xl12 class="qr-img"/>
            <v-flex xl12 class="qr-code">12345678</v-flex>
          </v-layout>
          <v-btn class="smb-btn full">이미지로 저장</v-btn>
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
      headers: [
        { text: '품목명', align: 'center', sortable: false },
        { text: '단가', align: 'center', sortable: false },
        { text: '수량', align: 'center', sortable: false },
        { text: '금액', align: 'center', sortable: false }
      ],
      desserts: [{
        name: 'Wolfgang set<br>for two',
        unit: '244,000',
        length: '1',
        price: '244,000'
      },
      {
        name: 'Champagne<br>120',
        unit: '95,000',
        length: '2',
        price: '190,000'
      }]
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
