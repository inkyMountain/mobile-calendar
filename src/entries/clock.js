import Vue from 'vue'
import App from '../pages/clock/clock.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
