import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
Vue.use(uView)
Vue.prototype._pageBack = (delta = 1) => {
  uni.navigateBack({ delta });
}
uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()