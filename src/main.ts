import Vue from 'vue';
import App from './App.vue';
import router from './router';
import DefaultLayout from './layouts/DefaultLayout.vue';

// Styles.
import '@/assets/css/main.css';

Vue.config.productionTip = false;

Vue.component('Layout', DefaultLayout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
