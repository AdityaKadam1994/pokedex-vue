import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faFistRaised, faShieldAlt, faTachometerAlt, faRulerVertical, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHeart)
library.add(faFistRaised)
library.add(faShieldAlt)
library.add(faTachometerAlt)
library.add(faRulerVertical)
library.add(faWeightHanging)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
