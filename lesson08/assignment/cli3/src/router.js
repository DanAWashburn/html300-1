import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Images from './views/Images.vue'
import Accordion from './views/Accordion.vue'
import Grid from './views/Grid.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: Accordion
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },

  ]
})
