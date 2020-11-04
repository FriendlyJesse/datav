import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vchart.js'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
Vue.component('v-chart', VueECharts)

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
