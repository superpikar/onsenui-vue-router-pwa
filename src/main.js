// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueOnsen);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes, // short for `routes: routes`
});

new Vue({
  components: {
    App,
  },
  template: '<App/>',
  router,
}).$mount('#app');


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   router,
//   components: { App },
// });
