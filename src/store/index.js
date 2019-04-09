import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 下面这个是Vuex的一个插件，每次通过mutations修改state，会在控制台打印一个logger
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 用于在开发环境中检测state的修改是否来源于commit——>mutations，如果不是会报一个警告
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})