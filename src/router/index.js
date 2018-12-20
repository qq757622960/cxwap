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
import Cdetail from 'view/cdetail/cdetail'                     // 详情页面
import Aftsale from 'view/aftsale/aftsale'                     // 客服
import WarmRemind from 'view/warmRemind/warmRemind'
import AftsaleExplain from 'view/aftsaleExplain/aftsaleExplain'
import ApplyRefund from 'view/applyRefund/applyRefund'
import WeightShare from 'view/weightShare/weightShare'         // 体重分享
import InviteFriends from 'view/inviteFriends/inviteFriends'   // 邀请好友

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
			path: '/weightShare',
			component: WeightShare
		},
		{
			path: '/inviteFriends',
			component: InviteFriends
		},
		{
			path: '/aftsale',
			component: Aftsale,
			children: [{
				path: '/warmRemind',
				component: WarmRemind
			}, {
				path: '/aftsaleExplain',
				component: AftsaleExplain
			}, {
				path: '/applyRefund',
				component: ApplyRefund
			}]
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
