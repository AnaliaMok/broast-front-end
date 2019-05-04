import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/', // TODO: Switch back to own route later.
      name: 'styleGuide',
      component: () => import(/* webpackChunkName: "style-guide" */ './views/StyleGuide.vue')
    }
  ]
});
