import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: false
  },
  getters: {
    getSidebar: state => {
      return state.sidebar
    }
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebar = !state.sidebar
    }
  },
  actions: {
    ToggleSidebar({ commit }, isSidebar) {
      commit('TOGGLE_SIDEBAR', isSidebar)
    }
  }
})
