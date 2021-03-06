import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import './plugins/element.js'
import './plugins/cookies.js'
import './router/authorization.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

