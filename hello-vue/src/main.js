import Vue from 'vue'
import App from './App.vue'
// imports from the services directory we created
import HelloAPI from '@/services/HelloAPI';

Vue.config.productionTip = false
// this adds the message from the api
Vue.prototype.$hello_api = HelloAPI

new Vue({
  render: h => h(App),
}).$mount('#app')
