import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./components/Edit.vue')
    }
  ]
})
