import App from './App.vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app');
