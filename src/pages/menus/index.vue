<template>
  <div class="content-top">
    <v-tabs ref="tab" v-model="tab" slider-color="yellow" grow color="black" fixed-tabs dark>
      <v-tab>LAUNCH</v-tab>
      <v-tab>DINNER</v-tab>

      <v-tab-item>
        <launch-tab/>
      </v-tab-item>
      <v-tab-item>1323</v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import LaunchTab from './LaunchTab'

export default {
  name: 'Menus',
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
