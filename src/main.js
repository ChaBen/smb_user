import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import PopupManager from './plugins/popupmngr.js'

// css
import 'vuetify/dist/vuetify.min.css'
import '@/css/reset.scss'
import '@/css/style.scss'

Vue.use(Vuetify)
Vue.use(PopupManager)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
