import Vue from 'vue'
import Router from 'vue-router'
import Index from 'view/index/index'
import Report from 'view/report/report'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/index',
			component: Index
		},
		{
			path: '/report',
			component: Report
		}
	]
})
