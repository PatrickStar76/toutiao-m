import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    GET_USER (state, user) {
      state.user = user
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
