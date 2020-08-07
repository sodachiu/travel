import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import City from '../views/City';
import Detail from '../views/Detail';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
