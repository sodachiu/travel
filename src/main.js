// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'styles/border.css';
import 'styles/reset.css';
import 'styles/iconfont.css';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
