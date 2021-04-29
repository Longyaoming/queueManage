import Vue from 'vue'
import 'lib-flexible';
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


//引入rem适配js
// import '@/lib/js/pxToRem.js'
//引入vant组件
import { Icon,Calendar,List,Cell,CellGroup,Field,Popup,Tab,Tabs } from 'vant';
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);



//全局引入http,且挂载在vue原型上
import { $http } from '@/axiosRequest/request'
Vue.prototype.$http = $http;
//引入mock
require('@/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
