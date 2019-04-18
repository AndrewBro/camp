import App from './App.vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'aos/dist/aos.css'
import VueTilt from 'vue-tilt.js'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueTilt);

new Vue({
  el: '#app',
  created () {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app');
