import App from './App.vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import Lightbox from 'vue-easy-lightbox'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Vue.use(Lightbox);

new Vue({
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app');
