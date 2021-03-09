import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './styles/_global.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
