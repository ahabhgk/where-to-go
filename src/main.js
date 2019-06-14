import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
