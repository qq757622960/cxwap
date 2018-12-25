// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VCharts from 'v-charts'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
import 'v-charts/lib/style.css'
import _ from 'lodash'

// import vConsole from 'vconsole'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
