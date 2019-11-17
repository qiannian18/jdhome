import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
import axios from "axios"
Vue.use(axios)
Vue.prototype.$http=axios
/* Vue.prototype.baseUrl="http://localhost:9090/" */
Vue.prototype.baseUrl="http://xtrcch.natappfree.cc/"
Vue.prototype.ImgbaseUrl="https://img14.360buyimg.com/n1/"
import router from "./routes/router.js"

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
