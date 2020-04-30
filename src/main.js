import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let name;
new Vue({
  render: h => h(App),
}).$mount('#app')
