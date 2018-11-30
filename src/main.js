// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VCharts from 'v-charts'
// import VeLine from 'v-charts/lib/line.common'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'
import 'v-charts/lib/style.css'

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VCharts)
// Vue.component(VeLine.name, VeLine)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
