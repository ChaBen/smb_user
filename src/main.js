import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

// css
import 'vuetify/dist/vuetify.min.css'
import '@/css/reset.scss'
import '@/css/style.scss'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
