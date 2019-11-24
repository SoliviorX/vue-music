import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决移动端点击300ms延迟
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
