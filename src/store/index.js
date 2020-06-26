import Vue from 'vue'
import Vuex from 'vuex'
import { pokeDetails } from '../Vuex/pokeDetails'

Vue.use(Vuex)

export default new Vuex.Store({
  ...pokeDetails
})
