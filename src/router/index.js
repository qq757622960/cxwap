import Vue from 'vue'
import Router from 'vue-router'
import Index from 'view/index/index'
import Report from 'view/report/report'
import DLoad from 'view/dload/dload'
import Charts from 'view/charts/charts'
import Histogram from 'view/histogram/histogram'
import Line from 'view/line/line'
import Wordcloud from 'view/wordcloud/wordcloud'
import Gauge from 'view/gauge/gauge'
import Bridge from 'view/bridge/bridge'
import Cdetail from 'view/cdetail/cdetail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
		},
		{
			path: '/bridge',
			component: Bridge
		},
		{
			path: '/index',
			component: Index
		},
		{
			path: '/report',
			component: Report,
			query: {
				back: true
			}
		},
		{
			path: '/dload',
			component: DLoad
		},
		{
			path: '/cdetail',
			component: Cdetail
		},
		{
			path: '/charts',
			component: Charts,
			children: [{
				path: 'line',
				component: Line
			},{
				path: 'histogram',
				component: Histogram
			}, {
				path: 'wordcloud',
				component: Wordcloud
			}, {
				path: 'gauge',
				component: Gauge
			}]
		}
	]
})
