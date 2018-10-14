<template>
  <v-app id="app">

    <smb-aside />

    <smb-header :is-main="hasMain" />

    <v-content>
      <v-container fluid pa-0>
        <router-view />
      </v-container>
    </v-content>

    <smb-footer />

    <!-- popup anchor -->
    <popup-anchor/>

  </v-app>
</template>

<script>
import SmbAside from '@/components/aside'
import SmbHeader from '@/components/header'
import SmbFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    SmbAside, SmbHeader, SmbFooter
  },
  computed: {
    hasMain() {
      return this.$route.name === 'Main'
    }
  }
}
</script>
