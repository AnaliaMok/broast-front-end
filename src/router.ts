import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // TODO: Turn back on before deploying.
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'style-guide',
      name: 'styleGuide',
      component: () => import(/* webpackChunkName: "style-guide" */ './views/StyleGuide.vue')
    },
    {
      path: 'roasters',
      name: 'roasters',
      component: () => import('./views/roasters/RoastersList.vue')
    }
  ]
});
