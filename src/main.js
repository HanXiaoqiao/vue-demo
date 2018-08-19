import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import $ from './assets/js/jquery1-12.min'
/*import VueRouter from 'vue-router'

import Top from './components/Top.vue'
import Content from './components/About.vue'*/

/*Vue.use(VueRouter);*/
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
