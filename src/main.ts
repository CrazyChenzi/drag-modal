import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import HeyUI from 'heyui';
import 'heyui/themes/index.less';
import vDrag from '@/directives/drag'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(HeyUI)
Vue.directive('drag', vDrag)

new Vue({
  render: h => h(App),
}).$mount('#app')
