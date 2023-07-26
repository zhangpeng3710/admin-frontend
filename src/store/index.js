import Vue from 'vue'
import Vuex from 'vuex'
import commonStore from './common'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    commonStore,
  }
})