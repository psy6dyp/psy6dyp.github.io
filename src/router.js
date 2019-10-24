import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import See from './views/See.vue'
import Per from './views/Per.vue'

import News from './views/News.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/see',
      name: 'see',
      component: See
    },
    {
      path: '/per',
      name: 'per',
      component: Per
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
