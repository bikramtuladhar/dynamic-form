import Vue from 'vue'
import Router from 'vue-router'
import DynamicTable from '@/components/DynamicTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DynamicTable',
      component: DynamicTable
    }
  ]
})
