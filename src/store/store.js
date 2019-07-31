import Vue from 'vue'
import Vuex from 'vuex'

import Grid from './modules/grid'

Vue.use(Vuex)

export default new Vuex.store ({
  modules: {
    Grid
  }
})
