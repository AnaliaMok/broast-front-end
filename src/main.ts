import Vue from 'vue';
import App from './App.vue';
import router from './router';
import apolloProvider from './apolloProvider';
import DefaultLayout from './layouts/DefaultLayout.vue';

// Styles.
import '@/assets/css/main.css';

Vue.config.productionTip = false;

// Global Components.
Vue.component('Layout', DefaultLayout);

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
