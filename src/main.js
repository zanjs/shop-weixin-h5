// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'lib-flexible'
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'
var VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.config.productionTip = false
Vue.use(IScrollView, IScroll)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

