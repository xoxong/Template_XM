import Vue from 'vue'
import Router from 'vue-router'
import xbm_todilist from '@/components/xbm_todilist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xbm_todilist',
      component: xbm_todilist
    }
  ]
})
