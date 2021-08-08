import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'
import App from './App.vue'
import router from './router'
import store from './store'
 
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'NPgi0IlOhDpSPGBX0FsG8U3tfdm6CoPn'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
