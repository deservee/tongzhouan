// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './pages/app'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/index.styl'
import JQuery from 'jquery'
// import axios from 'axios'
import ajax from 'ajax'
// 配置请求路径
// axios.defaults.baseURL = 'http://172.16.100.176:8080/'
// Vue.prototype.$http = axios

Vue.use(ajax)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(JQuery)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
