import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HeyUI from 'heyui';
import 'heyui/themes/index.less';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(HeyUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
