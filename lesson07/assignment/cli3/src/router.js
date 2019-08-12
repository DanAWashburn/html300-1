import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Images from './views/Images.vue'
import Accordion from './views/Accordion.vue'
import Grid from './views/Grid.vue'


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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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

  ]
})
