// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MasterLayout from './MasterLayout'
import router from './router'
import 'bootstrap'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<master-layout/>',
  components: { MasterLayout }
})
