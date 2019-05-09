// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './registerServiceWorker'
import 'mint-ui/lib/style.css'
import axios from "axios"

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './assets/lib/mui/css/mui.css'
import './assets/lib/mui/css/style.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './assets/lib/mui/css/icons-extra.css'
//import mui from './lib/mui/js/mui.min.js'
// import './lib/mui/js/mui.enterfocus.js'
// import './lib/mui/js/app.js'
// import './lib/mui/js/mui.js'
Vue.config.productionTip = false
//Vue.prototype.$mui = mui;
//让axios的请求携带验证信息到服务端
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
import MintUI from "mint-ui";
Vue.use(MintUI);
/*eslint-disable no-new */
new Vue({
  // el: '#app',
   mode: 'history',
  router,
  components: { App },
  template: '<App/>'
}).$mount("#app");